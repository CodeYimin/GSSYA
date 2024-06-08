export interface SchedulePageProps {
  title1: string;
  title2: string;
  offerings: Offering[];
}

export interface Offering {
  category: string;
  buttons: { label: string; link: string }[];
}
