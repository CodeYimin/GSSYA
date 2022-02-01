import { useEffect, useState } from "react";

class ApiService {
  private _siteConfig: any = null;

  async setConfig(): Promise<void> {
    if (!this._siteConfig) {
      this._siteConfig = await this.getApiResponseByUrl<any>("siteConfig.json");
    }
  }

  async getApiResponseByName<T>(apiName: string): Promise<T> {
    await this.setConfig();

    const baseUrl = this._siteConfig.baseUrl;
    const apiEndPoint: string = this._siteConfig.apiEndPoints[apiName];

    const apiUrl: string = `${baseUrl}${apiEndPoint}`;
    return await this.getApiResponseByUrl<T>(apiUrl);
  }

  async getApiResponseByUrl<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}

const apiService = new ApiService();

export default apiService;

export function useApiData<T>(apiName: string): T | null {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    apiService.getApiResponseByName<T>(apiName).then(setData);
  }, []);

  return data;
}
