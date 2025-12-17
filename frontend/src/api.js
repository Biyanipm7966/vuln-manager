export async function fetchVulnerabilities() {
    const res = await fetch("http://localhost:8020/api/vulnerabilities");
    return res.json();
  }
  
  export async function updateStatus(id, status) {
    await fetch(`http://localhost:8020/api/vulnerabilities/${id}/status?status=${status}`, {
      method: "POST",
    });
  }
  