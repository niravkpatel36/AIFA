import { useState } from "react";
import { api } from "../services/api";

export default function Advisor() {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const res = await api.post("/advice", {
      profile: { age: 30, income: 120000 },
      portfolio: { stocks: 70, bonds: 30 },
      goals: "Retire at 55"
    });
    setAdvice(res.data.advice);
  };

  return (
    <div>
      <h1>AI Financial Advisor</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <pre>{advice}</pre>
    </div>
  );
}
