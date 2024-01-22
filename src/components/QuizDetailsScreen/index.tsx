import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

import { AppLogo, StartIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'
import HomeButton from '../HomeButton';
import Button from '../ui/Button'

const AppTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.themeColor};
`


const DetailTextContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;
`

const DetailText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  line-height: 1.3;
`

const LoadingCard = styled.div`
  text-align: center;
  padding: 40px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`

const LoadingText = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  color: black;
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
  margin: 0 auto;
`

const FunFactText = styled.div`
  font-size: 18px;
  margin-top: 20px;
  color: #555;
`

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails, isFetchingQuestions } = useQuiz()
  const { selectedQuizTopic } = quizDetails

  const totalQuestions = 10
  const totalScore = 100
  const totalTime = 60

  const funFacts = [
    'Did you know? The first computer bug was an actual bug (a moth)!',
    'Fun Fact: The first computer game was created in 1961.',
    'Did you know? The first email was sent in 1971.',
    'Fun Fact: The longest time between two twins being born is 87 days.',
    'Did you know? In 1999, PayPal was voted as one of the top ten worst business ideas.',
    'Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat!',
    'Fun Fact: A single cloud can weigh more than 1 million pounds.',
    'Did you know? The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron on hot days.',
    'Fun Fact: Cows have best friends and experience stress when they are separated from them.',
    'Did you know? Octopuses have three hearts, blue blood, and nine brains!',
    "Fun Fact: Bananas are berries, but strawberries aren't.",
    'Did you know? The longest recorded flight of a chicken is 13 seconds.',
    'Fun Fact: The unicorn is the national animal of Scotland.',
    'Did you know? There are more trees on Earth than stars in the Milky Way galaxy.',
    "Fun Fact: A group of flamingos is called a 'flamboyance'.",
    'Did you know? A jiffy is an actual unit of time for 1/100th of a second.',
    'Fun Fact: The Twitter bird actually has a name – Larry.',
    "Did you know? The dot over the letter 'i' is called a tittle.",
    'Fun Fact: The shortest war in history lasted 38 minutes between Britain and Zanzibar.',
    'Did you know? A small child could swim through the veins of a blue whale.',
    'Fun Fact: The inventor of the Frisbee was turned into a Frisbee after he died.',
    "Did you know? The world's oldest piece of chewing gum is over 9,000 years old.",
    "Fun Fact: The shortest complete sentence in the English language is 'Go.'",
    'Did you know? A snail can sleep for three years.',
    'Fun Fact: Octopuses lay 56,000 eggs at a time.',
    'Did you know? The heart of a shrimp is located in its head.',
    "Fun Fact: A rhinoceros' horn is made of hair.",
    'Did you know? The world\'s largest snowflake was recorded to be 15 inches wide and 8 inches thick.',
    'Fun Fact: Cats have five toes on their front paws but only four on the back.',
    'Did you know? The world\'s oldest known recipe is for beer.',
    'Fun Fact: The loudest sound produced by any animal is 188 decibels by a sperm whale.',
    'Did you know? The first person convicted of speeding was going 8 mph.',
    'Fun Fact: The inventor of the Pringles can is buried in one.',
    'Did you know? In Switzerland, it\'s illegal to own just one guinea pig because they get lonely.',
    'Fun Fact: Butterflies taste with their feet.',
    'Did you know? The world\'s deepest postbox is in Susami Bay, Japan.',
    'Fun Fact: In 2007, an American man named Corey Taylor tried to fake his own death to get out of his cell phone contract without a penalty.',
    'Did you know? An octopus has three hearts.',
    'Fun Fact: A single teaspoon of honey is the lifetime work of 12 bees.',
    'Did you know? The Mona Lisa has no eyebrows.',
    'Fun Fact: You can\'t hum while holding your nose closed.',
    'Did you know? The total weight of ants on earth once equaled the total weight of people.',
    'Fun Fact: There is an official World Rock Paper Scissors Society.',
    'Did you know? The national animal of Wales is the dragon.',
    'Fun Fact: The first alarm clock could only ring at 4 a.m.',
    'Did you know? Polar bear fur is actually transparent, not white.',
    'Did you know? A group of kangaroos is called a mob.',
    'Fun Fact: The fingerprints of a koala are so indistinguishable from humans that they have on occasion been confused at a crime scene.',
    'Did you know? The first oranges weren’t orange - they were green.',
  ];
  

  const [randomFunFact, setRandomFunFact] = useState('')

  useEffect(() => {
    if (isFetchingQuestions) {
      const fact = funFacts[Math.floor(Math.random() * funFacts.length)]
      setRandomFunFact(fact)
    }
  }, [isFetchingQuestions])

  const goToQuestionScreen = () => {
    if (!isFetchingQuestions) {
      setCurrentScreen(ScreenTypes.QuestionScreen)
    }
  }

  if (isFetchingQuestions) {
    return (
      <PageCenter light justifyCenter>
        <LoadingCard>
          <LoadingText>Please wait while the AI generates your quiz.</LoadingText>
          <Spinner />
          <FunFactText>{randomFunFact}</FunFactText>
        </LoadingCard>
      </PageCenter>
    )
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
            Total questions to attempt:{' '}
            <HighlightedText>{totalQuestions}</HighlightedText>
          </DetailText>
          <DetailText>
            Score in total: <HighlightedText>{totalScore}</HighlightedText>
          </DetailText>
          <DetailText>
            Total time: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </DetailText>
        </DetailTextContainer>
        <Button
          text="Start"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
        />
        <HomeButton /> {/* Place the HomeButton */}
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen
