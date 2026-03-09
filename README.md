# Bookr API

The backend API for **Bookr** — a multi-tenant appointment booking platform built with **Node.js** and **Express**.

---

## Tech Stack

- Node.js + TypeScript
- Express 5
- MongoDB + Mongoose
- JWT Authentication
- Stripe (payments)

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB running locally or a MongoDB Atlas URI

---

## Installation

```bash
git clone https://github.com/AbdelrahmanMostafa0/bookr-api.git
cd bookr-api
npm install
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=9000
MONGO_URI=mongodb://localhost:27017/bookr
```

---

## Running Locally

```bash
npm run dev
```

The API will run at:

```
http://localhost:9000
```

---

## Project Structure

```
src/
├── config/         # Database connection
├── middlewares/    # Auth, error handling
├── models/         # Mongoose models
├── modules/        # Feature modules (auth, booking, business)
├── types/          # Shared TypeScript types
├── app.ts          # Express app setup
└── index.ts        # Entry point
```

---

## Related

- Bookr Client
  https://github.com/AbdelrahmanMostafa0/bookr-client
