# 📋 PERN To-Do App

A simple To-Do application built using the **PERN stack** (PostgreSQL, Express.js, React, and Node.js). This project helped me learn and implement CRUD (Create, Read, Update, Delete) operations for the first time using this stack.

## ✨ Features
- ➕ Add new tasks
- 📄 View all tasks
- ✏️ Edit tasks
- ❌ Delete tasks

## 🛠 Tech Stack
- **Frontend:** React.js ⚛️
- **Backend:** Node.js 🌿, Express.js 🚀
- **Database:** PostgreSQL 🐘

## 🚀 Installation & Setup

### 📌 Prerequisites
Make sure you have the following installed:
- Node.js 🟢
- PostgreSQL 🐘

### 📝 Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd todo-pern
   ```
2. Install dependencies for backend:
   ```sh
   cd server
   npm install
   ```
3. Set up PostgreSQL database:
   - Create a database named `todo_db`.
   - Run the following SQL command to create a `todos` table:
     ```sql
     CREATE DATABASE perntodo;

    CREATE TABLE todo(
        todo_id SERIAL PRIMARY KEY,
        description VARCHAR(255)
    );
     ```
   - Update `server/.env` file with database credentials.
4. Start the backend server:
   ```sh
   npm start
   ```
5. Install dependencies for frontend:
   ```sh
   cd ../client
   npm install
   ```
6. Start the frontend React app:
   ```sh
   npm start
   ```
7. Open `http://localhost:YOUR-PORT/` in your browser.

## 🔌 API Endpoints
| Method | Endpoint    | Description          |
|--------|------------|----------------------|
| GET    | /todos     | 📄 Fetch all todos   |
| POST   | /todos     | ➕ Add a new todo     |
| PUT    | /todos/:id | ✏️ Update a todo     |
| DELETE | /todos/:id | ❌ Delete a todo     |

## 📚 Learnings
- 📌 Setting up a PostgreSQL database
- 🔗 Connecting backend with database using Express and `pg` package
- 📡 Handling API requests and responses
- ⚛️ Implementing CRUD operations with React and Fetch API

## 🚀 Future Enhancements
- 🔑 Add user authentication
- 🎨 Implement a better UI/UX
- 🌍 Deploy the app online

## 📜 License
This project is licensed under the MIT License.

---
**First time using the PERN stack – excited to learn more!** 🚀

