import React, { useState } from 'react'
import styled from 'styled-components'
import supabase from '../../../api/supabaseClient'
import { useQuiz } from '../../../context/QuizContext'
import { device } from '../../../styles/BreakPoints'
import { HighlightedText } from '../../../styles/Global'
import { convertSeconds } from '../../../utils/helpers'
import { Result, ScreenTypes } from '../../../types'
import HomeButton from '../../HomeButton' // Import HomeButton

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
`

const FormContainer = styled.div`
  margin-top: 20px;
`

const UsernameInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }
`

const ViewLeaderboardButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`

const StyledHomeButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; // Adjust as needed

  // Style for the HomeButton itself
  button {
    padding: 10px 20px;
    background-color: #007bff; // Example color
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #0069d9;
    }
  }
`

interface ResultOverviewProps {
  result: Result[]
}

const ResultOverview: React.FC<ResultOverviewProps> = ({ result }) => {
  const { quizDetails, endTime, setCurrentScreen, quizTopic } = useQuiz()
  const totalQuestionAttempted = result.length

  // Each question is worth 10 points
  const obtainedScore = result.filter((item) => item.isMatch).length * 10

  const calculateStatus =
    (obtainedScore / quizDetails.totalScore) * 100 >= 60 ? 'Passed' : 'Failed'

  const [username, setUsername] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { error } = await supabase
      .from('scores')
      .insert([{ username, points: obtainedScore, topic: quizTopic }])

    if (error) {
      console.error('Error submitting score:', error)
    } else {
      setCurrentScreen(ScreenTypes.LeaderBoardScreen) // Navigate to the leaderboard after submitting score
    }
  }

  const goToLeaderboard = () => {
    setCurrentScreen(ScreenTypes.LeaderBoardScreen)
  }

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
            <ViewLeaderboardButton onClick={goToLeaderboard}>
        View Leaderboard
      </ViewLeaderboardButton>
      <StyledHomeButton>
        <HomeButton /> {/* Include the HomeButton here */}
      </StyledHomeButton>
    </ResultOverviewStyle>
  )
}

export default ResultOverview
