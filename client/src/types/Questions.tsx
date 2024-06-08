export interface QuestionsPageProps {
  title1: string;
  title2: string;
  questions: IQuestionCard[];
}

export interface IQuestionCard {
  question: string;
  answer: string;
}
