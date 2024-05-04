# Real-Time Chat Application Documentation

This document provides an overview and documentation for the Real-Time Chat Application.

## Overview

The Real-Time Chat Application is a scalable and efficient chat application capable of supporting private one-on-one messages. It provides real-time communication without noticeable lag and includes features such as user account management, message history, and real-time messaging capabilities.

## Technologies Used

- **Backend Development**: Node.js
- **Database**: Postgres
- **Caching**: Redis
- **Messaging Queue**: Kafka
- **Testing**: Jest (for Node.js)
- **Performance Testing**: JMeter

## Project Structure

The project is structured into two main directories: `backend` and `frontend`.

### Backend

The `backend` directory contains the server-side code for the application.

- **Controllers**: Handle incoming HTTP requests and delegate to corresponding services.
- **Services**: Implement business logic for various functionalities.
- **Models**: Define database models using Sequelize ORM.
- **Routes**: Define API routes using Express.js.
- **Config**: Contains configuration files for database, caching, and messaging queue.

### Frontend

The `frontend` directory contains the client-side code for the application.

- **Components**: Reusable UI components for the chat interface and sign-in form.
- **Services**: Contains `ApiService.js` for making API calls to the backend.
- **Styles**: CSS stylesheets for styling the UI components.
- **Public**: Contains `index.html` as the entry point for the React application.
- **Src**: Contains `index.js` as the entry point for React components.

## Backend API Endpoints

### Authentication

- **POST /auth/signup**: Sign up a new user.
- **POST /auth/signin**: Sign in an existing user.
- **POST /auth/logout**: Logout a user.

### Chat Functionality

- **POST /chat/send-message**: Send a message.
- **GET /chat/message-history**: Get message history between two users.

## Getting Started

1. Clone the repository: `git clone https://github.com/nikhiltavar/real-time-chat-app.git`
2. Install dependencies:
   - For backend: `cd backend && npm install`
   - For frontend: `cd frontend && npm install`
3. Configure environment variables and database connection settings in the backend.
4. Start the backend server: `npm start` in the backend directory.
5. Start the frontend development server: `npm start` in the frontend directory.
6. Access the application in a web browser at `http://localhost:3000`.

## Testing

- Backend testing: Jest is used for unit testing backend code.
- Performance testing: JMeter is used to assess the application's performance under simulated load conditions.

## Future Improvements

- Implement user authentication using JWT tokens for improved security.
- Enhance the chat interface with features like emoji support, file sharing, etc.
- Implement group chat functionality.
- Improve scalability by deploying the application on a cloud platform.
