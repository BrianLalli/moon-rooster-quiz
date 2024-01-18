import { useEffect } from 'react';

import { useQuiz } from '../../context/QuizContext';
import { ScreenTypes } from '../../types';

import QuestionScreen from '../QuestionScreen';
import QuizDetailsScreen from '../QuizDetailsScreen';
import QuizTopicsScreen from '../QuizTopicsScreen';
import ResultScreen from '../ResultScreen';
import SplashScreen from '../SplashScreen';
import LeaderBoardScreen from '../LeaderBoardScreen';

interface MainProps {
    setIsQuizFinished: (isFinished: boolean) => void; // Add this line
}

function Main({ setIsQuizFinished }: MainProps) { // Modify this line
  const { currentScreen, setCurrentScreen } = useQuiz();

  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(ScreenTypes.QuizTopicsScreen);
    }, 1000);
  }, [setCurrentScreen]);

  useEffect(() => {
    // Check if the current screen is the ResultScreen and update the state accordingly
    if (currentScreen === ScreenTypes.ResultScreen) {
      setIsQuizFinished(true);
    } else {
      setIsQuizFinished(false);
    }
  }, [currentScreen, setIsQuizFinished]); // Add setIsQuizFinished to the dependency array

  const screenComponents = {
    [ScreenTypes.SplashScreen]: <SplashScreen />,
    [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />,
    [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.ResultScreen]: <ResultScreen />,
    [ScreenTypes.LeaderBoardScreen]: <LeaderBoardScreen />,
  };

  const ComponentToRender = screenComponents[currentScreen] || <SplashScreen />;

  return <>{ComponentToRender}</>;
}

export default Main;
