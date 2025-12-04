'use client';

import React, { useState } from 'react';

interface TabProps {
  title: string;
  children: React.ReactNode;
}

export function Tab({ children }: TabProps) {
  return <>{children}</>;
}

interface TabsProps {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
}

export function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];

  return (
    <div className="mb-6">
      <div className="flex border-b border-gray-200 dark:border-gray-800 mb-4">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === idx
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className="prose prose-sm dark:prose-invert max-w-none">
        {tabs[activeTab]}
      </div>
    </div>
  );
}
