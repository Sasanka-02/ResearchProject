import { useNavigate } from "react-router-dom";
import { Mic, LogOut, Play, History, ShieldCheck } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useSession } from "../context/SessionContext";

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { resetSession } = useSession();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleStartScreening = () => {
    resetSession();
    navigate("/start");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
              <Mic size={16} />
            </div>
            <span className="font-bold text-slate-900">SpeakFree</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-600">
              Hi, {user?.name ?? "there"}
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100"
            >
              <LogOut size={15} />
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-8 px-6 py-10">
        <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 text-white">
          <h1 className="text-2xl font-bold">
            Welcome back, {user?.name ?? "friend"} 👋
          </h1>
          <p className="mt-1 text-brand-50">
            Ready for a new screening? It takes about 5 minutes.
          </p>
          <button
            onClick={handleStartScreening}
            className="mt-5 flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
          >
            <Play size={16} />
            Start New Screening
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <History className="text-brand-600" size={20} />
            <p className="mt-3 text-2xl font-bold text-slate-900">0</p>
            <p className="text-sm text-slate-500">Screenings completed</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <ShieldCheck className="text-brand-600" size={20} />
            <p className="mt-3 text-2xl font-bold text-slate-900">Private</p>
            <p className="text-sm text-slate-500">Audio processed per-session only</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <Mic className="text-brand-600" size={20} />
            <p className="mt-3 text-2xl font-bold text-slate-900">3 tasks</p>
            <p className="text-sm text-slate-500">Picture, video, conversation</p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="font-semibold text-slate-900">Recent screenings</h2>
          <p className="mt-2 text-sm text-slate-500">
            No screenings yet — your history will appear here once you complete one.
          </p>
        </div>
      </main>
    </div>
  );
}