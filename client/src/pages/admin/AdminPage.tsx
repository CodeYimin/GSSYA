import { WebsiteData } from "@server/src/interfaces/mongoose.gen";
import { useRestApiData } from "@src/hooks/restApi";
import { typeSyncObjectWithSchema } from "@src/util/schemaUtil";
import { Schema } from "mongoose";
import React, { ReactElement, useEffect, useState } from "react";
import SchemaEditor from "./components/SchemaEditor";

const AdminPage = (): ReactElement => {
  const mongooseSchema = useRestApiData<Schema>(
    "http://localhost:4000/mongooseSchema"
  );
  const websiteDatas = useRestApiData<WebsiteData[]>(
    "http://localhost:4000/websiteDatas"
  );
  const [websiteData, setWebsiteData] = useState<WebsiteData | null>(null);

  useEffect(() => {
    if (websiteDatas && mongooseSchema) {
      setWebsiteData(
        typeSyncObjectWithSchema<WebsiteData>(websiteDatas[0], mongooseSchema)
      );
    }
  }, [websiteDatas]);

  function saveUpdatedWebsiteData() {
    if (websiteData) {
      fetch("http://localhost:4000/websiteData", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(websiteData),
      });
    }
  }

  if (!websiteData || !mongooseSchema) {
    return <></>;
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={saveUpdatedWebsiteData}>Save</button>
      <SchemaEditor
        name="Main"
        schema={mongooseSchema}
        data={websiteData}
        onDataChange={(newData) => {
          setWebsiteData(newData);
        }}
      />
    </div>
  );
};

export default AdminPage;
