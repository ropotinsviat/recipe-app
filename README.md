# Recipe App

A full-stack recipe application built with Next.js (frontend) and NestJS (backend).

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/ropotinsviat/recipe-app.git
cd recipe-app
```

---

## Frontend Setup (Client)

```sh
cd client
npm install
npm run dev
```

The frontend will start at `http://localhost:3000` by default.

---

## Backend Setup (Server)

In a separate terminal:

```sh
cd server
npm install
npm run start:dev
```

The backend will start at `http://localhost:5000` (or as configured in `.env`).

## Running the Full Stack

To run both the frontend and backend together:

1. Start the backend:
   ```sh
   cd server
   npm run start:dev
   ```
2. Start the frontend:
   ```sh
   cd client
   npm run dev
   ```

Now, visit `http://localhost:3000` to use the application! 🚀
