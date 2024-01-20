import { FC } from 'react';
import styled from 'styled-components';

import { device } from '../../../styles/BreakPoints';
// import CodeSnippet from '../../ui/CodeSnippet';
import Answer from '../Answer';
// import QuizImage from '../../ui/QuizImage';

const QuestionContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  max-width: 88%;
  @media ${device.sm} {
    max-width: 100%;
  }
`;

const AnswersContainer = styled.div`
  max-width: 78%;
  @media ${device.sm} {
    max-width: 100%;
  }
`;

const QuestionStyle = styled.h2`
  font-size: clamp(18px, 4vw, 28px);
  font-weight: 500;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: 1.3;
`;

type AIQuestion = {
  question: string;
  choices: string[];
  correctAnswer: string;
};

interface QuestionProps {
  questionData: AIQuestion;
  selectedAnswer: string[];
  handleAnswerSelection: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  isQuizSubmitted: boolean;
}

const Question: FC<QuestionProps> = ({
  questionData,
  selectedAnswer,
  handleAnswerSelection,
  isQuizSubmitted,
}) => {
  const { question, choices, correctAnswer } = questionData;

  return (
    <QuestionContainer>
      <QuestionStyle>{question}</QuestionStyle>
      <AnswersContainer>
        {choices.map((choice, index) => (
          <Answer
            choice={choice}
            index={index}
            key={index}
            onChange={(e) => handleAnswerSelection(e, index)}
            selectedAnswer={selectedAnswer}
            isCorrect={choice === correctAnswer}
            isSubmitted={isQuizSubmitted}
            type="MCQs"
          />
        ))}
      </AnswersContainer>
    </QuestionContainer>
  );
};

export default Question;
