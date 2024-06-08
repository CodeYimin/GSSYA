export interface ProgramsPageProps {
  title1: string;
  title2: string;
  programs: IProgramCard[];
  akaText: string;
}

export interface IProgramCard {
  title: string;
  description: string;
  buttons: { label: string; link: string }[];
  subheading1: string;
  subheading2?: string;
  polaroids: IPolaroid[];
}

export interface IPolaroid {
  image: string;
  text: string;
}
