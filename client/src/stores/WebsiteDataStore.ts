import { englishWebsiteData } from "@/data/english";
import { frenchWebsiteData } from "@/data/french";
import { simplifiedChineseWebsiteData } from "@/data/simplifiedChinese";
import { traditionalChineseWebsiteData } from "@/data/traditionalChinese";
import { Language, WebsiteData } from "@/types/WebsiteData";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WebsiteDataState {
  websiteData: WebsiteData;
  setWebsiteData: (language: Language) => void;
}

const languageToData: Record<Language, WebsiteData> = {
  English: englishWebsiteData,
  Français: frenchWebsiteData,
  简体: simplifiedChineseWebsiteData,
  繁體: traditionalChineseWebsiteData,
};

export const useWebsiteDataStore = create<WebsiteDataState>()(
  persist(
    (set) => ({
      websiteData:
        typeof window !== "undefined"
          ? languageToData[
              (localStorage.getItem("website-data") as Language) || "English"
            ]
          : englishWebsiteData,
      setWebsiteData: (language: Language) =>
        set((state) => ({ websiteData: languageToData[language] })),
    }),
    {
      name: "website-data",
      version: 1,
      storage: {
        getItem(name) {
          const language = localStorage.getItem(name);
          return {
            state: {
              websiteData:
                typeof window !== "undefined"
                  ? languageToData[(language as Language) || "English"] ||
                    englishWebsiteData
                  : englishWebsiteData,
            },
            version: 1,
          };
        },
        setItem(name, value) {
          localStorage.setItem(name, value.state.websiteData.language);
        },
        removeItem(name) {
          localStorage.removeItem(name);
        },
      },
    }
  )
);
