import { Schema } from "mongoose";
import React, { ReactElement } from "react";
import SchemaTypeEditor from "./SchemaTypeEditor";

interface SchemaEditorProps<T extends Record<string, any>> {
  name: string;
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
  const [pathsVisible, setPathsVisible] = React.useState<boolean>(false);

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
    <div>
      {name}{" "}
      <button onClick={() => setPathsVisible(!pathsVisible)}>
        Expand/Collapse
      </button>
      <div hidden={!pathsVisible}>{renderPaths()}</div>
    </div>
  );
}

export default SchemaEditor;
