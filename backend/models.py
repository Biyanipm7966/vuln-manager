from pydantic import BaseModel

class Vulnerability(BaseModel):
    id: str
    asset: str
    title: str
    severity: str
    cvss_score: float
    status: str
    patch_available: bool
