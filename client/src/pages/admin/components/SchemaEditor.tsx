import { FieldLabel } from "@src/styles/styles";
import { camelCaseToNormal } from "@src/util/stringUtil";
import { Schema } from "mongoose";
import React, { ReactElement } from "react";
import styled from "styled-components";
import SchemaTypeEditor from "./SchemaTypeEditor";

interface SchemaEditorProps<T extends Record<string, any>> {
  name?: string;
  schema: Schema;
  data: T;
  onDataChange: (newData: T) => void;
}

function SchemaEditor<T extends Record<string, any>>({
  name,
  schema,
  data,
  onDataChange,
}: SchemaEditorProps<T>): ReactElement {
  const [pathsVisible, setPathsVisible] = React.useState<boolean>(!name);

  const paths = schema.paths;

  function renderPaths() {
    if (!paths) {
      return;
    }

    return Object.entries(paths).map(([schemaTypeName, schemaType]) => {
      return (
        <SchemaTypeEditor
          key={schemaTypeName}
          schemaTypeName={schemaTypeName}
          schemaType={schemaType}
          data={data[schemaTypeName]}
          onDataChange={(newData) => {
            onDataChange({ ...data, [schemaTypeName]: newData });
          }}
        />
      );
    });
  }

  return (
    <MainContainer>
      <HeaderContainer>
        {name && <FieldLabel>{camelCaseToNormal(name)}</FieldLabel>}
        {name ? (
          <button onClick={() => setPathsVisible(!pathsVisible)}>
            Expand/Collapse
          </button>
        ) : null}
      </HeaderContainer>
      <ContentContainer hidden={!pathsVisible}>
        {renderPaths()}
      </ContentContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div``;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  padding: 1rem;
`;

export default SchemaEditor;
