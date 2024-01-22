import { ReactNode, useEffect, useState } from 'react';
import { QuizContextTypes, AIQuestion, ScreenTypes, Result } from '../types';
import { QuizContext } from './QuizContext';
import getTriviaQuestions from '../services/openaiService';

type QuizProviderProps = {
  children: ReactNode;
};

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [currentScreen, setCurrentScreen] = useState<ScreenTypes>(ScreenTypes.SplashScreen);
  const [quizTopic, setQuizTopic] = useState<string>('');
  const [questions, setQuestions] = useState<AIQuestion[]>([]);
  const [result, setResult] = useState<Result[]>([]);
  const [timer, setTimer] = useState<number>(60);
  const [endTime, setEndTime] = useState<number>(0);
  const [isFetchingQuestions, setIsFetchingQuestions] = useState<boolean>(false);

  const quizDetails = {
    totalQuestions: questions.length,
    totalScore: 100,
    totalTime: 60,
    selectedQuizTopic: quizTopic,
  };

  const resetQuizData = () => {
    // Clearing quiz-related states
    setQuestions([]);
    setResult([]);
    setTimer(60);
    setEndTime(0);
  };

  const fetchAIQuestions = async (topic: string) => {
    setIsFetchingQuestions(true);
    try {
      const aiQuestions = await getTriviaQuestions(topic);
      if (aiQuestions.length > 0) {
        setQuestions(aiQuestions);
      } else {
        console.error('No valid questions found for the topic:', topic);
        setQuestions([]);
      }
    } catch (error) {
      console.error('Error fetching AI-generated questions:', error);
      setQuestions([]);
    }
    setIsFetchingQuestions(false);
  };

  useEffect(() => {
    if (currentScreen === ScreenTypes.QuizDetailsScreen && quizTopic) {
      fetchAIQuestions(quizTopic);
    }
  }, [quizTopic, currentScreen]);

  // Reset quiz data when a new quiz topic is selected
  useEffect(() => {
    if (quizTopic) {
      resetQuizData();
    }
  }, [quizTopic]);

  const contextValue: QuizContextTypes = {
    currentScreen,
    setCurrentScreen,
    quizTopic,
    selectQuizTopic: setQuizTopic,
    questions,
    setQuestions,
    result,
    setResult,
    timer,
    setTimer,
    endTime,
    setEndTime,
    quizDetails,
    isFetchingQuestions
  };

  return (
    <QuizContext.Provider value={contextValue}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
