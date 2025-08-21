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
```
npm install
```
### 3. Create .env File
```
PORT=PORT
DB_NAME="DB_NAME"
DB_USER="DB_USER"
DB_PASSWORD="DB_PASSWORD"
DB_HOST="DB_HOST"
DB_PORT="DB_PORT"
```
### 4. Start the application
```
npm run dev
```
---

## 🐳 Run with Docker

### 1. Create Image
```
docker build -t <<YOUR-APP-NAME>> .

//then run the docker
docker run -p 8080:8080 -e PORT=PORT -e DB_NAME=DB_NAME -e DB_USER=DB_USER -e DB_PASSWORD=DB_PASSWORD -e DB_HOST=DB_HOST -e DB_PORT=DB_PORT <<YOUR-APP-NAME>>
```

### 2. Using Docker Compose (Recommended)
```
docker compose up --build

// TO STOP THE COMPOSE 
docker compose down
```

