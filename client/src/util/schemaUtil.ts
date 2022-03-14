import { Schema, SchemaType, Types } from "mongoose";

export function createEmptyObjectFromSchema<T extends Record<string, any>>(
  schema: Schema
): T {
  return Object.entries(schema.paths).reduce<T>(
    (object, [schemaTypeName, schemaType]) => {
      (object as any)[schemaTypeName] = createEmptyValueFromSchemaType(
        schemaType
      );
      return object as T;
    },
    {} as T
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
    case "Embedded":
      return createEmptyObjectFromSchema(schemaType.schema);
    case "ObjectID":
      return new Types.ObjectId();
  }
}

// Mutates
export function typeSyncObjectWithSchema<T extends Record<string, any>>(
  object: Record<string, any>,
  schema: Schema
): T {
  Object.entries(schema.paths).forEach(([schemaTypeName, schemaType]) => {
    (object as any)[schemaTypeName] = typeSyncValueWithSchemaType(
      object[schemaTypeName],
      schemaType
    );
  });

  return object as T;
}

// Mutates
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
    case "ObjectID":
      return new Types.ObjectId(value);
    default:
      return value;
  }
}
