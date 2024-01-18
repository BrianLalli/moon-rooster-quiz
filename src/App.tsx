import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Main from './components/Main';
import ToggleTheme from './components/ui/ToggleTheme';
import QuizProvider from './context/QuizProvider';
import Leaderboard from './components/LeaderBoardScreen';
import { GlobalStyles } from './styles/Global';
import { themes } from './styles/Theme';

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // State to track if the quiz is finished
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setCurrentTheme(checked ? 'dark' : 'light');
    localStorage.setItem('theme', checked ? 'dark' : 'light');
  };

  const theme = currentTheme === 'light' ? themes.light : themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QuizProvider>
        <ToggleTheme
          onChange={toggleTheme}
          currentTheme={currentTheme}
          checked={currentTheme === 'dark'}
          id="toggleTheme"
          value="theme"
        />
        <Main setIsQuizFinished={setIsQuizFinished} />
        {isQuizFinished && <Leaderboard />}
      </QuizProvider>
    </ThemeProvider>
  );
}

export default App;
