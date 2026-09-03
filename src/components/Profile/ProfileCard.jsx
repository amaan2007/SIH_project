'use client';

import { Camera, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

// Custom LinkedIn Icon SVG
function LinkedinIcon({ className }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function ProfileCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      {/* Green banner */}
      <div className="h-24 bg-gradient-to-b from-[#E8F3EE] to-white" />

      {/* Avatar */}
      <div className="relative -mt-14 flex flex-col items-center px-6 pb-6">
        <div className="relative">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-[#186A3B] text-3xl font-bold text-white shadow-md">
            XY
          </div>
          <button className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#186A3B] text-white shadow-md hover:bg-[#145a32]">
            <Camera className="h-4 w-4" />
          </button>
        </div>

        {/* Name & Role */}
        <h2 className="mt-4 text-xl font-bold text-slate-900">XYZ</h2>
        <p className="mt-0.5 text-sm text-gray-600">Frontend Developer</p>

        {/* Location */}
        <div className="mt-3 flex items-center gap-1.5 text-sm text-gray-500">
          <MapPin className="h-4 w-4 text-[#186A3B]" />
          Bangalore, Karnataka, India
        </div>

        {/* Contact List */}
        <div className="mt-4 w-full space-y-2.5 text-sm text-gray-600">
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-4 w-4 text-gray-400" />
            xyz@example.com
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4 text-gray-400" />
            +91 98765 43210
          </div>
          <div className="flex items-center justify-center gap-2">
            <LinkedinIcon className="h-4 w-4 text-gray-400" />
            linkedin.com/in/xyz-profile
          </div>
        </div>

        {/* View Public Profile */}
        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#186A3B] bg-white px-4 py-2.5 text-sm font-semibold text-[#186A3B] transition-colors hover:bg-[#E8F3EE]">
          View Public Profile
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}