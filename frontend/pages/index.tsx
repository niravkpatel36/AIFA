import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(1000px_500px_at_50%_-20%,rgba(99,102,241,0.35),transparent_40%),#020617]">
      <div className="text-center px-6">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          AI Financial Advisor<span className="text-indigo-400"></span>
        </h1>

        {/* Subheading */}
        <p className="mt-8 text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          
        </p>

        {/* Primary CTA */}
        <div className="mt-14">
          <Link
            href="/dashboard"
            className="primary-button text-lg px-10 py-4"
          >
            Launch Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}



