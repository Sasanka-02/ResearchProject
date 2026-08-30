import { useNavigate } from "react-router-dom";
import { Mic, ShieldCheck, Activity, ArrowRight } from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
            <Mic size={18} />
          </div>
          <span className="text-lg font-bold text-slate-900">SpeakFree</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/login")}
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Log in
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            Get Started
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Speech screening that meets you where you are
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A free, private, browser-based screening for speech disorders —
          three short tasks, no appointment, no downloads. Built to work
          reliably even in noisy, real-world conditions.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700"
        >
          Begin Screening
          <ArrowRight size={18} />
        </button>

        <div className="mt-16 grid gap-6 text-left sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <Activity className="text-brand-600" size={22} />
            <h3 className="mt-3 font-semibold text-slate-900">
              Noise-robust analysis
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Confidence-aware speech recognition designed to stay reliable
              even with background noise and variable speech.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <Mic className="text-brand-600" size={22} />
            <h3 className="mt-3 font-semibold text-slate-900">
              Three-task screening
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Picture description, video narration, and a short guided
              conversation — capturing speech patterns a single task would
              miss.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <ShieldCheck className="text-brand-600" size={22} />
            <h3 className="mt-3 font-semibold text-slate-900">
              Privacy-first
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Audio is processed for this session only — no permanent
              storage of your recordings.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}