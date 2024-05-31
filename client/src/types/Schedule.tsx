export interface SchedulePageProps {
  offerings: Offering[];
}

export type Category =
  | "Tutoring"
  | "Youth Exchange"
  | "Multiculturalism"
  | "Clubs"
  | "Mental Health"
  | "Art4Earth"
  | "Other";

export type OfferingType = "One time" | "Sessional";

export interface Offering {
  title: string;
  description: string;
  category: Category;
  type: OfferingType;
  startTime: Date;
  endTime: Date;
  buttons: { label: string; link: string }[];
  images: string[];
  location: string;
  thumbnail: string;
}
