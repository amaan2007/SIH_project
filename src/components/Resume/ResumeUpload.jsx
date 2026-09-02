'use client';

import { useRef, useState } from 'react';
import {
  Upload,
  FileText,
  Target,
  TrendingUp,
  Briefcase,
  ShieldCheck,
  Lock,
} from 'lucide-react';

export default function ResumeUpload({ onUpload }) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleFiles = (files) => {
    if (files && files[0]) onUpload(files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div>
      {/* Title Row */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Resume</h1>
          <p className="mt-1 text-sm text-gray-500">
            Upload your resume to get AI-powered insights and boost your career
          </p>
        </div>

        <button
          onClick={() => inputRef.current?.click()}
          className="flex items-center gap-2 rounded-xl bg-[#186A3B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#145a32]"
        >
          <Upload className="h-4 w-4" />
          Upload Resume
        </button>
      </div>

      {/* Upload Drop Zone */}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition-colors sm:p-14 ${
          dragging
            ? 'border-[#186A3B] bg-[#E8F3EE]'
            : 'border-gray-200 bg-white hover:border-[#186A3B]/50 hover:bg-gray-50'
        }`}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F3EE]">
          <FileText className="h-9 w-9 text-[#186A3B]" strokeWidth={1.5} />
        </div>

        <h3 className="mt-5 text-lg font-bold text-slate-900 sm:text-xl">
          Upload your resume to get started
        </h3>
        <p className="mt-2 text-sm text-gray-500">Drag & drop your resume here or</p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            inputRef.current?.click();
          }}
          className="mt-5 flex items-center gap-2 rounded-xl bg-[#186A3B] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#145a32]"
        >
          <FileText className="h-4 w-4" />
          Choose File
        </button>

        <p className="mt-5 text-xs text-gray-400">PDF, DOCX • Maximum 5 MB</p>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* What you'll get */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-slate-900">What you'll get after uploading</h2>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              icon: Target,
              iconBg: 'bg-emerald-50',
              iconColor: 'text-emerald-600',
              title: 'Resume Score',
              desc: 'Get a detailed score and feedback to improve your resume.',
            },
            {
              icon: TrendingUp,
              iconBg: 'bg-purple-50',
              iconColor: 'text-purple-600',
              title: 'AI Insights',
              desc: 'Discover key insights and suggestions to make your resume stand out.',
            },
            {
              icon: Briefcase,
              iconBg: 'bg-blue-50',
              iconColor: 'text-blue-600',
              title: 'Job Matches',
              desc: 'See jobs that match your skills and experience perfectly.',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg}`}
                >
                  <Icon className={`h-6 w-6 ${item.iconColor}`} />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Privacy Banner */}
      <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#F0F7F3] p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F3EE]">
            <ShieldCheck className="h-5 w-5 text-[#186A3B]" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Your data is safe with us</h3>
            <p className="mt-0.5 text-xs text-gray-600">
              We ensure 100% privacy and security of your information.
            </p>
          </div>
        </div>
        <Lock className="h-5 w-5 shrink-0 text-gray-400" />
      </div>
    </div>
  );
}