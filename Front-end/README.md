# 🎨 FashionApp — Frontend

React single-page application for the FashionApp e-commerce platform, built with **React 18**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🏗️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Vite | Build tool & dev server |
| TypeScript | Type safety |
| Tailwind CSS + DaisyUI | Utility-first styling & component library |
| Redux Toolkit | Global state management |
| React Router v6 | Client-side routing |
| Axios | HTTP client for API communication |
| React Toastify | Toast notifications |
| Headless UI + Heroicons | Accessible UI primitives & icons |
| React Icons | Extended icon library |
| React Lazy Load Image | Lazy-loaded images with placeholders |

---

## 📁 Project Structure

```
Front-end/
├── public/                   # Static assets
├── src/
│   ├── main.tsx              # App entry point
│   ├── App.tsx               # Root component & routing
│   ├── index.css             # Global styles
│   ├── App.css               # App-level styles
│   ├── components/
│   │   ├── authorization/    # Auth-related pages
│   │   │   ├── LoginPage.tsx
│   │   │   └── SignUpPage.tsx
│   │   ├── pages/            # Route-level page components
│   │   │   ├── HomePage.tsx
│   │   │   ├── ProductsPage.tsx
│   │   │   ├── ProductOverview.tsx
│   │   │   ├── CartPage.tsx
│   │   │   ├── WishlistPage.tsx
│   │   │   ├── OrderPage.tsx
│   │   │   ├── MyOrdersPage.tsx
│   │   │   ├── ProfilePage.tsx
│   │   │   ├── RatingsPage.tsx
│   │   │   └── AboutPage.tsx
│   │   └── general/          # Reusable UI components
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       ├── Product.tsx
│   │       ├── ProductsList.tsx
│   │       ├── CartItem.tsx
│   │       ├── WishlistCard.tsx
│   │       ├── OrderItemCard.tsx
│   │       ├── Rating.tsx
│   │       ├── RecommendedProducts.tsx
│   │       ├── SearchBar.tsx
│   │       ├── Hero.tsx
│   │       ├── Carousel.tsx
│   │       ├── HomeExploreCard.tsx
│   │       ├── ImageComponent.tsx
│   │       ├── Modal.tsx
│   │       ├── Alert.tsx
│   │       └── Watch.tsx
│   ├── services/             # API service layer (Axios)
│   │   ├── authService.ts
│   │   ├── productService.ts
│   │   ├── categoryService.ts
│   │   ├── cartService.ts
│   │   ├── orderService.ts
│   │   ├── ratingService.ts
│   │   ├── wishlistService.ts
│   │   ├── userService.ts
│   │   ├── emailService.ts
│   │   └── recommendationService.ts
│   ├── state/                # Redux store
│   │   ├── store.ts
│   │   └── slices/
│   │       ├── cartSlice.ts
│   │       └── wishlistSlice.ts
│   └── hooks/                # Custom React hooks
│       └── authHooks.ts
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── .eslintrc.cjs
└── package.json
```

---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Landing page with hero, categories, and featured products |
| Products | `/products` | Browsable product catalog with filtering |
| Product Overview | `/products/:id` | Detailed product view with AI recommendations |
| Cart | `/cart` | Shopping cart management |
| Wishlist | `/wishlist` | Saved favourite items |
| Order | `/order` | Checkout flow |
| My Orders | `/orders` | Order history |
| Profile | `/profile` | User account settings |
| Ratings | `/ratings` | Product rating & reviews |
| About | `/about` | About the platform |
| Login | `/login` | User sign in |
| Sign Up | `/signup` | User registration |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18

### Installation

```sh
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:3000
```

### Development Server

```sh
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```sh
npm run build
npm run preview
```

---

## 🔧 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all TS/TSX files |

---

## 🗂️ State Management

The app uses **Redux Toolkit** for global state, with two main slices:

- **`cartSlice`** — Manages cart items, quantities, and cart operations
- **`wishlistSlice`** — Manages wishlisted product state

Local component state is used wherever global state is not needed.
