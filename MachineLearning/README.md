# 🤖 FashionApp — Machine Learning Recommendation System

Product recommendation engine for the FashionApp e-commerce platform, powered by **cosine similarity** and served via a **Flask REST API**.

---

## 🏗️ Tech Stack

| Technology | Purpose |
|---|---|
| Python | Core language |
| Flask | Lightweight API server |
| Flask-CORS | Cross-origin request handling |
| pandas | Data loading & manipulation |
| NumPy | Numerical computation |
| scikit-learn | TF-IDF vectorisation & similarity computation |
| pickle | Precomputed model serialisation |

---

## 📁 Project Structure

```
MachineLearning/
├── API/
│   ├── app.py                # Flask server & /recommend endpoint
│   └── recommendation.py     # Similarity lookup logic
├── model/
│   ├── productsrecommendation.py   # Model training script
│   └── similarity_map.pkl          # Precomputed similarity matrix (~75 MB)
├── data/
│   ├── store_zara.csv              # Raw scraped product data
│   ├── formatted_zara.csv          # Cleaned product data
│   ├── dbdata.csv                  # Database-ready export
│   └── createDbData.py             # CSV formatting script
└── requirements.txt
```

---

## 🧠 How It Works

1. **Training** (`model/productsrecommendation.py`):
   - Loads product data from `data/store_zara.csv`
   - Builds TF-IDF vectors from product descriptions and categories
   - Computes a pairwise **cosine similarity** matrix
   - Serialises the result as `similarity_map.pkl` for fast runtime lookup

2. **Serving** (`API/app.py` + `API/recommendation.py`):
   - Loads the precomputed similarity map and product dataset at startup
   - Exposes a single `GET /recommend` endpoint
   - Looks up the requested SKU, sorts by similarity score, and returns the top N matches

---

## 📜 API Reference

### `GET /recommend`

Returns similar products for a given SKU.

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `sku` | string | ✅ | — | Product SKU to find recommendations for |
| `top_n` | integer | ❌ | 10 | Number of recommendations to return |

**Example Request:**

```
GET /recommend?sku=322901350-800-46&top_n=5
```

**Example Response:**

```json
{
  "sku": "322901350-800-46",
  "recommendations": [
    { "name": "WIDE LEG TROUSERS", "sku": "328594167-800-46", "price": 49.95 },
    { "name": "STRAIGHT FIT JEANS", "sku": "328303236-420-44", "price": 39.95 },
    ...
  ]
}
```

**Error Response (missing SKU):**

```json
{ "error": "Missing required parameter 'sku'." }
```

**Error Response (SKU not found):**

```json
{ "error": "SKU 000000000-000-00 not found in the similarity map." }
```

---

## 🚀 Getting Started

### Prerequisites

- Python >= 3.9

### Installation

```sh
pip install -r requirements.txt
```

### Environment Variables

Create a `.env` file in `API/`:

```env
CORS_ORIGIN=http://localhost:3000
```

### Run the API

```sh
cd API
python app.py
```

The recommendation API will be available at `http://localhost:5001`.

---

## 🔄 Retraining the Model

If the product dataset changes, regenerate the similarity map:

```sh
cd model
python productsrecommendation.py
```

This will overwrite `similarity_map.pkl` with the updated similarity matrix.

---

## 📊 Data Pipeline

| File | Purpose |
|---|---|
| `data/store_zara.csv` | Raw scraped Zara product data |
| `data/formatted_zara.csv` | Cleaned & preprocessed data |
| `data/createDbData.py` | Script to generate `dbdata.csv` for database seeding |
| `data/dbdata.csv` | Final CSV imported into PostgreSQL by the backend |
