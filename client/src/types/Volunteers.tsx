export interface TeamPageProps {
  volunteers: IVolunteerCard[];
}

export interface IVolunteerCard {
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  description: string;
}
