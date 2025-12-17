from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from data import VULNERABILITIES
from models import Vulnerability

app = FastAPI(title="Vulnerability Management System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/vulnerabilities")
def get_vulnerabilities():
    return VULNERABILITIES

@app.post("/api/vulnerabilities/{vuln_id}/status")
def update_status(vuln_id: str, status: str):
    for v in VULNERABILITIES:
        if v["id"] == vuln_id:
            v["status"] = status
            return v
    return {"error": "Vulnerability not found"}
