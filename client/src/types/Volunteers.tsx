export interface TeamPageProps {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  volunteers: IVolunteerCard[];
  formText1: string;
  formText2: string;
}

export interface IVolunteerCard {
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  description: string;
}
