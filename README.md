# 🛍️ FashionApp

A full-stack **fashion e-commerce platform** with seamless product browsing, secure authentication, shopping cart, wishlists, order management, and an **AI-powered recommendation system** that suggests products using cosine similarity.

---

## 🌐 Live Demo

**[https://fashionappcip.onrender.com](https://fashionappcip.onrender.com)**

> ⚠️ **Cold Start Notice:** This application is hosted on Render's free tier. Both the main API and the recommendation API spin down after inactivity and may take up to **60 seconds** to respond on the first request. Subsequent requests will be fast.

---

## ✨ Features

- 🔐 **Authentication** — Register, login, and JWT-based sessions
- 🛒 **Shopping Cart** — Add, update, and remove items
- ❤️ **Wishlist** — Save favourite products for later
- 📦 **Orders** — Place and track orders
- ⭐ **Ratings & Reviews** — Rate and review products
- 📂 **Categories** — Browse products by category
- 🔍 **Search** — Find products quickly
- 📧 **Email Notifications** — Order confirmation via Nodemailer
- 🤖 **AI Recommendations** — Personalised suggestions powered by cosine similarity

---

## 🏗️ Architecture

The project is a **monorepo** with three independent services:

```
FashionApp/
├── Front-end/          → React SPA (Vite + TypeScript + Tailwind)
├── Back-end/           → REST API (Express + TypeScript + Prisma)
└── MachineLearning/    → Recommendation API (Python + Flask)
```

| Service | Tech | Port | README |
|---|---|---|---|
| Frontend | React 18, Vite, Tailwind CSS, Redux Toolkit | `5173` | [Front-end/README.md](./Front-end/README.md) |
| Backend | Express, Prisma, PostgreSQL, JWT | `3000` | [Back-end/README.md](./Back-end/README.md) |
| ML API | Flask, pandas, scikit-learn | `5001` | [MachineLearning/README.md](./MachineLearning/README.md) |

> 📖 **Each folder contains its own README** with detailed project structure, setup instructions, API reference, and configuration docs.

---

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18
- Python >= 3.9
- PostgreSQL

### 1. Clone

```sh
git clone https://github.com/chirilaciprian/FashionApp.git
cd FashionApp
```

### 2. Backend

```sh
cd Back-end
npm install
# Configure .env (see Back-end/README.md)
npx prisma migrate deploy --schema=prisma/schema.prisma
npm run start
```

### 3. Machine Learning API

```sh
cd MachineLearning
pip install -r requirements.txt
cd API
python app.py
```

### 4. Frontend

```sh
cd Front-end
npm install
# Configure .env (see Front-end/README.md)
npm run dev
```

The app will be running at `http://localhost:5173`.

---

## 🧪 Testing

```sh
cd Back-end
npm run test
```

See [Back-end/README.md](./Back-end/README.md) for test database setup and configuration.

---

## 🛠️ Tech Stack Overview

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, DaisyUI, Redux Toolkit, React Router v6 |
| **Backend** | Node.js, Express, TypeScript, Prisma ORM, PostgreSQL, JWT, Zod, Winston |
| **ML** | Python, Flask, pandas, NumPy, scikit-learn, cosine similarity |
| **Testing** | Jest, Supertest |
| **Deployment** | Render |

---

## 📄 License

This project is licensed under the **ISC License**.
