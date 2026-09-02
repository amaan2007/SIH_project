'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from '@/components/Sidebar/page';
import ResumeHeader from '@/components/Resume/ResumeHeader';
import ResumeUpload from '@/components/Resume/ResumeUpload';
import ResumeAnalysis from '@/components/Resume/ResumeAnalysis';

export default function ResumePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUpload = (file) => {
    setUploadedFile({
      name: file.name,
      size: (file.size / 1024).toFixed(0) + ' KB',
      uploadedOn: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    });
    setResumeUploaded(true);
  };

  const handleReplace = () => {
    setResumeUploaded(false);
    setUploadedFile(null);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#FAFBFA]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="relative flex-1 h-full overflow-y-auto p-2 lg:p-4">
        {/* Mobile Top Bar */}
        <div className="mb-2 flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-gray-50"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-base font-bold text-slate-900">SmartCareer</span>
        </div>

        {/* Content Card */}
        <div className="w-full rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-4 sm:p-6 lg:p-8">
          <ResumeHeader />

          <div className="mt-6">
            {!resumeUploaded ? (
              <ResumeUpload onUpload={handleUpload} />
            ) : (
              <ResumeAnalysis file={uploadedFile} onReplace={handleReplace} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}