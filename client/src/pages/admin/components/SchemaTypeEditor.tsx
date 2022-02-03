import { SchemaType } from "mongoose";
import React, { ReactElement } from "react";
import styled from "styled-components";
import ArrayEditor from "./ArrayEditor";
import DateEditor from "./DateEditor";
import SchemaEditor from "./SchemaEditor";
import StringEditor from "./StringEditor";

interface SchemaTypeEditorProps<T> {
  schemaTypeName?: string;
  schemaType: SchemaType;
  data: T;
  onDataChange: (newData: T) => void;
}

function SchemaTypeEditor<
  T extends string | Date | any[] | Record<string, any> | null
>({
  schemaTypeName,
  schemaType,
  data,
  onDataChange,
}: SchemaTypeEditorProps<T>): ReactElement {
  function renderEditor() {
    switch (schemaType.instance) {
      case "String":
        return (
          <StringEditor
            name={schemaTypeName}
            value={data as string}
            required={schemaType.options.required}
            onValueChange={onDataChange as (newData: string) => void}
          />
        );
      case "Date":
        return (
          <DateEditor
            name={schemaTypeName}
            date={data as Date}
            required={schemaType.options.required}
            onValueChange={onDataChange as (newData: Date | null) => void}
          />
        );
      case "Array":
        return (
          <ArrayEditor
            name={schemaTypeName}
            itemsSchema={schemaType.schema}
            items={(data as any[]) || []}
            onItemsChange={onDataChange as (newData: any[]) => void}
          />
        );
      case "Embedded":
        return (
          <SchemaEditor
            name={schemaTypeName}
            schema={schemaType.schema}
            data={data as Record<string, any>}
            onDataChange={
              onDataChange as (newData: Record<string, any>) => void
            }
          />
        );
      default:
        return null;
    }
  }

  return (
    <div>
      {name}
      <div>{renderEditor()}</div>
    </div>
  );
}

const IndentedDiv = styled.div`
  margin-left: 2rem;
`;

export default SchemaTypeEditor;
