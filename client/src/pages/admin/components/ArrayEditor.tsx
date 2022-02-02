import { createEmptyObjectFromSchema } from "@src/util/schemaUtil";
import { Schema } from "mongoose";
import React, { ReactElement } from "react";
import styled from "styled-components";
import SchemaEditor from "./SchemaEditor";

interface ArrayEditorProps {
  name: string;
  itemsSchema: Schema;
  items: any[];
  onItemsChange: (newData: any[]) => void;
}

const ArrayEditor = ({
  name,
  itemsSchema,
  items,
  onItemsChange,
}: ArrayEditorProps): ReactElement => {
  function renderItemEditors() {
    return items.map((item, itemIndex) => (
      <SchemaEditor
        key={itemIndex}
        name={`Item ${itemIndex + 1}`}
        schema={itemsSchema}
        data={item}
        onDataChange={(newData) => {
          onItemsChange(Object.assign([...items], { [itemIndex]: newData }));
        }}
      />
    ));
  }

  function handleAddNewItem() {
    onItemsChange([...items, createEmptyObjectFromSchema(itemsSchema)]);
  }

  return (
    <div>
      <b>{name}</b>
      <BorderedDiv>
        {renderItemEditors()}
        <button onClick={handleAddNewItem}>Add new item</button>
      </BorderedDiv>
    </div>
  );
};

const BorderedDiv = styled.div`
  display: block;
  min-width: 5rem;
  min-height: 5rem;
  width: max-content;
  height: max-content;
  border: 1px solid black;
`;

export default ArrayEditor;
