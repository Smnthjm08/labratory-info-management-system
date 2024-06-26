# LIMS (Laboratory Information Management System)

LIMS is a comprehensive system designed to manage laboratory operations efficiently. It consists of a backend and a frontend, each with its own set of dependencies and scripts. The backend is built using Node.js with Express, while the frontend is built using React with Vite and Tailwind CSS.

## Table of Contents
- [Backend](#backend)
- [Frontend](#frontend)
- [User Roles](#user-roles)
- [Installation](#installation)
- [Usage](#usage)

## Backend

The backend is a Node.js application using Express. It includes dependencies for database operations, authentication, and middleware functionalities. Key libraries include:

- **Prisma**: ORM for database interactions.
- **bcrypt**: Password hashing.
- **Cloudinary**: Media management.
- **cookie-parser**: Middleware for parsing cookies.
- **CORS**: Middleware for Cross-Origin Resource Sharing.
- **dotenv**: Environment variable management.
- **Express**: Web application framework.
- **jsonwebtoken**: JSON Web Token for authentication.
- **Nodemon**: Development utility.

## Frontend

The frontend is a React application built with Vite and styled using Tailwind CSS. It leverages various UI component libraries such as:

- **Material-UI**: Components and icons.
- **Heroicons**: Icon library.
- **React Icons**: Icon library for React.
- **React Router DOM**: Declarative routing.
- **Tailwind CSS**: Utility-first CSS framework.

## User Roles

LIMS supports three types of users with role-based access control:

- **Admin**: Manages overall system settings and user roles.
- **Pathologists**: Conducts diagnostic tests and records results.
- **Lab Technicians**: Handles sample collection and preparation.

This role-based access control ensures that users have appropriate permissions based on their responsibilities.

## Installation

To install and set up the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/LIMS.git
    cd LIMS
    ```

2. **Install backend dependencies**:
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

## Usage

To start the backend and frontend servers, use the following commands:

1. **Start the backend server**:
    ```bash
    cd backend
    npm start
    ```

2. **Start the frontend development server**:
    ```bash
    cd frontend
    npm run dev
    ```

Visit the provided local URL in your browser to access the application.

---

This README provides an overview of the LIMS project, including its backend and frontend dependencies, user roles, installation instructions, and usage guidelines.
