import { WebsiteData } from "@server/src/interfaces/mongoose.gen";
import { Jsonized } from "@src/types/util";
import { typeSyncObjectWithSchema } from "@src/util/schemaUtil";
import { Schema } from "mongoose";
import { useEffect, useState } from "react";

export function useRest<T>(apiEndpointUrl: string): T | null {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    fetch(apiEndpointUrl)
      .then((res) => res.json())
      .then(setData);
  }, []);

  return data;
}

export function useWebsiteApi<T>(subUrl: string): T | null {
  const siteConfig = useRest<any>("./config/siteConfig.json");

  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (siteConfig) {
      const baseUrl = siteConfig?.BASE_API_URL;
      const apiEndpointUrl = `${baseUrl}/${subUrl}`;

      fetch(apiEndpointUrl)
        .then((res) => res.json())
        .then(setData);
    }
  }, [siteConfig]);

  return data;
}

export function useWebsiteDatas(): WebsiteData[] | null {
  const mongooseSchemaApi = useWebsiteApi<Jsonized<Schema>>("mongooseSchema");
  const websiteDatasApi = useWebsiteApi<Jsonized<WebsiteData[]>>(
    "websiteDatas"
  );

  const [websiteDatas, setWebsiteDatas] = useState<WebsiteData[] | null>(null);

  // Type sync websiteDatasApi and store it in websiteDatas
  useEffect(() => {
    if (websiteDatasApi && mongooseSchemaApi) {
      setWebsiteDatas(
        websiteDatasApi.map((websiteDataApi) =>
          typeSyncObjectWithSchema<WebsiteData>(
            websiteDataApi,
            mongooseSchemaApi
          )
        )
      );
    }
  }, [websiteDatasApi]);

  return websiteDatas;
}
