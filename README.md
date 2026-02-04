# 🚀 Node.js CRUD REST API — MVC Architecture

A clean and scalable **RESTful API** built with **Node.js, Express.js, MongoDB, and Mongoose**, following the **MVC (Model–View–Controller)** architecture.

This project demonstrates how to structure a professional backend application with proper separation of concerns, database integration, and complete CRUD operations.

--------

# 📘 What is Mongoose?

**Mongoose** is an **ODM (Object Data Modeling) library** for MongoDB and Node.js.

It helps you:
- Define schemas
- Validate data
- Interact with MongoDB easily
- Write cleaner and structured database queries

Instead of writing raw MongoDB queries, Mongoose allows working with models like JavaScript objects.

------

# ✨ Features

- MVC architecture
- RESTful API design
- MongoDB integration
- Mongoose schemas & models
- Full CRUD functionality
- Clean and scalable folder structure
- Middleware support
- Beginner friendly & production ready

---

# 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript (ES Modules)
- Postman (API testing)

---

# 📁 Project Structure

`express-mongoose-crud-api/
│
├── controllers/
│ └── userController.js # Business logic
│
├── models/
│ └── userModel.js # Mongoose schema
│
├── routes/
│ └── userRoutes.js # API endpoints
│
├── config/
│ └── db.js # Database configuration
│
├── index.js # Application entry point
├── package.json
├── .gitignore
└── README.md`

--------

# 🔄 MVC Architecture Explained

### Model
Defines database structure using Mongoose schemas.

### Controller
Handles application logic and request/response handling.

### Routes
Connects endpoints to controllers.

---

# 📌 CRUD Operations

`| Method  | Endpoint        | Description        |
|---------|----------------|--------------------|
| POST    | `/users`       | Create a new user  |
| GET     | `/users`       | Get all users      |
| GET     | `/users/:id`   | Get single user    |
| PUT     | `/users/:id`   | Update user        |
| DELETE  | `/users/:id`   | Delete user        |`

## ⚙️ Setup

Install dependencies:

```bash
npm install
