import React from 'react';
import Image from 'next/image';
import { Search, Bell, Sparkles, Upload, ArrowRight } from 'lucide-react';

export default function Herosection() {
  return (
    // h-full so it fills the main content area next to the sidebar
    <div className="relative h-full w-full min-h-[600px] overflow-hidden bg-white">
      
      {/* BACKGROUND IMAGE - covers entire hero including below the text */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Dash_Heosection.png" // put hero-bg.png in your /public folder
          alt="Career Journey Background"
          fill
          priority
          className="object-cover object-right object-bottom md:object-center"
          sizes="100vw"
        />
        {/* Soft fade on the left so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-full md:w-[70%]" />
        {/* Soft fade at the bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/40 to-transparent" />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 flex h-full flex-col px-4 sm:px-6 lg:px-10 xl:px-14">
        
        {/* TOP BAR */}
        <header className="flex w-full shrink-0 items-center justify-between py-5 lg:py-6">
          {/* Search */}
          <div className="relative hidden w-full max-w-md sm:block lg:max-w-lg">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-xl border border-gray-200 bg-white/90 py-2.5 pl-10 pr-3 text-sm placeholder-gray-500 shadow-sm backdrop-blur-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Search for jobs, skills, companies..."
            />
          </div>

          {/* Notification + Avatar */}
          <div className="ml-auto flex items-center gap-3 sm:gap-4">
            <button className="relative rounded-full border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm transition-colors hover:bg-gray-50">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
            </button>
            <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
              <Image
                src="/Avatar_hero.png"
                alt="User Avatar"
                width={40}
                height={40}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </header>

        {/* HERO TEXT - vertically centered, image continues below it */}
        <main className="flex flex-1 flex-col justify-center pb-16 pt-8 md:pb-24 md:pt-10 max-w-xl lg:max-w-2xl">
          
          {/* Badge */}
          <div className="mb-6 inline-flex w-max items-center gap-2 rounded-full bg-[#E8F3EE] px-4 py-1.5 text-sm font-semibold text-[#186A3B] sm:mb-8">
            <Sparkles className="h-4 w-4" />
            AI-Powered Career Intelligence
          </div>

          {/* Heading */}
          <h1 className="mb-5 text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            Your career journey
            <br />
            <span className="text-[#186A3B]">starts here.</span>
          </h1>

          {/* Subtext */}
          <p className="mb-8 max-w-md text-base leading-relaxed text-gray-600 sm:mb-10 sm:text-lg">
            AI-powered insights to help you discover opportunities, bridge skill gaps and grow.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#186A3B] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#145a32] sm:w-auto sm:text-base">
              <Upload className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              Upload Resume
            </button>

            <button className="group flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/90 px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-sm transition-all hover:bg-white sm:w-auto sm:text-base">
              Explore Jobs
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}