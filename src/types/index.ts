// src/types/index.ts

import { Dispatch, SetStateAction } from 'react';

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

export interface Result extends AIQuestion {
  selectedAnswer: string[];
  isMatch: boolean;
}

export type QuizContextTypes = {
  currentScreen: ScreenTypes;
  setCurrentScreen: Dispatch<SetStateAction<ScreenTypes>>;
  quizTopic: string;
  selectQuizTopic: (type: string) => void;
  questions: AIQuestion[];
  setQuestions: Dispatch<SetStateAction<AIQuestion[]>>;
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
  isFetchingQuestions: boolean; // Added new state for fetching status
};
