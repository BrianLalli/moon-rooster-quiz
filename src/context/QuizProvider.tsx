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

  console.log('Current Screen:', currentScreen); // Log current screen
  console.log('Quiz Topic:', quizTopic); // Log quiz topic
  console.log('AI Questions:', questions); // Log AI questions

  const quizDetails = {
    totalQuestions: questions.length,
    totalScore: 100,
    totalTime: 60,
    selectedQuizTopic: quizTopic,
  };

  const fetchAIQuestions = async (topic: string) => {
    setIsFetchingQuestions(true);
    try {
      const aiQuestions = await getTriviaQuestions(topic);
      console.log('Fetched AI Questions:', aiQuestions);

      const isValidFormat = aiQuestions.every((question: AIQuestion) => 
        typeof question.question === 'string' && 
        Array.isArray(question.choices) && 
        question.choices.every((choice: string) => typeof choice === 'string') && 
        typeof question.correctAnswer === 'string'
      );

      if (isValidFormat) {
        setQuestions(aiQuestions);
      } else {
        console.error('Invalid format for AI-generated questions:', aiQuestions);
        console.log('Invalid questions:', aiQuestions.filter((q: AIQuestion) => 
          !q.correctAnswer || 
          !Array.isArray(q.choices) || 
          typeof q.question !== 'string'
        ));
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
      console.log('Fetching AI Questions for topic:', quizTopic); // Log when fetching starts
      fetchAIQuestions(quizTopic);
    }
  }, [quizTopic, currentScreen]);

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
