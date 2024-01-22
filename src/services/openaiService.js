import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

const parseAIResponses = (content) => {
    try {
        const questions = content.split('\n\n').map((block) => {
            const lines = block.split('\n');
            const question = lines[0].substring(lines[0].indexOf(':') + 1).trim();
            const choices = lines.slice(1, -1).map(choice => {
                const choiceText = choice.substring(choice.indexOf(')') + 1).trim();
                return choiceText;
            });
            const correctAnswerLine = lines[lines.length - 1];
            const correctAnswer = correctAnswerLine.substring(correctAnswerLine.lastIndexOf(':') + 1).trim();

            const correctAnswerText = choices[parseInt(correctAnswer) - 1];
            
            return { question, choices, correctAnswer: correctAnswerText };
        }).filter(q => q.question && q.choices.length && q.correctAnswer);

        if (questions.length === 0) {
            throw new Error("No valid questions found in the response.");
        }

        return questions;
    } catch (error) {
        console.error('Error parsing AI responses:', error);
        console.log('Raw response content:', content);
        return [];
    }
};

const getTriviaQuestions = async (topic) => {
    try {
        const userPrompt = `Generate 10 multiple-choice trivia questions about ${topic} with four options for each, formatted as follows: Question number and text, followed by four options numbered 1) to 4). Indicate the correct answer with the number only after 'Correct Answer:'.`;

        const response = await axios.post(
            OPENAI_API_URL,
            {
                model: "gpt-4",
                messages: [
                    { "role": "system", "content": "You are a helpful assistant." },
                    { "role": "user", "content": userPrompt }
                ],
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const content = response.data.choices[0].message.content;
        console.log('Raw API Response:', content);
        return parseAIResponses(content);
    } catch (error) {
        console.error('Error fetching trivia questions:', error);
        return [];
    }
};

export default getTriviaQuestions;
