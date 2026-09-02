'use client';

import { Upload, FileText, MoreVertical } from 'lucide-react';
import ScoreCards from './ScoreCards';
import ScoreBreakdown from './ScoreBreakdown';
import AIRecommendations from './AIRecommendations';

export default function ResumeAnalysis({ file, onReplace }) {
  return (
    <div>
      {/* Title Row */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Resume</h1>
          <p className="mt-1 text-sm text-gray-500">
            Your AI-powered resume analysis and insights
          </p>
        </div>

        <button
          onClick={onReplace}
          className="flex items-center gap-2 rounded-xl bg-[#186A3B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#145a32]"
        >
          <Upload className="h-4 w-4" />
          Upload New Resume
        </button>
      </div>

      {/* Uploaded File Card */}
      <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50">
            <FileText className="h-6 w-6 text-red-500" />
            <span className="sr-only">PDF</span>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              {file?.name || 'Amaan_Husain_Resume.pdf'}
            </h3>
            <p className="mt-0.5 text-xs text-gray-500">
              Uploaded on {file?.uploadedOn || '31 May 2025'} • {file?.size || '245 KB'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[#E8F3EE] px-3 py-1 text-xs font-semibold text-[#186A3B]">
            Analyzed
          </span>
          <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Score Cards */}
      <div className="mt-6">
        <ScoreCards />
      </div>

      {/* Radar + Top Skills */}
      <div className="mt-6">
        <ScoreBreakdown />
      </div>

      {/* AI Recommendations */}
      <div className="mt-6">
        <AIRecommendations />
      </div>
    </div>
  );
}