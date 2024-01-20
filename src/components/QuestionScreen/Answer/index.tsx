import { FC } from 'react';
import styled, { css } from 'styled-components';
import { device } from '../../../styles/BreakPoints';

const AnswerStyle = styled.div<{ highlightAnswer: boolean, isCorrect: boolean, isSubmitted: boolean }>`
  font-size: clamp(18px, 4vw, 16px);
  color: ${({ theme }) => theme.colors.secondaryText};
  font-weight: 400;
  border: 1px solid ${({ highlightAnswer, isCorrect, isSubmitted, theme }) =>
    isSubmitted ? (isCorrect ? `${theme.colors.success}` : `${theme.colors.danger}`) : (highlightAnswer ? `${theme.colors.themeColor}` : `${theme.colors.border}`)};
  background-color: ${({ highlightAnswer, isCorrect, isSubmitted, theme }) =>
    isSubmitted ? (isCorrect ? `${theme.colors.successLight}` : `${theme.colors.dangerLight}`) : (highlightAnswer ? `${theme.colors.selectedAnswer}` : `${theme.colors.answerBg}`)};
  border-radius: 16px;
  margin-top: clamp(13px, calc(10px + 6 * ((100vw - 600px) / 1320)), 16px);
  cursor: pointer;
  transition: border 0.2s ease-in;
  @media ${device.md} {
    font-weight: 500;
  }
  input {
    visibility: hidden;
    margin: 0;
  }
`;

const AnswerLabel = styled.label`
  padding: 18px;
  display: flex;
  cursor: pointer;
  @media ${device.md} {
    padding: 14px;
  }
`;

const ChoiceLabel = styled.span``;

interface AnswerProps {
  index: number;
  choice: string;
  type: string;
  selectedAnswer: string[];
  isCorrect: boolean; // Indicates if the choice is correct
  isSubmitted: boolean; // Indicates if the answers have been submitted
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Answer: FC<AnswerProps> = ({
  onChange,
  index,
  choice,
  type = 'MCQs',
  selectedAnswer,
  isCorrect,
  isSubmitted
}) => {
  const label = String.fromCharCode(65 + index);

  return (
    <AnswerStyle highlightAnswer={selectedAnswer.includes(choice)} isCorrect={isCorrect} isSubmitted={isSubmitted}>
      <AnswerLabel>
        <ChoiceLabel>{label}.</ChoiceLabel>
        <input
          name={choice}
          type={type === 'MAQs' ? 'checkbox' : 'radio'}
          checked={selectedAnswer.includes(choice)}
          onChange={onChange}
          disabled={isSubmitted} // Disable input after submission
        />
        {choice}
      </AnswerLabel>
    </AnswerStyle>
  );
};

export default Answer;
