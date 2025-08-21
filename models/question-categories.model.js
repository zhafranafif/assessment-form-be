const { sequelize } = require('../config/database');
const { DataTypes } = require('sequelize');
const questionCategoriesResponse = sequelize.define('question_categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

module.exports = questionCategoriesResponse;
