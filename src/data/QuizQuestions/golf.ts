// Golf.ts

import { Topic } from '.';

export const golf: Topic = {
  topic: 'Golf',
  level: 'Intermediate',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 600,
  questions: [
    {
      question: 'What is the term for completing a hole in one stroke under par in golf?',
      choices: [
        'Eagle',
        'Birdie',
        'Par',
        'Hole-in-one',
      ],
      type: 'MCQs',
      correctAnswers: ['Hole-in-one'],
      score: 10,
    },
    {
      question: 'Which major golf tournament is known for the green jacket awarded to its champion?',
      choices: ['The Open Championship', 'The Masters', 'U.S. Open', 'PGA Championship'],
      type: 'MCQs',
      correctAnswers: ['The Masters'],
      score: 10,
    },
    {
      question: 'How many holes are there in a standard round of golf?',
      choices: ['9', '12', '18', '24'],
      type: 'MCQs',
      correctAnswers: ['18'],
      score: 10,
    },
    {
      question: 'Which golfer is often referred to as "The Golden Bear"?',
      choices: ['Tiger Woods', 'Phil Mickelson', 'Arnold Palmer', 'Jack Nicklaus'],
      type: 'MCQs',
      correctAnswers: ['Jack Nicklaus'],
      score: 10,
    },
    {
      question: 'What is the term for the area of closely mowed grass surrounding the green on a golf course?',
      choices: ['Bunker', 'Fairway', 'Rough', 'Fringe'],
      type: 'MCQs',
      correctAnswers: ['Fringe'],
      score: 10,
    },
    {
      question: 'Which club is typically used for long-distance shots off the tee in golf?',
      choices: ['Putter', 'Sand wedge', 'Driver', 'Pitching wedge'],
      type: 'MCQs',
      correctAnswers: ['Driver'],
      score: 10,
    },
    {
      question: 'What is the term for a golf score of two strokes under par on a hole?',
      choices: ['Eagle', 'Birdie', 'Par', 'Bogey'],
      type: 'MCQs',
      correctAnswers: ['Birdie'],
      score: 10,
    },
    {
      question: 'In golf, what is the maximum number of clubs allowed in a player\'s bag for a round?',
      choices: ['10', '12', '14', '16'],
      type: 'MCQs',
      correctAnswers: ['14'],
      score: 10,
    },
    {
      question: 'Which golf major is known as "The Open Championship"?',
      choices: ['The Masters', 'U.S. Open', 'The Open Championship', 'PGA Championship'],
      type: 'MCQs',
      correctAnswers: ['The Open Championship'],
      score: 10,
    },
    {
      question: 'What is the term for a score of one stroke over par on a hole in golf?',
      choices: ['Eagle', 'Birdie', 'Par', 'Bogey'],
      type: 'MCQs',
      correctAnswers: ['Bogey'],
      score: 10,
    },
  ],
};
