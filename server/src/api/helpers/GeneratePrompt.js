const prompts = require("./Prompts");

const generatePrompt = (input, choice) => {
    return prompts[choice] + input + ".";
}

module.exports = generatePrompt;

