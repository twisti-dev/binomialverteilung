'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
    });

    if (ref.current) {
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className="mermaid mb-4" ref={ref}>
      {chart}
    </div>
  );
}
