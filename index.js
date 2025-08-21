const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const { sequelize, connectToDatabase } = require('./config/database');

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const assessmentForm = require('./server/api/assessment-form');
app.use('/api', assessmentForm);

app.listen(port, async () => {
  await connectToDatabase();
  await sequelize
    .sync()
    .then(() => {
      console.log(`Database synced successfully.`);
    })
    .catch((error) => {
      console.error('Error syncing database:', error);
    });
  console.log(`Server is running on http://localhost:${port}`);
});
