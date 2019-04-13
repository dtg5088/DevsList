const router = require('express').Router();
const quizRoutes = require('./quizzes');
const cardRoutes = require('./cards');

// // Quiz routes
router.use('/quiz', quizRoutes);

// Card routes
router.use('/discover', cardRoutes);

module.exports = router;