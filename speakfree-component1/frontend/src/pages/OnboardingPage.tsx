import { useNavigate } from "react-router-dom";
import { Sparkles, User } from "lucide-react";
import { useSession } from "../context/SessionContext";
import { AgeCategory } from "../types";

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { setAgeCategory } = useSession();

  const choose = (age: AgeCategory) => {
    setAgeCategory(age);
    navigate("/screening");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900">
          Who's taking the screening today?
        </h1>
        <p className="text-sm text-slate-600">
          This helps us tailor the tasks and questions appropriately.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => choose("kids")}
            className="flex flex-col items-center gap-3 rounded-2xl border-2 border-transparent bg-gradient-to-br from-amber-300 to-pink-400 p-6 text-white shadow-md transition hover:scale-[1.02]"
          >
            <Sparkles size={32} />
            <span className="text-lg font-bold">I'm a Kid</span>
            <span className="text-xs opacity-90">Fun tasks &amp; games</span>
          </button>

          <button
            onClick={() => choose("adults")}
            className="flex flex-col items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white p-6 text-slate-800 shadow-sm transition hover:scale-[1.02] hover:border-brand-300"
          >
            <User size={32} className="text-brand-600" />
            <span className="text-lg font-bold">I'm an Adult</span>
            <span className="text-xs text-slate-500">Standard screening</span>
          </button>
        </div>
      </div>
    </div>
  );
}