'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
  X
} from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'My Profile', icon: User, href: '/Profile' },
    { name: 'Resume', icon: FileText, href: '/Resume' },
    { name: 'Job Matches', icon: Briefcase, href: '/JobMatches' },
    { name: 'Skill Gap', icon: BarChart2, href: '/SkillGap' },
    { name: 'Roadmap', icon: Map, href: '/CareerRoadmap' },
    { name: 'Applications', icon: Send, href: '#' },
    { name: 'Saved Jobs', icon: Heart, href: '#' },
    { name: 'Settings', icon: Settings, href: '#' },
  ];

  return (
    <>
      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-[280px] flex-col justify-between overflow-y-auto border-r border-gray-100 bg-[#FAFBFA] px-4 py-6 transition-transform duration-300 ease-in-out lg:static lg:z-auto lg:w-[260px] lg:translate-x-0 lg:shrink-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* TOP SECTION */}
        <div>
      {/* LOGO */}
<div className="mb-8 flex items-center justify-between px-2">
  <Link href="/" onClick={onClose} aria-label="Go to Home">
    <Image
      src="/logo.png"
      alt="Praxi"
      width={155}
      height={52}
      className="h-auto w-[155px] object-contain"
      priority
    />
  </Link>

  {/* MOBILE CLOSE BUTTON */}
  <button
    onClick={onClose}
    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:bg-gray-50 lg:hidden"
    aria-label="Close menu"
  >
    <X className="h-5 w-5" />
  </button>
</div>

          {/* NAVIGATION */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E8F3EE] text-[#186A3B]'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-slate-900'
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      isActive ? 'text-[#186A3B]' : 'text-gray-400'
                    }`}
                  />

                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-8 flex flex-col gap-4">
          {/* CAREER READINESS CARD */}
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <h3 className="text-xs font-semibold text-gray-900">
              Career Readiness
            </h3>

            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#186A3B]">
                78
              </span>

              <span className="text-sm font-medium text-gray-400">
                /100
              </span>
            </div>

            <p className="mt-1 text-xs text-gray-500">
              Good Progress!
            </p>

            {/* GRAPH */}
            <div className="mt-4 h-12 w-full">
              <svg
                viewBox="0 0 100 40"
                className="h-full w-full overflow-visible"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#186A3B"
                      stopOpacity="0.2"
                    />

                    <stop
                      offset="100%"
                      stopColor="#186A3B"
                      stopOpacity="0"
                    />
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

                <circle
                  cx="100"
                  cy="5"
                  r="2.5"
                  fill="#186A3B"
                />
              </svg>
            </div>
          </div>

          {/* USER PROFILE */}
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
                <p className="text-sm font-semibold text-slate-900">
                  XYZ
                </p>

                <p className="text-xs text-[#186A3B]">
                  View Profile
                </p>
              </div>
            </div>

            <ChevronRight className="h-4 w-4 text-gray-400 transition-colors group-hover:text-gray-600" />
          </button>
        </div>
      </aside>
    </>
  );
}