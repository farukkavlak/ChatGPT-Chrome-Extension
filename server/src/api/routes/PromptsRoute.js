const router = require('express').Router();
const promptsController = require('../controllers/PromptsController');

router.get('/', promptsController.getPrompts);

module.exports = router;