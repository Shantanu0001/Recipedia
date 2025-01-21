# Recipe Collection Platform

This project is a full-stack web application built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js) for managing and sharing recipes. It incorporates user authentication, CRUD operations, and dynamic data fetching to allow users to create, view, update, and delete recipes. The platform ensures a secure and responsive user experience through the integration of JWT-based authentication and a clean, modern frontend design.

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Routes](#api-routes)
6. [Authentication Flow](#authentication-flow)
7. [Challenges Faced](#challenges-faced)
8. [Deployment](#deployment)
9. [License](#license)

## Features
- **User Registration and Login**: Users can sign up and log in to the platform securely using JWT-based authentication.
- **CRUD Operations**: Users can create, read, update, and delete recipes.
- **Protected Routes**: Certain routes are protected and only accessible to authenticated users via JWT.
- **Responsive Design**: The frontend is fully responsive, ensuring a smooth user experience on both desktop and mobile devices.
- **Recipe Sharing**: Users can share their recipes and access others’ shared recipes.

## Tech Stack
- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB (via Mongoose)
  - JWT (for authentication)
  - bcrypt (for password hashing)
- **Frontend**: 
  - React.js (with Vite for faster build and hot-reloading)
  - React Router (for navigation)
  - Axios (for making HTTP requests)
- **Authentication**: 
  - JWT-based token authentication
  - bcrypt for password hashing
- **Hosting**: 
  - MongoDB Atlas (for database)
  - Optional deployment on Vercel/Render for public access

## Installation

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Recipedia.git
   cd Recipedia
   cd backend

2. Install dependencies:
    ```bash
    npm install

3. Create a .env file with the following variables:
     ```bash
    makefile
    Copy
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
  
4. Start the backend server:
    ```bash
    npm start
    The backend server will be running on http://localhost:5000.


### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend

2. Install dependencies:
   ```bash
   npm install

3. Start the frontend server:
 ```bash
 npm run dev
 The frontend will be accessible at http://localhost:3000.
