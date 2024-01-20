import styled from 'styled-components';

import { AppLogo, StartIcon } from '../../config/icons';
import { useQuiz } from '../../context/QuizContext';
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global';
import { ScreenTypes } from '../../types';
import { convertSeconds } from '../../utils/helpers';

import Button from '../ui/Button';

const AppTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.themeColor};
`;

const DetailTextContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;
`;

const DetailText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  line-height: 1.3;
`;

const LoadingText = styled.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails, isFetchingQuestions } = useQuiz();

  const { selectedQuizTopic } = quizDetails;

  const totalQuestions = 10; // Fixed number of total questions
  const totalScore = 100; // Fixed total score
  const totalTime = 60; // Fixed total time in seconds

  const goToQuestionScreen = () => {
    if (!isFetchingQuestions) {
      setCurrentScreen(ScreenTypes.QuestionScreen);
    }
  };

  // Check if the questions are still being fetched
  if (isFetchingQuestions) {
    return <LoadingText>Loading quiz details...</LoadingText>;
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <AppTitle>MOON ROOSTER QUIZ</AppTitle>
        <DetailTextContainer>
          <DetailText>
            Selected Quiz Topic: <HighlightedText>{selectedQuizTopic}</HighlightedText>
          </DetailText>
          <DetailText>
            Total questions to attempt: <HighlightedText>{totalQuestions}</HighlightedText>
          </DetailText>
          <DetailText>
            Score in total: <HighlightedText>{totalScore}</HighlightedText>
          </DetailText>
          <DetailText>
            Total time: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </DetailText>
          <DetailText>
            To save time, you can skip questions. Skipped questions will show up at the
            end of the quiz.
          </DetailText>
        </DetailTextContainer>
        <Button
          text="Start"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
        />
      </CenterCardContainer>
    </PageCenter>
  );
};

export default QuizDetailsScreen;
