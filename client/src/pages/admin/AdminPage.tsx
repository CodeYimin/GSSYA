import { WebsiteData } from "@server/src/interfaces/mongoose.gen";
import { useRestApiData } from "@src/hooks/restApi";
import { typeSyncObjectWithSchema } from "@src/util/schemaUtil";
import { camelCaseToNormal } from "@src/util/stringUtil";
import { Schema } from "mongoose";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import SchemaTypeEditor from "./components/SchemaTypeEditor";

const AdminPage = (): ReactElement => {
  const mongooseSchema = useRestApiData<Schema>(
    "http://localhost:4000/mongooseSchema"
  );
  const websiteDatas = useRestApiData<WebsiteData[]>(
    "http://localhost:4000/websiteDatas"
  );
  const [websiteData, setWebsiteData] = useState<WebsiteData | null>(null);

  const [selectedPathName, setSelectedPathName] = useState<string | null>(null);

  useEffect(() => {
    if (websiteDatas && mongooseSchema) {
      setWebsiteData(
        typeSyncObjectWithSchema<WebsiteData>(websiteDatas[0], mongooseSchema)
      );
    }
  }, [websiteDatas]);

  function saveWebsiteData() {
    if (websiteData) {
      fetch("http://localhost:4000/websiteData", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(websiteData),
      });
    }
  }

  if (!websiteData || !mongooseSchema) {
    return <></>;
  }

  return (
    <MainContainer>
      <SideBar>
        <SideBarButtonContainer>
          {Object.keys(mongooseSchema.paths).map((pathName) => {
            return pathName.startsWith("_") ? null : (
              <SideBarButton
                onClick={() => setSelectedPathName(pathName)}
                selected={pathName === selectedPathName}
              >
                {camelCaseToNormal(pathName)}
              </SideBarButton>
            );
          })}
        </SideBarButtonContainer>
        <SideBarButton onClick={saveWebsiteData}>Save</SideBarButton>
      </SideBar>
      <EditorContainer>
        {selectedPathName && (
          <SchemaTypeEditor
            schemaType={mongooseSchema.paths[selectedPathName]}
            data={websiteData[selectedPathName]}
            onDataChange={(newData) =>
              setWebsiteData({
                ...websiteData,
                [selectedPathName]: newData,
              })
            }
          />
        )}
      </EditorContainer>
    </MainContainer>
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

  &,
  &:focus {
    outline: ${(props) => (props.selected ? 2 : 0)}px solid #ff3c3c;
  }
`;

export default AdminPage;
