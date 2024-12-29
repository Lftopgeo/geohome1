import React from 'react';

interface BathroomIconProps {
  className?: string;
  size?: number;
}

export function BathroomIcon({ className = '', size = 24 }: BathroomIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      {/* Base container */}
      <rect x="3" y="3" width="18" height="18" rx="2" />
      
      {/* Shower area */}
      <path d="M14 3v6" />
      <path d="M14 7h4" />
      <circle cx="16" cy="7" r="1" />
      
      {/* Sink */}
      <rect x="5" y="12" width="6" height="3" rx="1" />
      <path d="M8 15v2" />
      
      {/* Toilet */}
      <path d="M16 12h3v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5z" />
      <path d="M17 12v-2" />
    </svg>
  );
}