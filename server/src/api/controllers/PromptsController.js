const prompts = require("../helpers/Prompts");


const getPrompts = (req, res) => {
    return res.status(200).json(prompts);
};

module.exports = {
    getPrompts
}