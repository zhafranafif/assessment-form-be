# 🚀 Supervisor Assessment Backend App

---

## 📦 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- JavaScript
- dotenv (for environment variables)
- Sequelize

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/zhafranafif/assessment-form-be.git
cd assessment-form-be
```
### 2. Install Depedencies
```bash
npm install
```
### 3. Create .env File
```bash
PORT=PORT
DB_NAME="DB_NAME"
DB_USER="DB_USER"
DB_PASSWORD="DB_PASSWORD"
DB_HOST="DB_HOST"
DB_PORT="DB_PORT"
```
### 4. Start the application
```bash
npm run dev
```
---

## 🐳 Run with Docker

### 1. Create Image
```bash
docker build -t <<YOUR-APP-NAME>> .

//then run the docker
docker run -p 8080:8080 -e PORT=PORT -e DB_NAME=DB_NAME -e DB_USER=DB_USER -e DB_PASSWORD=DB_PASSWORD -e DB_HOST=DB_HOST -e DB_PORT=DB_PORT <<YOUR-APP-NAME>>
```

### 2. Using Docker Compose (Recommended)
```bash
docker compose up --build

//TO STOP THE COMPOSE 
docker compose down
```

## 👨‍💻 After successful build or running the application

### 1. You must insert a question category to the database
```bash
//Using API
[POST] http://localhost:8080/api/question-category 
[BODY] {
          "category_name": "Leadership & Management"
       }

//Using PGAdmin GUI
INSERT INTO assessments (category_name) VALUES
(Leadership & Management),
(Communication & Interpersonal Skills),
(Professional Development & Support),
(Compliance & Professionalism),
(Team Management & Collaboration);
```

### 2. After insert a question category, you must insert a question that categorized
```bash
//Using API
[POST] http://localhost:8080/api/question
[BODY] {
          "question": "Management is competent and capable",
          "category_id": 1
       }

//Using PGAdmin GUI
INSERT INTO questions (question, category_id) VALUES
('Management is capable and competent', 1),
('Management clearly explains strategies and goals', 2),
('Management positively motivates employees to achieve goals', 1),
('Management has realistic performance expectations', 1),
('Management takes responsibility for their actions', 1),
('Management treats employees with respect', 4),
('Management is accessible for questions and advice', 2),
('Management follows company rules and policies', 4),
('Management takes a personal interest in my success', 3),
('I feel comfortable speaking with management', 2);
```


