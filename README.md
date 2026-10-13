# 📚 Bookstore API

A RESTful Bookstore API built with **Node.js, Express.js, and MongoDB**. This project is part of my backend development journey, where I am learning to design APIs, manage databases, implement authentication, and build secure backend applications.

The project is being developed incrementally, with each milestone documented through Git commits.

## 🎯 Project Goals

- Build RESTful APIs for managing books.
- Connect and interact with MongoDB using Mongoose.
- Implement user registration and login.
- Secure passwords using hashing.
- Implement JWT-based authentication.
- Explore authorization and protected routes.
- Practice backend project structure, error handling, and API testing.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Authentication:** JSON Web Tokens (JWT), planned
- **Password Hashing:** bcrypt or bcryptjs, planned
- **API Testing:** Postman

*The stack and feature list will be updated as development progresses.*

## 📁 Project Structure

```text
Bookstore-API-Authentication/
├── controllers/       # Request handling and business logic
├── db/                # Database connection
├── models/             # Mongoose schemas and models
├── routes/             # API route definitions
├── middleware/         # Authentication and other middleware
├── .env.example        # Example environment variables
├── .gitignore
├── package.json
├── package-lock.json
├── server.js           # Application entry point
└── README.md
```

*This is the intended structure. The actual folders and files may change as the project develops.*

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm, included with Node.js
- [MongoDB](https://www.mongodb.com/)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Bookstore-API-Authentication.git
cd Bookstore-API-Authentication
```

Replace `YOUR_USERNAME` and the repository name with your actual GitHub details.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=9000
MONGODB_URI=mongodb://127.0.0.1:27017/Bookstore
JWT_SECRET=your_secret_key
```

These are example variable names. Adjust them to match the variables used in your application. Use a strong, private JWT secret and never commit your actual `.env` file.

### 4. Start the server

Use the start command defined in your `package.json`. For example, if your project defines a `start` script:

```bash
npm start
```

The API will run on the configured port, provided the database connection and application setup are working.

## 🗺️ Development Roadmap

- [ ] Initialize the project structure and dependencies
- [ ] Configure the Express server
- [ ] Establish the MongoDB connection
- [ ] Create the Book schema and model
- [ ] Implement book CRUD operations
- [ ] Implement user registration
- [ ] Hash passwords securely
- [ ] Implement user login
- [ ] Generate and verify JWTs
- [ ] Protect routes with authentication middleware
- [ ] Implement authorization where required
- [ ] Add input validation and consistent error handling
- [ ] Test API endpoints using Postman
- [ ] Document completed endpoints and usage

Progress will be reflected in future commits and updates to this README.

## 🧪 API Testing

API endpoints will be tested using Postman as they are implemented.

The endpoint documentation will be expanded to include HTTP methods, request bodies, authentication requirements, and example responses.

## 📖 Learning Objectives

This project focuses on understanding the fundamentals of backend engineering, including:

- REST API design
- HTTP methods and status codes
- Database modeling and CRUD operations
- Authentication versus authorization
- Password security and JWTs
- Middleware and request processing
- Environment variables and configuration
- Git version control and incremental development

## 👨‍💻 Project Status

**Status:** In development 🚧

Features will be added, tested, and documented progressively as each milestone is completed.

## 📄 License

A license has not yet been specified.