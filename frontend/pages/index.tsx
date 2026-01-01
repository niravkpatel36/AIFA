import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>FinMind.ai</h1>
      <p>AI-powered financial advisory</p>
      <Link href="/dashboard">Go to Dashboard</Link>
    </main>
  );
}
