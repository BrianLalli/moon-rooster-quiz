import { FC } from 'react';
import styled from 'styled-components';

import { device } from '../../../styles/BreakPoints';
import CodeSnippet from '../../ui/CodeSnippet';
import Answer from '../Answer';
import QuizImage from '../../ui/QuizImage';

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

// AI Question Type
type AIQuestion = {
  question: string;
  choices: string[];
  correctAnswer: string;
};

// Modify or ensure the Question type has the necessary fields
interface Question {
  question: string;
  choices: string[];
  code?: string;
  image?: string;
  type: string;
}

interface QuestionProps {
  questionData: Question | AIQuestion;
  selectedAnswer: string[];
  handleAnswerSelection: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

const Question: FC<QuestionProps> = ({
  questionData,
  selectedAnswer,
  handleAnswerSelection,
}) => {
  const isAIQuestion = 'correctAnswer' in questionData;
  const { question, choices } = questionData;
  let code: string | undefined, image: string | undefined, type: string | undefined;

  // If it's not an AI question, extract additional properties
  if (!isAIQuestion) {
    ({ code, image, type } = questionData as Question);
  }

  return (
    <QuestionContainer>
      <QuestionStyle>{question}</QuestionStyle>
      {code && <CodeSnippet code={code} language="javascript" />}
      {image && <QuizImage image={image} />}
      <AnswersContainer>
        {choices.map((choice, index) => (
          <Answer
            choice={choice}
            index={index}
            key={index}
            onChange={(e) => handleAnswerSelection(e, index)}
            type={type || 'MCQs'} // Default to 'MCQs' if type is not defined
            selectedAnswer={selectedAnswer}
          />
        ))}
      </AnswersContainer>
    </QuestionContainer>
  );
};

export default Question;
