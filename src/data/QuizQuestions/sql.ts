// sql.ts

import { Topic } from '.';

export const sql: Topic = {
  topic: 'SQL',
  level: 'Intermediate',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 600,
  questions: [
    {
      question: 'What does SQL stand for?',
      choices: [
        'Structured Query Language',
        'Sequential Query Language',
        'Standard Query Language',
        'System Query Language',
      ],
      type: 'MCQs',
      correctAnswers: ['Structured Query Language'],
      score: 10,
    },
    {
      question: 'Which SQL statement is used to retrieve data from a database?',
      choices: ['SELECT', 'RETRIEVE', 'GET', 'FETCH'],
      type: 'MCQs',
      correctAnswers: ['SELECT'],
      score: 10,
    },
    {
      question: 'In SQL, which clause is used to filter the result set?',
      choices: ['WHERE', 'FILTER', 'LIMIT', 'GROUP BY'],
      type: 'MCQs',
      correctAnswers: ['WHERE'],
      score: 10,
    },
    {
      question: 'What SQL command is used to insert data into a table?',
      choices: ['INSERT INTO', 'ADD', 'UPDATE', 'CREATE TABLE'],
      type: 'MCQs',
      correctAnswers: ['INSERT INTO'],
      score: 10,
    },
    {
      question: 'Which SQL statement is used to update data in a database?',
      choices: ['MODIFY', 'CHANGE', 'UPDATE', 'ALTER'],
      type: 'MCQs',
      correctAnswers: ['UPDATE'],
      score: 10,
    },
    {
      question: 'What SQL command is used to delete data from a table?',
      choices: ['REMOVE FROM', 'DELETE FROM', 'DROP', 'ERASE'],
      type: 'MCQs',
      correctAnswers: ['DELETE FROM'],
      score: 10,
    },
    {
      question: 'In SQL, which keyword is used to sort the result set in ascending order?',
      choices: ['ASC', 'DESC', 'ORDER BY', 'SORT'],
      type: 'MCQs',
      correctAnswers: ['ASC'],
      score: 10,
    },
    {
      question: 'Which SQL statement is used to create a new database?',
      choices: ['NEW DATABASE', 'CREATE DATABASE', 'ADD DATABASE', 'GENERATE DATABASE'],
      type: 'MCQs',
      correctAnswers: ['CREATE DATABASE'],
      score: 10,
    },
    {
      question: 'What SQL clause is used to combine rows from two or more tables?',
      choices: ['JOIN', 'MERGE', 'COMBINE', 'UNION'],
      type: 'MCQs',
      correctAnswers: ['JOIN'],
      score: 10,
    },
    {
      question: 'Which SQL statement is used to make a copy of a table?',
      choices: ['COPY TABLE', 'CLONE', 'DUPLICATE', 'CREATE TABLE AS'],
      type: 'MCQs',
      correctAnswers: ['CREATE TABLE AS'],
      score: 10,
    },
  ],
};
