import { SchemaType } from "mongoose";
import React, { ReactElement } from "react";
import ArrayEditor from "./ArrayEditor";
import DateEditor from "./DateEditor";
import SchemaEditor from "./SchemaEditor";
import StringEditor from "./StringEditor";

interface SchemaTypeEditorProps<T> {
  name?: string;
  schemaType: SchemaType;
  data: T;
  onDataChange: (newData: T) => void;
  addFieldContainers?: boolean;
}

function SchemaTypeEditor<
  T extends string | Date | any[] | Record<string, any> | null
>({
  name,
  schemaType,
  data,
  onDataChange,
  addFieldContainers,
}: SchemaTypeEditorProps<T>): ReactElement {
  function renderEditor() {
    switch (schemaType.instance) {
      case "String":
        return (
          <StringEditor
            name={name}
            value={data as string}
            required={schemaType.options.required}
            onValueChange={onDataChange as (newData: string) => void}
            addContainer={addFieldContainers}
          />
        );
      case "Date":
        return (
          <DateEditor
            name={name}
            date={data as Date}
            required={schemaType.options.required}
            onValueChange={onDataChange as (newData: Date | null) => void}
          />
        );
      case "Array":
        return (
          <ArrayEditor
            name={name}
            itemsSchema={schemaType.schema}
            items={(data as any[]) || []}
            onItemsChange={onDataChange as (newData: any[]) => void}
          />
        );
      case "Embedded":
        return (
          <SchemaEditor
            name={name}
            schema={schemaType.schema}
            data={data as Record<string, any>}
            onDataChange={
              onDataChange as (newData: Record<string, any>) => void
            }
            addFieldContainers={addFieldContainers}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div>
      <div>{renderEditor()}</div>
    </div>
  );
}

export default SchemaTypeEditor;
