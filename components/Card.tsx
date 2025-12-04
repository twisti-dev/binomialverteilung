import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  icon?: string;
  href?: string;
  horizontal?: boolean;
  children?: React.ReactNode;
}

export function Card({ title, icon, href, horizontal = false, children }: CardProps) {
  const content = (
    <div className={`border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-primary transition-colors ${
      horizontal ? 'flex items-center gap-4' : 'block'
    }`}>
      {icon && (
        <div className="text-primary text-2xl mb-2">
          <i className={`fa fa-${icon}`}></i>
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold mb-2 mt-0">{title}</h3>
        {children && <p className="text-gray-600 dark:text-gray-400 text-sm mb-0">{children}</p>}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="no-underline">
        {content}
      </Link>
    );
  }

  return content;
}

export function CardGroup({ cols = 2, children }: { cols?: number; children: React.ReactNode }) {
  return (
    <div className={`grid gap-4 mb-6 ${cols === 2 ? 'md:grid-cols-2' : cols === 3 ? 'md:grid-cols-3' : 'grid-cols-1'}`}>
      {children}
    </div>
  );
}

export function Columns({ cols = 2, children }: { cols?: number; children: React.ReactNode }) {
  return (
    <div className={`grid gap-4 mb-6 ${cols === 2 ? 'md:grid-cols-2' : cols === 3 ? 'md:grid-cols-3' : 'grid-cols-1'}`}>
      {children}
    </div>
  );
}
