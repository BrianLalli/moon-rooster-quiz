import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Parser Function
const parseAIResponse = (content) => {
  const [questionPart, answerPart] = content.split("\n\nCorrect Answer: ");
  const [question, ...choices] = questionPart.split('\n\n');
  
  return {
    question,
    choices: choices.join('\n').split('\n').filter(choice => choice.trim()),
    correctAnswer: answerPart
  };
};

const getTriviaQuestions = async (topic) => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-4", // Specify the model
        messages: [{ "role": "system", "content": "You are a helpful assistant." },
                   { "role": "user", "content": `Generate a multiple-choice trivia question about ${topic} with four options, including the correct answer.` }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    const content = response.data.choices[0].message.content;
    return parseAIResponse(content); // Use the parser
  } catch (error) {
    console.error('Error fetching trivia question:', error);
    return null;
  }
};

export default getTriviaQuestions;
