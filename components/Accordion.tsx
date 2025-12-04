'use client';

import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  description?: string;
  icon?: string;
  children: React.ReactNode;
}

export function Accordion({ title, description, icon, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors rounded-lg"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <div className="text-primary">
              <i className={`fa fa-${icon}`}></i>
            </div>
          )}
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">{title}</div>
            {description && (
              <div className="text-sm text-gray-600 dark:text-gray-400">{description}</div>
            )}
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 prose prose-sm dark:prose-invert max-w-none">
          {children}
        </div>
      )}
    </div>
  );
}

export function AccordionGroup({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2 mb-6">{children}</div>;
}
