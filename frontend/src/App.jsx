import { useEffect, useState } from "react";
import { fetchVulnerabilities, updateStatus } from "./api";

export default function App() {
  const [vulns, setVulns] = useState([]);

  useEffect(() => {
    fetchVulnerabilities().then(setVulns);
  }, []);

  function handleUpdate(id) {
    updateStatus(id, "Patched").then(() =>
      fetchVulnerabilities().then(setVulns)
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Vulnerability Management Dashboard</h1>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Asset</th>
            <th>Title</th>
            <th>Severity</th>
            <th>CVSS</th>
            <th>Status</th>
            <th>Patch</th>
          </tr>
        </thead>
        <tbody>
          {vulns.map(v => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.asset}</td>
              <td>{v.title}</td>
              <td>{v.severity}</td>
              <td>{v.cvss_score}</td>
              <td>{v.status}</td>
              <td>
                {v.patch_available && v.status !== "Patched" && (
                  <button onClick={() => handleUpdate(v.id)}>
                    Apply Patch
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
