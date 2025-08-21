const { sequelize } = require('../config/database');
const { DataTypes } = require('sequelize');
const questionResponse = sequelize.define('question', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'question_categories',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});
module.exports = questionResponse;
