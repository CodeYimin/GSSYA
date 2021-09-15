import { useEffect, useState } from "react";

class ApiService {
  private siteConfig: any = null;

  async setConfig(): Promise<void> {
    if (!this.siteConfig) {
      this.siteConfig = await this.getApiResponseByUrl<any>('siteConfig.json');
    }
  }

  async getApiResponseByName<T>(apiName: string): Promise<T> {
    await this.setConfig();
    const apiEndPoint: string = this.siteConfig.apiEndPoints[apiName];
    return await this.getApiResponseByUrl<T>(apiEndPoint);
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
    apiService.getApiResponseByName<T>(apiName)
      .then(setData);
  }, []);

  return data;
}