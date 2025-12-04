'use client';

import React, { useState } from 'react';

interface TooltipProps {
  tip: string;
  children: React.ReactNode;
}

export function Tooltip({ tip, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="border-b-2 border-dotted border-primary cursor-help"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </span>
      {isVisible && (
        <span className="absolute z-10 p-2 text-sm bg-gray-900 text-white rounded shadow-lg -top-2 left-0 transform -translate-y-full w-64">
          {tip}
          <span className="absolute top-full left-4 -mt-1 border-4 border-transparent border-t-gray-900"></span>
        </span>
      )}
    </span>
  );
}
