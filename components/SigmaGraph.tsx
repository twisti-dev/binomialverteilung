'use client';

import React from 'react';

export function SigmaGraph() {
  return (
    <div className="p-4 mb-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-700 dark:text-gray-200 mb-1">
          Sigma-Regeln Visualisierung
        </p>
        
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          {/* Bell curve placeholder */}
          <path
            d="M 40 170 Q 100 50, 200 30 Q 300 50, 360 170"
            className="stroke-primary fill-green-100 dark:fill-green-900/50"
            strokeWidth="2"
          />
          
          {/* Axes */}
          <line
            x1="40"
            y1="170"
            x2="360"
            y2="170"
            className="stroke-gray-700 dark:stroke-gray-300"
            strokeWidth="1.5"
          />
          
          {/* Labels */}
          <text
            x="200"
            y="190"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300 text-xs"
          >
            μ
          </text>
          <text
            x="140"
            y="190"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300 text-xs"
          >
            μ-σ
          </text>
          <text
            x="260"
            y="190"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300 text-xs"
          >
            μ+σ
          </text>
        </svg>
        
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <ul className="space-y-2">
            <li>68,3% der Werte liegen innerhalb von ±1σ</li>
            <li>95,4% der Werte liegen innerhalb von ±2σ</li>
            <li>99,7% der Werte liegen innerhalb von ±3σ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
