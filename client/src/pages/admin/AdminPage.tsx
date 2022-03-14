import { WebsiteData } from "@server/src/interfaces/mongoose.gen";
import { useRestApiData } from "@src/hooks/restApi";
import { Jsonized } from "@src/types/util";
import {
  createEmptyObjectFromSchema,
  typeSyncObjectWithSchema,
} from "@src/util/schemaUtil";
import { camelCaseToNormal } from "@src/util/stringUtil";
import { Schema } from "mongoose";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import SchemaTypeEditor from "./components/SchemaTypeEditor";

const AdminPage = (): ReactElement => {
  const mongooseSchemaApi = useRestApiData<Jsonized<Schema>>(
    "http://localhost:4000/mongooseSchema"
  );
  const websiteDatasApi = useRestApiData<Jsonized<WebsiteData[]>>(
    "http://localhost:4000/websiteDatas"
  );

  const [websiteDatas, setWebsiteDatas] = useState<WebsiteData[] | null>(null);
  const [selectedDataId, setSelectedDataId] = useState<string | null>(null);
  const [selectedPathName, setSelectedPathName] = useState<string | null>(null);
  const selectedWebsiteData = websiteDatas?.find(
    (data) => data._id.toString() === selectedDataId
  );

  // Type sync websiteDatasApi and store it in websiteDatas
  useEffect(() => {
    if (websiteDatasApi && mongooseSchemaApi) {
      setWebsiteDatas(
        websiteDatasApi.map((websiteDataApi) =>
          typeSyncObjectWithSchema<WebsiteData>(
            websiteDataApi,
            mongooseSchemaApi
          )
        )
      );
    }
  }, [websiteDatasApi]);

  // Automatically select first website data on load
  useEffect(() => {
    if (selectedDataId === null && websiteDatas != null) {
      setSelectedDataId(websiteDatas[0]._id.toString());
    }
  }, [websiteDatas]);

  // Save modified website data
  async function saveWebsiteDataToServer() {
    if (selectedWebsiteData) {
      const res = await fetch("http://localhost:4000/websiteData", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedWebsiteData),
      });

      if (res.status === 200) {
        alert("WebsiteData saved successfully");
      } else {
        alert("Failed to save WebsiteData");
      }
    }
  }

  function handleEditorDataChange(newPathData: any) {
    if (!websiteDatas || !selectedPathName) {
      return;
    }

    const newWebsiteDatas = websiteDatas.map((websiteData) =>
      websiteData._id.toString() === selectedDataId
        ? { ...websiteData, [selectedPathName]: newPathData }
        : websiteData
    );
    setWebsiteDatas(newWebsiteDatas);
  }

  function handleWebsiteDataSelect(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    if (!websiteDatas || !mongooseSchemaApi) {
      return;
    }

    if (event.target.value === "new") {
      const newData = createEmptyObjectFromSchema<WebsiteData>(
        mongooseSchemaApi
      );
      console.log(newData);

      setWebsiteDatas([...websiteDatas, newData]);
      setSelectedDataId(newData._id.toString());
    } else {
      setSelectedDataId(event.target.value);
    }
  }

  return websiteDatas && mongooseSchemaApi ? (
    <MainContainer>
      <SideBar>
        <select
          onChange={handleWebsiteDataSelect}
          defaultValue={websiteDatas[0]._id as any}
          value={selectedDataId || undefined}
        >
          {websiteDatas.map((websiteData, index) => (
            <option
              key={websiteData._id.toString()}
              value={websiteData._id.toString()}
            >
              Data {index}
            </option>
          ))}
          <option value="new">+ Add New</option>
        </select>
        <SideBarButtonContainer>
          {Object.keys(mongooseSchemaApi.paths).map((pathName) => {
            return pathName.startsWith("_") ? null : (
              <SideBarButton
                key={pathName}
                onClick={() => setSelectedPathName(pathName)}
                selected={pathName === selectedPathName}
              >
                {camelCaseToNormal(pathName)}
              </SideBarButton>
            );
          })}
        </SideBarButtonContainer>
        <SaveButton onClick={saveWebsiteDataToServer}>Save</SaveButton>
      </SideBar>
      <EditorContainer>
        {selectedPathName && (
          <SchemaTypeEditor
            schemaType={mongooseSchemaApi.paths[selectedPathName]}
            data={(selectedWebsiteData as any)[selectedPathName]}
            onDataChange={handleEditorDataChange}
            addFieldContainers
          />
        )}
      </EditorContainer>
    </MainContainer>
  ) : (
    <></>
  );
};

const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  background-color: #f2f3f7;
`;

const EditorContainer = styled.div`
  padding: 5rem;
  overflow: scroll;
  flex-grow: 1;
`;

const SideBar = styled.div`
  width: max-content;
  padding: 2rem;
  height: 100vh;
  background-color: white;
`;

const SideBarButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: max-content;
`;

const SideBarButton = styled.button<{ selected?: boolean }>`
  font-size: 1.5rem;
  color: ${(props) => (props.selected ? "#FF3C3C" : "#B9BABD")};
  margin: 0.25rem 0;
  padding: 0.5rem 1rem;
  width: 100%;

  border-radius: 0.5rem;

  transition: background-color 0.2s ease-in-out;

  &,
  &:focus {
    outline: ${(props) => (props.selected ? 2 : 0)}px solid #ff3c3c;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const SaveButton = styled(SideBarButton)`
  font-weight: 700;
  color: #00b359;
`;

export default AdminPage;
