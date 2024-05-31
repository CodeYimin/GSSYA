export interface ProgramsPageProps {
  programs: IProgramCard[];
}

export interface IProgramCard {
  title: string;
  description: string;
  link: string;
  subheading1: string;
  subheading2?: string;
  polaroids: IPolaroid[];
}

export interface IPolaroid {
  image: string;
  text: string;
}
