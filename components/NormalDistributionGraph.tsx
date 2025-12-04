'use client';

import React, { useState } from 'react';

export function NormalDistributionGraph() {
  const [mu, setMu] = useState(0);
  const [sigma, setSigma] = useState(1.0);

  const xMinDomain = -4;
  const xMaxDomain = 4;

  const svgXMin = 40;
  const svgXMax = 360;
  const svgYBase = 170;
  const svgYTop = 40;

  // Calculate points of the density function
  const points = [];
  const steps = 200;

  let maxY = 0;

  for (let i = 0; i <= steps; i++) {
    const x = xMinDomain + ((xMaxDomain - xMinDomain) * i) / steps;

    const y =
      (1 / (sigma * Math.sqrt(2 * Math.PI))) *
      Math.exp(-Math.pow(x - mu, 2) / (2 * sigma * sigma));

    if (y > maxY) {
      maxY = y;
    }
    points.push({ x, y });
  }

  const toSvgX = (x: number) =>
    svgXMin +
    ((x - xMinDomain) / (xMaxDomain - xMinDomain)) * (svgXMax - svgXMin);

  const toSvgY = (y: number) =>
    svgYBase - (y / maxY) * (svgYBase - svgYTop);

  const pathD =
    points
      .map((p, idx) => {
        const X = toSvgX(p.x);
        const Y = toSvgY(p.y);
        return `${idx === 0 ? 'M' : 'L'} ${X} ${Y}`;
      })
      .join(' ') +
    ` L ${svgXMax} ${svgYBase} L ${svgXMin} ${svgYBase} Z`;

  const ticks = [-3, -2, -1, 0, 1, 2, 3];

  return (
    <div className="p-4 mb-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-200 mb-1">
            Interaktive Normalverteilung – passe Mittelwert μ und Standardabweichung σ an.
          </p>
          <br />
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Aktuell: μ = {mu.toFixed(1)}, σ = {sigma.toFixed(1)}
          </p>
        </div>

        <svg viewBox="0 0 400 230" className="w-full h-auto">
          {/* Background */}
          <rect
            x={svgXMin}
            y={svgYTop}
            width={svgXMax - svgXMin}
            height={svgYBase - svgYTop}
            className="fill-gray-50 dark:fill-gray-900"
          />

          {/* Curve area */}
          <path d={pathD} className="fill-green-100 dark:fill-green-900/50" />

          {/* Curve line */}
          <path
            d={pathD}
            className="stroke-primary dark:stroke-primary-light"
            fill="none"
            strokeWidth="2"
          />

          {/* Axes */}
          <line
            x1={svgXMin}
            y1={svgYBase}
            x2={svgXMax}
            y2={svgYBase}
            className="stroke-gray-700 dark:stroke-gray-300"
            strokeWidth="1.5"
          />
          <line
            x1={svgXMin}
            y1={svgYTop}
            x2={svgXMin}
            y2={svgYBase}
            className="stroke-gray-700 dark:stroke-gray-300"
            strokeWidth="1.5"
          />

          {/* X-axis labels */}
          {ticks.map((t) => {
            const xPos = toSvgX(t);
            return (
              <g key={t}>
                <line
                  x1={xPos}
                  y1={svgYBase - 3}
                  x2={xPos}
                  y2={svgYBase + 3}
                  className="stroke-gray-700 dark:stroke-gray-300"
                  strokeWidth="1"
                />
                <text
                  x={xPos}
                  y={svgYBase + 15}
                  textAnchor="middle"
                  className="fill-gray-700 dark:fill-gray-300 text-xs"
                >
                  {t}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Controls */}
        <div className="flex flex-col gap-2">
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300 block mb-1">
              Mittelwert μ: {mu.toFixed(1)}
            </label>
            <input
              type="range"
              min="-3"
              max="3"
              step="0.1"
              value={mu}
              onChange={(e) => setMu(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300 block mb-1">
              Standardabweichung σ: {sigma.toFixed(1)}
            </label>
            <input
              type="range"
              min="0.2"
              max="2"
              step="0.1"
              value={sigma}
              onChange={(e) => setSigma(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
