// css.ts

import { Topic } from '.';

export const css: Topic = {
  topic: 'CSS',
  level: 'Intermediate',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 600,
  questions: [
    {
      question: 'What does CSS stand for?',
      choices: [
        'Cascading Style Sheet',
        'Computer Style Sheet',
        'Creative Style Sheet',
        'Colorful Style Sheet',
      ],
      type: 'MCQs',
      correctAnswers: ['Cascading Style Sheet'],
      score: 10,
    },
    {
      question: 'Which CSS property is used to change the text color of an element?',
      choices: ['text-color', 'color', 'font-color', 'text-style'],
      type: 'MCQs',
      correctAnswers: ['color'],
      score: 10,
    },
    {
      question: 'In CSS, what property is used to control the spacing between lines of text?',
      choices: ['line-spacing', 'text-spacing', 'line-height', 'text-height'],
      type: 'MCQs',
      correctAnswers: ['line-height'],
      score: 10,
    },
    {
      question: 'Which CSS property is used to add a background color or image to an element?',
      choices: ['background-color', 'background-image', 'background-style', 'element-background'],
      type: 'MCQs',
      correctAnswers: ['background-image'],
      score: 10,
    },
    {
      question: 'In CSS, which selector is used to select all elements with a specific class?',
      choices: ['.class', '#class', ':class', '*class'],
      type: 'MCQs',
      correctAnswers: ['.class'],
      score: 10,
    },
    {
      question: 'What is the CSS property used to add rounded corners to an element?',
      choices: ['border-radius', 'corner-radius', 'element-radius', 'box-radius'],
      type: 'MCQs',
      correctAnswers: ['border-radius'],
      score: 10,
    },
    {
      question: 'Which CSS property is used to control the size of an element\'s font?',
      choices: ['font-size', 'text-size', 'element-font', 'size-font'],
      type: 'MCQs',
      correctAnswers: ['font-size'],
      score: 10,
    },
    {
      question: 'In CSS, what property is used to change the style of the mouse cursor when hovering over an element?',
      choices: ['cursor-style', 'mouse-cursor', 'hover-cursor', 'cursor'],
      type: 'MCQs',
      correctAnswers: ['cursor'],
      score: 10,
    },
    {
      question: 'Which CSS property is used to make text bold?',
      choices: ['font-style', 'bold', 'text-bold', 'font-weight'],
      type: 'MCQs',
      correctAnswers: ['font-weight'],
      score: 10,
    },
    {
      question: 'In CSS, what property is used to control the order of flexible items in a flex container?',
      choices: ['order', 'flex-order', 'item-order', 'flex-item'],
      type: 'MCQs',
      correctAnswers: ['order'],
      score: 10,
    },
  ],
};
