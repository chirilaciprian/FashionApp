# ⚙️ FashionApp — Backend

REST API server for the FashionApp e-commerce platform, built with **Express**, **TypeScript**, **Prisma**, and **PostgreSQL**.

---

## 🏗️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js + Express | HTTP server & routing |
| TypeScript | Type safety |
| Prisma ORM | Database access & migrations |
| PostgreSQL | Relational database |
| JWT + Bcrypt | Authentication & password hashing |
| Zod | Request body validation |
| Nodemailer | Transactional email delivery |
| Winston | Structured logging |
| Jest + Supertest | Testing |

---

## 📁 Project Structure

```
Back-end/
├── prisma/
│   ├── schema.prisma         # Database schema
│   └── migrations/           # Prisma migration history
├── src/
│   ├── app.ts                # Express app setup & route mounting
│   ├── index.ts              # Server entry point
│   ├── config/               # Environment & app configuration
│   ├── controllers/          # Route handlers
│   │   ├── authController.ts
│   │   ├── productController.ts
│   │   ├── categoryController.ts
│   │   ├── cartController.ts
│   │   ├── cartItemController.ts
│   │   ├── orderController.ts
│   │   ├── orderItemController.ts
│   │   ├── userController.ts
│   │   ├── ratingController.ts
│   │   ├── wishlistController.ts
│   │   ├── wishlistItemController.ts
│   │   └── emailController.ts
│   ├── services/             # Business logic layer
│   ├── routes/               # Express route definitions
│   ├── middlewares/           # Auth & validation middleware
│   ├── validators/           # Zod validation schemas
│   ├── models/               # Type definitions
│   ├── errors/               # Centralized error handling
│   └── utils/                # Seeding scripts & helpers
├── tests/
│   ├── controllers/          # Controller integration tests
│   └── services/             # Service unit tests
├── logs/                     # Winston log output
├── jest.config.ts
├── jest.setup.ts
├── tsconfig.json
├── nodemon.json
└── package.json
```

---

## 📜 API Routes

All routes are prefixed with `/api`.

| Route | Methods | Description |
|---|---|---|
| `/api/register`, `/api/login` | POST | User authentication |
| `/api/users` | GET, GET/:id, PUT, DELETE | User management |
| `/api/products` | GET, GET/:id, POST, PUT, DELETE | Product catalog |
| `/api/categories` | GET, GET/:id, POST, PUT, DELETE | Product categories |
| `/api/carts` | GET, GET/:id, POST, DELETE | Shopping carts |
| `/api/cartItems` | GET, POST, PUT, DELETE | Cart item management |
| `/api/orders` | GET, GET/:id, POST, DELETE | Order management |
| `/api/orderItems` | GET, POST, PUT, DELETE | Order item management |
| `/api/ratings` | GET, POST, PUT, DELETE | Product ratings |
| `/api/wishlists` | GET, GET/:id, POST, DELETE | User wishlists |
| `/api/wishlistItems` | GET, POST, DELETE | Wishlist item management |
| `/api/emails` | POST | Email notifications |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- PostgreSQL running locally or remotely

### Installation

```sh
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/fashionapp
TEST_DATABASE_URL=postgresql://user:password@localhost:5432/fashionapp_test
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
ML_API_URL=http://localhost:5000
CORS_ORIGIN=http://localhost:5173
```

### Database Setup

Run Prisma migrations:

```sh
npx prisma migrate deploy --schema=prisma/schema.prisma
```

Seed the database:

```sh
npx ts-node src/utils/ImportCategoriesFromCsv.ts
npx ts-node src/utils/ImportProductsFromCsv.ts
npx ts-node src/utils/priceUpdates.ts
npx ts-node src/utils/applyRandomDiscounts.ts
```

### Run the Server

```sh
npm run start
```

The server starts with **nodemon** for hot-reloading during development.

---

## 🧪 Testing

```sh
npm run test
```

Tests use **Jest** and **Supertest** with a separate test database. The test database URL is configured via `TEST_DATABASE_URL`.

Before running tests, ensure test migrations are applied:

```sh
npm run migrate:test
```

---

## 🔒 Middleware

| Middleware | Description |
|---|---|
| `authMiddleware` | Validates JWT tokens and attaches user to request |
| `validateMiddleware` | Validates request bodies against Zod schemas |
