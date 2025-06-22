# Quick Chat

A real-time chat application built with MERN stack (MongoDB, Express, React, Node.js) and Socket.IO that allows users to communicate instantly.

![Quick Chat Demo]()

## Features

- 🔐 User authentication and authorization with JWT
- 💬 Real-time messaging with Socket.IO
- 👤 User profiles with customizable avatars and bios
- 📱 Responsive design for mobile and desktop
- 📸 Image sharing in conversations
- 🔔 Unread message notifications
- 👥 Online status indicators

## Tech Stack

### Frontend

- React.js
- React Router
- Tailwind CSS
- Socket.IO Client
- Axios
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO
- JWT Authentication
- Bcrypt for password hashing
- Cloudinary for image uploads

## Installation

### Prerequisites

- Node.js (v14+)
- MongoDB
- Cloudinary account

### Setup Server

1. Clone the repository
2. Install dependencies
3. Create a `.env` file in the server directory by copying `.env.example`, then update it with your configuration values
4. Start the server

### Setup Client

1. Navigate to client directory
2. Install dependencies
3. Create a `.env` file in the client directory with:
4. Start the client

## Usage

1. Register a new account or login with existing credentials
2. Update your profile with avatar and bio
3. Start chatting with other users in real-time
4. Share images in conversations
5. You can also view online status of other users

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `PUT /api/auth/update-profile` - Update user profile
- `GET /api/auth/check` - Check authentication status

### Messages

- `GET /api/messages/users` - Get all users for sidebar
- `GET /api/messages/:id` - Get messages for a specific user
- `POST /api/messages/send/:id` - Send message to a user
- `PUT /api/messages/mark/:id` - Mark message as seen

## Socket Events

- `connection` - When a user connects
- `disconnect` - When a user disconnects
- `getOnlineUsers` - Get list of online users
- `newMessage` - When a new message is received

## License

[MIT](LICENSE)

## Author

Sarthak Yeole - [GitHub](https://github.com/sarthakyeole)
