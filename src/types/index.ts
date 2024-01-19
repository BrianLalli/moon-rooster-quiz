import { Dispatch, SetStateAction } from 'react'
import { Question } from '../data/QuizQuestions'

// AI Question Type
export type AIQuestion = {
  question: string;
  choices: string[];
  correctAnswer: string;
};

export enum ScreenTypes {
  SplashScreen,
  QuizTopicsScreen,
  QuizDetailsScreen,
  QuestionScreen,
  ResultScreen,
  LeaderBoardScreen,
}

export interface Result extends Question {
  selectedAnswer: string[];
  isMatch: boolean;
}

export type QuizContextTypes = {
  currentScreen: ScreenTypes;
  setCurrentScreen: Dispatch<SetStateAction<ScreenTypes>>;
  quizTopic: string;
  selectQuizTopic: (type: string) => void;
  questions: (Question | AIQuestion)[]; // Union type for both Question and AIQuestion
  setQuestions: Dispatch<SetStateAction<(Question | AIQuestion)[]>>;
  result: Result[];
  setResult: Dispatch<SetStateAction<Result[]>>;
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
  endTime: number;
  setEndTime: (type: number) => void;
  quizDetails: {
    totalQuestions: number;
    totalScore: number;
    totalTime: number;
    selectedQuizTopic: string;
  };
}
