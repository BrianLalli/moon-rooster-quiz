import { ReactNode, useEffect, useState } from 'react';
import { quiz, Question } from '../data/QuizQuestions'; // Corrected import for Question
import { QuizContextTypes, Result, ScreenTypes, AIQuestion } from '../types'; // Removed Question from this import
import { QuizContext, initialState } from './QuizContext';
import getTriviaQuestions from '../services/openaiService'; 

type QuizProviderProps = {
  children: ReactNode;
};

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [timer, setTimer] = useState<number>(initialState.timer);
  const [endTime, setEndTime] = useState<number>(initialState.endTime);
  const [quizTopic, setQuizTopic] = useState<string>(initialState.quizTopic);
  const [result, setResult] = useState<Result[]>(initialState.result);
  const [currentScreen, setCurrentScreen] = useState<ScreenTypes>(initialState.currentScreen);

  const [questions, setQuestions] = useState<(Question | AIQuestion)[]>(quiz[initialState.quizTopic].questions);

  const {
    questions: quizQuestions,
    totalQuestions,
    totalTime,
    totalScore,
  } = quiz[quizTopic];

  const selectQuizTopic = async (topic: string) => {
    setQuizTopic(topic);
    try {
      const aiQuestion = await getTriviaQuestions(topic);
      console.log('AI Questions:', aiQuestion);
  
      if (aiQuestion && aiQuestion.question && aiQuestion.choices) {
        let correctAnswer = aiQuestion.correctAnswer;
  
        // Extract correct answer from choices if undefined
        if (!correctAnswer) {
          const correctChoice = aiQuestion.choices.find((choice: string) => choice.startsWith("Correct answer:"));
          correctAnswer = correctChoice ? correctChoice.split(": ")[1] : undefined;
        }
  
        if (correctAnswer) {
          const formattedAIQuestion = {
            ...aiQuestion,
            correctAnswer
          };
          setQuestions(prevQuestions => [...prevQuestions, formattedAIQuestion]);
        } else {
          throw new Error("Failed to extract correct answer for AI-generated question");
        }
      } else {
        throw new Error("Failed to fetch AI-generated questions");
      }
    } catch (error) {
      console.error('Error fetching AI-generated questions:', error);
      setQuestions(quiz[topic].questions);
    }
  };
  
  

  useEffect(() => {
    setTimer(totalTime);
    setQuestions(quizQuestions);
  }, [quizTopic, quizQuestions, totalTime]);

  const quizDetails = {
    totalQuestions,
    totalScore,
    totalTime,
    selectedQuizTopic: quizTopic,
  };

  const quizContextValue: QuizContextTypes = {
    currentScreen,
    setCurrentScreen,
    quizTopic,
    selectQuizTopic,
    questions,
    setQuestions,
    result,
    setResult,
    quizDetails,
    timer,
    setTimer,
    endTime,
    setEndTime,
  };

  return <QuizContext.Provider value={quizContextValue}>{children}</QuizContext.Provider>;
};

export default QuizProvider;
