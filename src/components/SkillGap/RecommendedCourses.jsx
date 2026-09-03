'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function RecommendedCourses() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  const courses = [
    { logo: 'N', bg: 'bg-black text-white', title: 'Next.js 14 Complete Course', level: 'Intermediate', duration: '12 hours', rating: 4.8 },
    { icon: '🐳', bg: 'bg-blue-100', title: 'Docker for Developers', level: 'Beginner', duration: '8 hours', rating: 4.7 },
    { icon: '🐘', bg: 'bg-blue-50', title: 'PostgreSQL Mastery', level: 'Intermediate', duration: '10 hours', rating: 4.6 },
    { logo: 'TS', bg: 'bg-blue-600 text-white', title: 'TypeScript Deep Dive', level: 'Intermediate', duration: '6 hours', rating: 4.8 },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">Recommended to Bridge the Gap</h2>
        <button className="text-xs font-bold text-[#186A3B] hover:text-[#145a32]">View All Courses →</button>
      </div>

      <div className="relative mt-4 flex items-center">
        {/* Left Arrow */}
        <button onClick={() => scroll('left')} className="absolute -left-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50">
          <ChevronLeft className="h-4 w-4 text-gray-600" />
        </button>

        {/* Scroll Container */}
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto px-4 pb-4 pt-1 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {courses.map((course, i) => (
            <div key={i} className="flex w-72 shrink-0 items-start gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-bold ${course.bg}`}>
                {course.logo ? course.logo : <span className="text-2xl">{course.icon}</span>}
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{course.title}</h3>
                <span className="mt-1 rounded-md bg-purple-50 px-2 py-0.5 text-[10px] font-bold text-purple-600">{course.level}</span>
                <div className="mt-1.5 flex items-center gap-2 text-[11px] font-semibold text-gray-500">
                  <span>{course.duration}</span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5">
                    {course.rating} <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  </span>
                </div>
                <button className="mt-3 rounded-lg border border-[#186A3B] px-4 py-1.5 text-[11px] font-bold text-[#186A3B] hover:bg-[#E8F3EE]">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={() => scroll('right')} className="absolute -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50">
          <ChevronRight className="h-4 w-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}