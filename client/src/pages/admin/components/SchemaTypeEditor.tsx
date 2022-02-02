import { SchemaType } from "mongoose";
import React, { ReactElement } from "react";
import styled from "styled-components";
import ArrayEditor from "./ArrayEditor";
import SchemaEditor from "./SchemaEditor";
import StringEditor from "./StringEditor";

interface SchemaTypeEditorProps<T extends Record<string, any>> {
  schemaTypeName: string;
  schemaType: SchemaType;
  data: T;
  onDataChange: (newData: T) => void;
}

function SchemaTypeEditor<T extends Record<string, any>>({
  schemaTypeName,
  schemaType,
  data,
  onDataChange,
}: SchemaTypeEditorProps<T>): ReactElement {
  function renderEditor() {
    if (["__v", "_id"].includes(schemaTypeName)) {
      return null;
    }

    switch (schemaType.instance) {
      case "String":
        return (
          <StringEditor
            key={schemaTypeName}
            name={schemaTypeName}
            value={data ? data[schemaTypeName] : null}
            required={schemaType.options.required}
            onValueChange={(newValue) => {
              onDataChange({ ...data, [schemaTypeName]: newValue });
            }}
          />
        );
      case "Date":
        return (
          <div key={schemaTypeName}>
            <b>Date:</b> {schemaTypeName}
          </div>
        );
      case "Array":
        return (
          <ArrayEditor
            key={schemaTypeName}
            name={schemaTypeName}
            itemsSchema={schemaType.schema}
            items={data ? data[schemaTypeName] : []}
            onItemsChange={(newData) => {
              onDataChange({ ...data, [schemaTypeName]: newData });
            }}
          />
        );
      case "Embedded":
        return (
          <SchemaEditor
            key={schemaTypeName}
            name={schemaTypeName}
            schema={schemaType.schema}
            data={data ? data[schemaTypeName] : null}
            onDataChange={(newData) => {
              onDataChange({ ...data, [schemaTypeName]: newData });
            }}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div>
      {name}
      <IndentedDiv>{renderEditor()}</IndentedDiv>
    </div>
  );
}

const IndentedDiv = styled.div`
  margin-left: 2rem;
`;

export default SchemaTypeEditor;
