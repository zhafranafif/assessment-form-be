const answerResponse = require('../../models/answer.model');
const assessmentResponse = require('../../models/assessment.model');
const questionCategoriesResponse = require('../../models/question-categories.model');
const questionResponse = require('../../models/questions.model');
const submitAssessmentForm = async ({ first_name, last_name, working_years, answers }) => {
  try {
    let message = '';
    if (working_years < 0 || working_years > 60) {
      return {
        code: 400,
        message: 'Bad request',
        error: 'Working years must be between 0 and 60'
      };
    }
    const newAssessment = await assessmentResponse.create({
      first_name,
      last_name,
      working_years
    });
    await answerResponse.bulkCreate(
      answers.map((answer) => ({
        question_id: answer?.question_id,
        assessment_id: newAssessment?.dataValues?.id,
        score: answer.score
      }))
    );
    const calculationScore = answers.map((score) => score.score).reduce((a, b) => a + b, 0);

    if (calculationScore >= 40 && calculationScore <= 50)
      message = 'Overall performance is considered excellent, with no significant areas for improvement.';
    if (calculationScore >= 30 && calculationScore < 40)
      message = 'Overall performance is considered good, with some minor areas for improvement.';
    if (calculationScore >= 20 && calculationScore < 30)
      message = 'Performance is acceptable, but improvements are needed in several areas.';
    if (calculationScore >= 10 && calculationScore < 20)
      message = 'Management performance is perceived as poor and requires significant improvement.';
    if (calculationScore < 10)
      message = 'Management performance is perceived as very poor and requires immediate action.';

    return {
      code: 201,
      message: 'Assessment form submitted successfully',
      data: {
        totalScore: calculationScore,
        result: message
      }
    };
  } catch (error) {
    console.error('Error submitting assessment form:', error);
  }
};

const inputQuestionCategory = async ({ category_name }) => {
  try {
    await questionCategoriesResponse.create({
      category_name
    });
    return {
      code: 201,
      message: 'Question category created successfully'
    };
  } catch (error) {
    console.error('Error creating question category:', error);
  }
};

const inputQuestion = async ({ question, category_id }) => {
  try {
    const newQuestion = await questionResponse.create({
      question,
      category_id
    });
    return {
      code: 201,
      message: 'Question created successfully',
      data: newQuestion
    };
  } catch (error) {
    console.error('Error creating question:', error);
  }
};

const getQuestions = async () => {
  try {
    const questions = await questionResponse.findAll({
      where: { is_active: true },
      order: [['id', 'ASC']]
    });
    return {
      code: 200,
      message: 'Questions retrieved successfully',
      data: questions
    };
  } catch (error) {
    console.error('Error retrieving questions:', error);
  }
};
module.exports = {
  submitAssessmentForm,
  inputQuestionCategory,
  inputQuestion,
  getQuestions
};
