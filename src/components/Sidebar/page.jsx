'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Home, 
  User, 
  FileText, 
  Briefcase, 
  BarChart2, 
  Map, 
  Send, 
  Heart, 
  Settings,
  ChevronRight,
  Hexagon,
  X
} from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
 const navItems = [
  { name: 'Home', icon: Home, href: '/', active: false },
  { name: 'My Profile', icon: User, href: '#' },
  { name: 'Resume', icon: FileText, href: '/Resume', active: false },
  { name: 'Job Matches', icon: Briefcase, href: '#' },
  { name: 'Skill Gap', icon: BarChart2, href: '#' },
  { name: 'Roadmap', icon: Map, href: '#' },
  { name: 'Applications', icon: Send, href: '#' },
  { name: 'Saved Jobs', icon: Heart, href: '#' },
  { name: 'Settings', icon: Settings, href: '#' },
];

  return (
    <>
      {/* MOBILE OVERLAY - tap outside to close */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* SIDEBAR PANEL */}
      <aside
        className={`
          fixed top-0 left-0 z-50 flex h-screen w-[280px] flex-col justify-between
          border-r border-gray-100 bg-[#FAFBFA] px-4 py-6 overflow-y-auto
          transition-transform duration-300 ease-in-out
          lg:static lg:z-auto lg:w-[260px] lg:translate-x-0 lg:shrink-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* TOP SECTION */}
        <div>
          {/* Logo row + Close button (mobile only) */}
          <div className="mb-8 flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="relative flex h-8 w-8 items-center justify-center text-[#186A3B]">
                <Hexagon className="h-8 w-8 fill-[#186A3B]/20 stroke-[1.5]" />
                <div className="absolute h-3 w-3 rounded-sm bg-[#186A3B]" />
              </div>
              <div>
                <h1 className="text-lg font-bold leading-tight text-slate-900">SmartCareer</h1>
                <p className="text-[11px] font-medium text-gray-500">Your Career OS</p>
              </div>
            </div>

            {/* Close button - mobile only */}
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-800 lg:hidden"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    item.active
                      ? 'bg-[#E8F3EE] text-[#186A3B]'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${item.active ? 'text-[#186A3B]' : 'text-gray-400'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-8 flex flex-col gap-4">
          {/* Career Readiness Card */}
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <h3 className="text-xs font-semibold text-gray-900">Career Readiness</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#186A3B]">78</span>
              <span className="text-sm font-medium text-gray-400">/100</span>
            </div>
            <p className="mt-1 text-xs text-gray-500">Good Progress!</p>

            <div className="mt-4 h-12 w-full">
              <svg viewBox="0 0 100 40" className="h-full w-full overflow-visible">
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#186A3B" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#186A3B" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,35 Q15,30 25,32 T50,20 T75,25 T100,5 L100,40 L0,40 Z"
                  fill="url(#gradient)"
                />
                <path
                  d="M0,35 Q15,30 25,32 T50,20 T75,25 T100,5"
                  fill="none"
                  stroke="#186A3B"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="100" cy="5" r="2.5" fill="#186A3B" />
              </svg>
            </div>
          </div>

          {/* User Profile */}
          <button className="group flex w-full items-center justify-between rounded-xl p-2 transition-colors hover:bg-gray-100">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                <Image
                  src="/Avatar_hero.png"
                  alt="XYZ"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-900">Amaan Husain</p>
                <p className="text-xs text-[#186A3B]">View Profile</p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400 transition-colors group-hover:text-gray-600" />
          </button>
        </div>
      </aside>
    </>
  );
}