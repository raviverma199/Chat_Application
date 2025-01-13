# Chat Application

A modern, real-time chat application built with **React**, **Node.js**, **Express**, **Socket.IO**, and **MongoDB**. This app features secure user authentication, and real-time communication. It supports one-on-one, ensuring a seamless user experience with real-time updates.

---

## Features

- **User Authentication**: Login and Signup functionality with secure password management.
- **Real-Time Communication**: Instant messaging with real-time updates using Socket.IO.
- **Online Users**: View a list of currently active users.
- **One-on-One Chat**: Private messaging between two users.
- **Design**: A functional interface for chatting. *(Responsive design is currently not implemented.)*

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Real-Time Communication**: Socket.IO
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT) and bcrypt
- **Styling**: Tailwind Css, daisyui

---

## Installation

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:
- Node.js (v14+)
- MongoDB
- Git

### Clone the Repository

```bash
   git clone https://github.com/raviverma199/Chat_Application.git

   ```

2. **Open Terminals for Backend and Frontend:**

   ```bash
   cd Chat_Application/backend

   cd Chat_Application/frontend

   ```

3. **Install Dependencies for backend and frotend:**

   ```bash
   npm install

   ```
   
4. **Create a .env file in the root directory of backend folder and add the following variables:**

   ```bash
   SECRET_KEY=your_secret_key  
   MONGODB_URI=mongodb://localhost:27017/chat-app  # Make sure MongoDB is running locally or update the connection string.
   PORT=2020 # Default port

   ```

5. **Run the following command:**

   ```bash
   npm start

   ```
