VULNERABILITIES = [
    {
        "id": "VULN-001",
        "asset": "web-server-01",
        "title": "Outdated OpenSSL Version",
        "severity": "High",
        "cvss_score": 8.1,
        "status": "Open",
        "patch_available": True
    },
    {
        "id": "VULN-002",
        "asset": "db-server-02",
        "title": "Weak TLS Configuration",
        "severity": "Medium",
        "cvss_score": 5.6,
        "status": "In Progress",
        "patch_available": False
    },
    {
        "id": "VULN-003",
        "asset": "app-server-03",
        "title": "Unpatched Linux Kernel",
        "severity": "Critical",
        "cvss_score": 9.3,
        "status": "Open",
        "patch_available": True
    }
]
