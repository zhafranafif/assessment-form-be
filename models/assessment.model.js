const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const assessmentResponse = sequelize.define('assessment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  working_years: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 60
    }
  }
});
module.exports = assessmentResponse;
