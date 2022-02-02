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

export function typeSyncObjectWithSchema(
  object: Record<string, any>,
  schema: Schema
): Record<string, any> {
  return Object.entries(schema.paths).reduce<Record<string, any>>(
    (object, [schemaTypeName, schemaType]) => {
      object[schemaTypeName] = typeSyncValueWithSchemaType(
        object[schemaTypeName],
        schemaType
      );
      return object;
    },
    object
  );
}

export function typeSyncValueWithSchemaType(
  value: any,
  schemaType: SchemaType
): any {
  switch (schemaType.instance) {
    case "Date":
      return new Date(value);
    case "Array":
      // Primitive array types like Date and String have caster object that acts as schematype
      if ((schemaType as any).caster) {
        return value.map((item: any) =>
          typeSyncValueWithSchemaType(item, (schemaType as any).caster)
        );
      } else {
        return value.map((item: any) =>
          typeSyncObjectWithSchema(item, schemaType.schema)
        );
      }
    case "Embedded":
      return typeSyncObjectWithSchema(value, schemaType.schema);
    default:
      return value;
  }
}
