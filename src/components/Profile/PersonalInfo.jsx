'use client';

import { Calendar, User, Flag, Mail, Phone, Languages } from 'lucide-react';

export default function PersonalInfo() {
  const items = [
    { icon: Calendar, label: 'Date of Birth', value: '15 Aug 2001' },
    { icon: Mail, label: 'Email', value: 'xyz@example.com' },
    { icon: User, label: 'Gender', value: 'Male' },
    { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
    { icon: Flag, label: 'Nationality', value: 'Indian' },
    { icon: Languages, label: 'Languages', value: 'English, Hindi, Kannada' },
  ];

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
      <h3 className="text-base font-bold text-slate-900">Personal Information</h3>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8F3EE]">
                <Icon className="h-4 w-4 text-[#186A3B]" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">{item.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-slate-900">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}