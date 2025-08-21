const router = require('express').Router();
const submitAssessmentFormService = require('../service/assessment.service');
const inputQuestionCategoryService = require('../service/assessment.service');

const submitAssessmentForm = async (req, res) => {
  try {
    const result = await submitAssessmentFormService.submitAssessmentForm(req.body);
    if (!req.body.first_name || !req.body.last_name || !req.body.working_years || !req.body.answers) {
      return res.status(400).json({ code: 400, message: 'Bad request', error: 'All fields are required' });
    }
    return res.status(result?.code).json(result);
  } catch (error) {
    console.error('Error submitting assessment form:', error);
    res.status(500).json({
      code: 500,
      error: 'Internal server error',
      message: 'An error occurred while processing your request.'
    });
    throw error;
  }
};
const inputQuestionCategory = async (req, res) => {
  try {
    const categoryNameRegex = /^[a-zA-Z\s]+$/;
    if (!categoryNameRegex.test(req.body.category_name)) {
      return res.status(400).json({ code: 400, message: 'Bad request', error: 'Invalid category name' });
    }
    const result = await inputQuestionCategoryService.inputQuestionCategory(req.body);
    if (!req.body.category_name) {
      return res.status(400).json({ code: 400, message: 'Bad request', error: 'Category name is required' });
    }
    return res.status(result?.code).json(result);
  } catch (error) {
    console.error('Error creating question category:', error);
    res.status(500).json({
      code: 500,
      error: 'Internal server error',
      message: 'An error occurred while processing your request.'
    });
    throw error;
  }
};

const inputQuestion = async (req, res) => {
  try {
    const result = await inputQuestionCategoryService.inputQuestion(req.body);

    const questionRegex = /^[a-zA-Z0-9\s?.,!]+$/;
    if (!questionRegex.test(req.body.question)) {
      return res.status(400).json({ code: 400, message: 'Bad request', error: 'Invalid question format' });
    }
    const categoryIdRegex = /^\d+$/;
    if (!categoryIdRegex.test(req.body.category_id)) {
      return res.status(400).json({ code: 400, message: 'Bad request', error: 'Invalid category ID' });
    }
    if (!req.body.question || !req.body.category_id) {
      return res.status(400).json({ code: 400, message: 'Bad request', error: 'All fields are required' });
    }
    return res.status(result?.code).json(result);
  } catch (error) {
    console.error('Error creating question:', error);
    res.status(500).json({
      code: 500,
      error: 'Internal server error',
      message: 'An error occurred while processing your request.'
    });
    throw error;
  }
};
const getQuestions = async (req, res) => {
  try {
    const result = await submitAssessmentFormService.getQuestions();
    return res.status(result?.code).json(result);
  } catch (error) {
    console.error('Error retrieving questions:', error);
    res.status(500).json({
      code: 500,
      error: 'Internal server error',
      message: 'An error occurred while processing your request.'
    });
    throw error;
  }
};

router.post('/assessment', submitAssessmentForm);
router.post('/question-category', inputQuestionCategory);
router.post('/question', inputQuestion);
router.get('/questions', getQuestions);
module.exports = router;
