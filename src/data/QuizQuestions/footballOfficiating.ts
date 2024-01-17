// footballOfficiating.ts

import { Topic } from '.';

export const footballOfficiating: Topic = {
  topic: 'Football Officiating',
  level: 'Intermediate',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 600,
  questions: [
    {
      question: 'What is the signal for a touchdown in American football?',
      choices: [
        'Raising both arms above the head',
        'Pointing with both hands towards the end zone',
        'Blowing a whistle',
        'Throwing a flag',
      ],
      type: 'MCQs',
      correctAnswers: ['Raising both arms above the head'],
      score: 10,
    },
    {
      question: 'How many officials are typically on the field during an NFL game?',
      choices: ['5', '7', '9', '11'],
      type: 'MCQs',
      correctAnswers: ['7'],
      score: 10,
    },
    {
      question: 'What is the penalty for "holding" in football?',
      choices: ['5 yards', '10 yards', '15 yards', 'Loss of down'],
      type: 'MCQs',
      correctAnswers: ['10 yards'],
      score: 10,
    },
    {
      question: 'Which official is responsible for spotting the football?',
      choices: ['Referee', 'Umpire', 'Line Judge', 'Back Judge'],
      type: 'MCQs',
      correctAnswers: ['Umpire'],
      score: 10,
    },
    {
      question: 'What is the result of an "offside" penalty in football?',
      choices: ['First down', 'Loss of down', '5 yards penalty', 'Touchdown'],
      type: 'MCQs',
      correctAnswers: ['5 yards penalty'],
      score: 10,
    },
    {
      question: 'What is the signal for a false start penalty?',
      choices: ['Throwing a flag', 'Blowing a whistle', 'Crossing arms in front of the chest', 'Pointing towards the offense'],
      type: 'MCQs',
      correctAnswers: ['Crossing arms in front of the chest'],
      score: 10,
    },
    {
      question: 'Which official is responsible for watching the line of scrimmage?',
      choices: ['Referee', 'Umpire', 'Line Judge', 'Back Judge'],
      type: 'MCQs',
      correctAnswers: ['Line Judge'],
      score: 10,
    },
    {
      question: 'What is the penalty for "pass interference" in football?',
      choices: ['5 yards', '10 yards', '15 yards', 'Automatic first down'],
      type: 'MCQs',
      correctAnswers: ['Automatic first down'],
      score: 10,
    },
    {
      question: 'Who is the head official in an NFL game?',
      choices: ['Referee', 'Umpire', 'Line Judge', 'Back Judge'],
      type: 'MCQs',
      correctAnswers: ['Referee'],
      score: 10,
    },
    {
      question: 'What is the result of a "delay of game" penalty?',
      choices: ['5 yards penalty', '10 yards penalty', 'Loss of down', 'Automatic first down'],
      type: 'MCQs',
      correctAnswers: ['5 yards penalty'],
      score: 10,
    },
  ],
};
