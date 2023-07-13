const returnAnswerFormat = require('../helpers/AnswerFormat');
const configureOpenAI = require('../../config/OpenApiConfig');
const generatePrompt = require('../helpers/GeneratePrompt');

const getAnswer = async (req, res) => {
    const openAI = await configureOpenAI();
    if (openAI.error) {
        return res.status(openAI.status).json(openAI.error);
    }
    let { input, choice } = req.query;
    if (input.trim().length === 0) {
        return res.status(400).json({
            error: {
                message: "Please enter a valid input",
            },
        });
    }
    try {
        const completion = await openAI.createCompletion({
            model: "text-davinci-003",
            prompt: generatePrompt(input, choice),
            temperature: 0,
            max_tokens: 100,
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + process.env.OPENAI_API_KEY,
            },
            method: "POST",
        });
        return res.status(200).json({
            result: returnAnswerFormat(completion.data.choices[0].text),
        });
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json({
                error: {
                    message: error.response.data.error.message,
                },
            });
        } else {
            return res.status(500).json({
                error: {
                    message: 'An error occurred during your request.',
                },
            });
        }
    }
};

module.exports = {
    getAnswer
}