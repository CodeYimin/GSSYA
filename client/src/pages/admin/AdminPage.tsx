import { WebsiteData } from "@server/src/interfaces/mongoose.gen";
import { useRest, useWebsiteApi, useWebsiteDatas } from "@src/hooks/restApi";
import { Jsonized } from "@src/types/util";
import { createEmptyObjectFromSchema } from "@src/util/schemaUtil";
import { camelCaseToNormal } from "@src/util/stringUtil";
import { Schema } from "mongoose";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import SchemaTypeEditor from "./components/SchemaTypeEditor";

const AdminPage = (): ReactElement => {
  const mongooseSchemaApi = useWebsiteApi<Jsonized<Schema>>("mongooseSchema");
  const siteConfig = useRest<any>("./config/siteConfig.json");
  const websiteDatas = useWebsiteDatas();

  const [modifiedWebsiteDatas, setModifiedWebsiteDatas] = useState<
    WebsiteData[] | null
  >(null);
  const [selectedDataId, setSelectedDataId] = useState<string | null>(null);
  const [selectedPathName, setSelectedPathName] = useState<string | null>(null);
  const selectedWebsiteData = modifiedWebsiteDatas?.find(
    (data) => data._id.toString() === selectedDataId
  );

  // Automatically set modified website data to website data from api
  useEffect(() => {
    if (websiteDatas) {
      setModifiedWebsiteDatas(websiteDatas);
    }
  }, [websiteDatas]);

  // Automatically select first website data on load
  useEffect(() => {
    if (selectedDataId === null && websiteDatas != null) {
      setSelectedDataId(websiteDatas[0]._id.toString());
    }
  }, [websiteDatas]);

  // Save modified website data
  async function saveWebsiteDataToServer() {
    if (selectedWebsiteData && siteConfig) {
      const password = prompt("Enter password to save website data");

      const res = await fetch(`${siteConfig.BASE_API_URL}/websiteData`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: selectedWebsiteData, password: password }),
      });

      if (res.status === 200) {
        alert("WebsiteData saved successfully");
      } else if (res.status === 401) {
        alert("Wrong password");
      } else {
        alert("Failed to save website data");
      }
    }
  }

  function handleEditorDataChange(newPathData: any) {
    if (!modifiedWebsiteDatas || !selectedPathName) {
      return;
    }

    const newWebsiteDatas = modifiedWebsiteDatas.map((websiteData) =>
      websiteData._id.toString() === selectedDataId
        ? { ...websiteData, [selectedPathName]: newPathData }
        : websiteData
    );
    setModifiedWebsiteDatas(newWebsiteDatas);
  }

  function handleWebsiteDataSelect(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    if (!modifiedWebsiteDatas || !mongooseSchemaApi) {
      return;
    }

    if (event.target.value === "new") {
      const newData = createEmptyObjectFromSchema<WebsiteData>(
        mongooseSchemaApi
      );
      console.log(newData);

      setModifiedWebsiteDatas([...modifiedWebsiteDatas, newData]);
      setSelectedDataId(newData._id.toString());
    } else {
      setSelectedDataId(event.target.value);
    }
  }

  return modifiedWebsiteDatas && mongooseSchemaApi ? (
    <MainContainer>
      <SideBar>
        <select
          onChange={handleWebsiteDataSelect}
          defaultValue={modifiedWebsiteDatas[0]._id as any}
          value={selectedDataId || undefined}
        >
          {modifiedWebsiteDatas.map((websiteData, index) => (
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
