import { useState } from "react";
import { api } from "../services/api";

export default function Dashboard() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const res = await api.post("/advice", {
      user: { age: 35, income: 150000 },
      portfolio: { stocks: 0.7, bonds: 0.2, cash: 0.1 },
      goals: "Achieve financial independence and retire early"
    });
    setAdvice(res.data.result);
    setLoading(false);
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>
          AI Financial Advisor<span style={{ color: "#818cf8" }}></span>
        </h1>

        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Portfolio</a>
          <a href="#">Goals</a>
          <a href="#">Billing</a>
        </nav>
      </aside>

      <main style={{ padding: "64px" }}>
        <h2 style={{ fontSize: "3rem", fontWeight: 800, letterSpacing: "-0.04em" }}>
          Your AI Financial Advisor
        </h2>

        <p style={{ color: "#94a3b8", maxWidth: 600, marginTop: 12 }}>
          Institutional-grade analysis and personalized guidance, powered by
          AI trained on real financial principles.
        </p>

        <div style={{ marginTop: 48 }} className="glass-card">
          <button className="primary-button" onClick={generate} disabled={loading}>
            {loading ? "Analyzing…" : "Generate Strategic Advice"}
          </button>

          {advice && (
            <div
              style={{
                marginTop: 32,
                lineHeight: 1.7,
                color: "#e5e7eb",
                whiteSpace: "pre-wrap"
              }}
            >
              {advice}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}


