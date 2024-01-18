import React, { useState } from 'react';
import styled from 'styled-components';
import supabase from '../../../api/supabaseClient'; // Adjust the path as necessary
import { useQuiz } from '../../../context/QuizContext';
import { device } from '../../../styles/BreakPoints';
import { HighlightedText } from '../../../styles/Global';
import { convertSeconds } from '../../../utils/helpers';
import { Result } from '../../../types';

const ResultOverviewStyle = styled.div`
  text-align: center;
  margin-bottom: 70px;
  @media ${device.md} {
    margin-bottom: 30px;
  }
  p {
    margin-top: 15px;
    font-weight: 500;
    font-size: 18px;
  }
`;

const FormContainer = styled.div`
  margin-top: 20px;
`;

const UsernameInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

interface ResultOverviewProps {
  result: Result[]
}

const ResultOverview: React.FC<ResultOverviewProps> = ({ result }) => {
  const { quizDetails, endTime } = useQuiz();

  const totalQuestionAttempted = result.length;

  const obtainedScore = result
    .filter((item) => item.isMatch && typeof item.score === 'number')
    .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0);

  const calculateStatus =
    (obtainedScore / quizDetails.totalScore) * 100 >= 60 ? 'Passed' : 'Failed';

  const [username, setUsername] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { error } = await supabase.from('scores').insert([
      { username: username, points: obtainedScore }
    ]);

    if (error) {
      console.error('Error submitting score:', error);
      // Handle error (e.g., show a message to the user)
    } else {
      // Handle successful submission (e.g., navigate to leaderboard or show a success message)
      // Optionally, call a function to refresh the leaderboard if it's available
    }
  };

  return (
    <ResultOverviewStyle>
      <p>
        You attempted questions: 
        <HighlightedText> {totalQuestionAttempted} </HighlightedText>/{' '}
        {quizDetails.totalQuestions}
      </p>
      <p>
        Score secured: <HighlightedText> {obtainedScore} </HighlightedText>/{' '}
        {quizDetails.totalScore}
      </p>
      <p>
        Time Spent: <HighlightedText> {convertSeconds(endTime)} </HighlightedText>
      </p>
      <p>
        Status: <HighlightedText> {calculateStatus}</HighlightedText>
      </p>

      <FormContainer>
        <form onSubmit={handleSubmit}>
          <UsernameInput 
            type="text" 
            placeholder="Enter your username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <SubmitButton type="submit">Submit Score</SubmitButton>
        </form>
      </FormContainer>
    </ResultOverviewStyle>
  );
};

export default ResultOverview;
