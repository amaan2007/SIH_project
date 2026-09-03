'use client';

import { MessageSquarePlus, Sparkles } from 'lucide-react';

export default function AiCoachBanner() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 rounded-2xl border border-[#186A3B]/10 bg-[#F4FBF7] p-4 sm:flex-row sm:px-6">

      {/* Left Content */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
          <Sparkles className="h-5 w-5 text-[#186A3B]" />
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-900">
            Not sure how to stay on track?
          </h3>

          <p className="text-xs text-gray-600">
            Get personalized guidance from your AI Career Coach.
          </p>
        </div>
      </div>

      {/* Button */}
      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-xs font-bold text-[#186A3B] shadow-sm transition-colors hover:bg-gray-50 sm:w-auto"
      >
        <MessageSquarePlus className="h-4 w-4" />
        Chat with AI Coach
      </button>
    </div>
  );
}