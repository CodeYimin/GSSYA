import { toTrad } from "@/lib/simplifyToTraditional";
import { WebsiteData } from "@/types/WebsiteData";
import { simplifiedChineseWebsiteData } from "./simplifiedChinese";

export const traditionalChineseWebsiteData: WebsiteData = {
  ...JSON.parse(toTrad(JSON.stringify(simplifiedChineseWebsiteData))),
  language: "繁體",
};
