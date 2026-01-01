import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(99,102,241,0.35),transparent_40%),#020617]">
      <header className="flex justify-between items-center px-16 py-10">
        <h1 className="text-2xl font-extrabold tracking-tight">
          FinMind<span className="text-indigo-400">.ai</span>
        </h1>

        <Link
          href="/dashboard"
          className="rounded-xl bg-white/10 px-6 py-3 font-semibold backdrop-blur border border-white/20 hover:bg-white/20 transition"
        >
          Open App
        </Link>
      </header>

      <main className="px-16 pt-24 max-w-6xl">
        <h2 className="text-6xl font-extrabold tracking-tight leading-tight">
          Your personal
          <br />
          <span className="text-indigo-400">
            AI financial advisor
          </span>
        </h2>

        <p className="mt-8 max-w-xl text-lg text-slate-300 leading-relaxed">
          Institutional-grade financial guidance powered by AI.
          Built for long-term wealth, clarity, and confidence.
        </p>

        <div className="mt-12 flex gap-6">
          <Link
            href="/dashboard"
            className="primary-button"
          >
            Launch Dashboard
          </Link>

          <button className="rounded-xl px-6 py-3 font-semibold text-slate-300 border border-white/20 hover:bg-white/10 transition">
            See How It Works
          </button>
        </div>

        <div className="mt-24 grid grid-cols-3 gap-8">
          <Feature
            title="AI Portfolio Strategy"
            text="Modern portfolio theory meets large language models."
          />
          <Feature
            title="Risk-Aware Guidance"
            text="Every recommendation is conservative and explainable."
          />
          <Feature
            title="Built for Scale"
            text="Enterprise-grade architecture from day one."
          />
        </div>
      </main>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="glass-card">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-slate-300">{text}</p>
    </div>
  );
}

