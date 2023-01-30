export interface Question {
  id: number;
  question: string;
  description: string;
  icon: string;
  type: string;
  parentQuestionId: number;
  showIfAnswer: string;
}

export interface Answer {
  questionId: number;
  answer: string;
}