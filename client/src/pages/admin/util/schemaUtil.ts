import { Schema, SchemaType } from "mongoose";

export function createEmptyObjectFromSchema(schema: Schema) {
  Object.entries(schema.paths).reduce<Record<string, any>>(
    (object, [schemaTypeName, schemaType]) => {
      object[schemaTypeName] = createEmptyValueFromSchemaType(schemaType);
      return object;
    },
    {}
  );
}

export function createEmptyValueFromSchemaType(schemaType: SchemaType) {
  switch (schemaType.instance) {
    case "String":
      return "";
    case "Date":
      return new Date();
    case "Array":
      return [];
    case "Embedded": {
      return createEmptyObjectFromSchema(schemaType.schema);
    }
  }
}
