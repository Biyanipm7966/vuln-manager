# vuln-manager

A web-based Vulnerability Management Dashboard for tracking and managing software vulnerabilities across multiple assets.

## Features

- View all vulnerabilities in a table with ID, asset, title, severity, CVSS score, and status
- Track vulnerability status (Open, In Progress, Patched)
- Apply patches directly from the dashboard for vulnerabilities with available fixes
- Severity levels: Critical, High, Medium — with CVSS scores (0.0–10.0)

## Tech Stack

| Layer    | Technology                  |
|----------|-----------------------------|
| Backend  | FastAPI + Uvicorn + Pydantic |
| Frontend | React 19 + Vite              |
| Styling  | Plain CSS                    |

## Getting Started

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8020
```

API will be available at `http://localhost:8020`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App will be available at `http://localhost:5173`.

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/vulnerabilities` | List all vulnerabilities |
| `POST` | `/api/vulnerabilities/{vuln_id}/status?status={status}` | Update a vulnerability's status |

## Project Structure

```
vuln-manager/
├── backend/
│   ├── main.py          # FastAPI app and routes
│   ├── models.py        # Pydantic data models
│   ├── data.py          # Sample vulnerability data
│   └── requirements.txt
└── frontend/
    └── src/
        ├── App.jsx      # Main dashboard component
        ├── api.js       # API client functions
        └── App.css      # Styles
```

## Notes

- Data is stored in-memory and resets on server restart (no database).
- CORS is configured to allow requests from `http://localhost:5173`.
