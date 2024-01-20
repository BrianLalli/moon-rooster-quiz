import { FC } from 'react';
import styled from 'styled-components';

import { HighlightedText } from '../../../styles/Global';

interface RightAnswerProps {
  correctAnswer: string; // Single correct answer
  choices: string[];
}

const RightAnswerContainer = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkerGray};
  margin-top: 15px;
  line-height: 1.2;
`;

const RightAnswer: FC<RightAnswerProps> = ({ correctAnswer, choices }) => {
  const label = String.fromCharCode(65 + choices.indexOf(correctAnswer));

  return (
    <RightAnswerContainer>
      {'Right Answer: '}
      <HighlightedText themeText>
        {`${label} (${correctAnswer})`}
      </HighlightedText>
    </RightAnswerContainer>
  );
};

export default RightAnswer;
