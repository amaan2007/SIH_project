'use client';

import { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import Sidebar from '@/components/Sidebar/page';
import ProfileHeader from '@/components/Profile/ProfileHeader';
import JobStats from '@/components/JobMatches/JobStats';
import JobFilters from '@/components/JobMatches/JobFilters';
import JobCard from '@/components/JobMatches/JobCard';

export default function JobMatchesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock job data
  const jobs = [
    {
      company: 'Google',
      logo: 'G',
      logoColor: 'bg-white',
      logoText: 'text-[#4285F4]',
      verified: true,
      role: 'Frontend Developer',
      location: 'Bangalore, India',
      jobType: 'Full-time',
      postedAgo: '2 days ago',
      matchPercent: 92,
      reasons: [
        'Strong match with your React, Next.js skills',
        'Experience in building responsive web apps',
        'Good alignment with required skills',
      ],
      skills: ['React.js', 'Next.js', 'JavaScript', 'CSS', 'Tailwind CSS'],
      extraSkills: 3,
    },
    {
      company: 'Microsoft',
      logo: 'M',
      logoColor: 'bg-white',
      logoText: 'text-[#F25022]',
      verified: true,
      role: 'Software Engineer',
      location: 'Hyderabad, India',
      jobType: 'Full-time',
      postedAgo: '4 days ago',
      matchPercent: 85,
      reasons: [
        'Good match with your problem solving skills',
        'Experience in JavaScript and APIs',
        'Strong potential for this role',
      ],
      skills: ['JavaScript', 'React.js', 'Node.js', 'REST APIs', 'Git'],
      extraSkills: 2,
    },
    {
      company: 'Swiggy',
      logo: 'S',
      logoColor: 'bg-orange-100',
      logoText: 'text-orange-600',
      verified: true,
      role: 'Frontend Developer',
      location: 'Remote',
      jobType: 'Full-time',
      postedAgo: '1 week ago',
      matchPercent: 78,
      reasons: [
        'Matching frontend development skills',
        'Experience with modern JS frameworks',
        'Opportunity to work on scalable products',
      ],
      skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Redux'],
      extraSkills: 2,
    },
    {
      company: 'Zomato',
      logo: 'Z',
      logoColor: 'bg-red-500',
      logoText: 'text-white',
      verified: true,
      role: 'UI Developer',
      location: 'Gurugram, India',
      jobType: 'Full-time',
      postedAgo: '1 week ago',
      matchPercent: 72,
      reasons: [
        'Good match with UI development skills',
        'Experience with CSS frameworks',
        'Great culture & learning environment',
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Figma'],
      extraSkills: 1,
    },
  ];

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
          <ProfileHeader />

          {/* Title */}
          <div className="mt-6">
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Job Matches</h1>
            <p className="mt-1 text-sm text-gray-500">
              AI-powered job matches based on your resume, skills and preferences.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-6">
            <JobStats />
          </div>

          {/* Filters */}
          <div className="mt-6">
            <JobFilters />
          </div>

          {/* Job Cards */}
          <div className="mt-6 space-y-4">
            {jobs.map((job, i) => (
              <JobCard key={i} job={job} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-6 flex justify-center">
            <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-gray-50">
              Load More
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}