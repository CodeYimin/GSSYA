import { borderRadius, FieldContainer, FieldLabel } from "@src/styles/styles";
import { createEmptyObjectFromSchema } from "@src/util/schemaUtil";
import { camelCaseToNormal } from "@src/util/stringUtil";
import { Schema } from "mongoose";
import React, { ReactElement } from "react";
import styled from "styled-components";
import SchemaEditor from "./SchemaEditor";

interface ArrayEditorProps {
  name?: string;
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
      <Item key={itemIndex}>
        <SchemaEditor
          name={`Item ${itemIndex + 1}`}
          schema={itemsSchema}
          data={item}
          onDataChange={(newData) => {
            onItemsChange(Object.assign([...items], { [itemIndex]: newData }));
          }}
          addFieldContainers
        />
        <DeleteButton
          onClick={() => {
            onItemsChange(items.filter((_, index) => index !== itemIndex));
          }}
        >
          Delete
        </DeleteButton>
      </Item>
    ));
  }

  function handleAddNewItem() {
    onItemsChange([...items, createEmptyObjectFromSchema(itemsSchema)]);
  }

  return (
    <FieldContainer>
      <FieldLabel>{name && camelCaseToNormal(name)}</FieldLabel>
      <ItemsContainer>
        {renderItemEditors()}
        <AddItemButton onClick={handleAddNewItem}>Add new item</AddItemButton>
      </ItemsContainer>
    </FieldContainer>
  );
};

const DeleteButton = styled.button`
  padding: 0.5rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  border: 0.1rem solid red;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

const Item = styled.div`
  border-radius: ${borderRadius};
  padding: 1rem;
  margin: 1rem;
  width: 20rem;
  height: max-content;
  border: 1px solid black;
`;

const AddItemButton = styled(Item)`
  &:hover {
    cursor: pointer;
  }
`;

export default ArrayEditor;
