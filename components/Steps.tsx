import React from 'react';

interface StepProps {
  title: string;
  children: React.ReactNode;
}

export function Step({ title, children }: StepProps) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
        <div className="w-3 h-3 rounded-full bg-white"></div>
      </div>
      <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 last:hidden"></div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 mt-0">{title}</h4>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Steps({ children }: { children: React.ReactNode }) {
  return <div className="mb-6">{children}</div>;
}
