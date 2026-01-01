import { useState } from "react";
import { api } from "../services/api";

export default function Dashboard() {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const res = await api.post("/advice", {
      user: { age: 35, income: 150000 },
      portfolio: { stocks: 0.7, bonds: 0.2, cash: 0.1 },
      goals: "Retire early"
    });
    setAdvice(res.data.result);
  };

  return (
    <div>
      <h1>FinMind Dashboard</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <pre>{advice}</pre>
    </div>
  );
}
