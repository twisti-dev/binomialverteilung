'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationTabs, getPageTitle } from '@/lib/navigation';

export function Sidebar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <aside className="w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 fixed left-0 top-16 bottom-0 overflow-y-auto">
      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        {navigationTabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`w-full px-4 py-3 text-left font-medium transition-colors ${
              activeTab === idx
                ? 'text-primary border-b-2 border-primary bg-green-50 dark:bg-green-950'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            {tab.tab}
          </button>
        ))}
      </div>

      {/* Navigation Groups */}
      <nav className="p-4">
        {navigationTabs[activeTab].groups.map((group, groupIdx) => (
          <div key={groupIdx} className="mb-6">
            <h3 className="sidebar-group-header text-sm font-semibold text-gray-900 dark:text-white mb-2">
              {group.group}
            </h3>
            <ul className="space-y-1">
              {group.pages.map((page, pageIdx) => {
                const href = `/${page}`;
                const isActive = pathname === href;
                return (
                  <li key={pageIdx}>
                    <Link
                      href={href}
                      className={`block px-3 py-2 rounded text-sm transition-colors no-underline ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900'
                      }`}
                    >
                      {getPageTitle(page)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
