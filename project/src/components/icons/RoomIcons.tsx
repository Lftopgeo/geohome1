import React from 'react';

interface RoomIconProps {
  className?: string;
  size?: number;
}

export const LivingRoomIcon = ({ className = '', size = 24 }: RoomIconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="6" width="16" height="14" rx="2" />
    <path d="M8 6v-1" />
    <path d="M16 6v-1" />
    <path d="M12 12h4" />
  </svg>
);

export const BedroomIcon = ({ className = '', size = 24 }: RoomIconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="8" width="16" height="12" rx="2" />
    <path d="M6 15h12" />
    <path d="M8 8v-2" />
    <path d="M16 8v-2" />
  </svg>
);

export const KitchenIcon = ({ className = '', size = 24 }: RoomIconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <line x1="8" y1="4" x2="8" y2="20" />
    <line x1="12" y1="7" x2="16" y2="7" />
    <line x1="12" y1="11" x2="16" y2="11" />
    <line x1="12" y1="15" x2="16" y2="15" />
  </svg>
);

export const BathroomIcon = ({ className = '', size = 24 }: RoomIconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <circle cx="8" cy="8" r="1.5" />
    <path d="M14 4v6" />
    <path d="M14 7h4" />
    <path d="M6 14h4" />
  </svg>
);

export const OfficeIcon = ({ className = '', size = 24 }: RoomIconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="8" y="10" width="8" height="6" />
    <line x1="12" y1="4" x2="12" y2="10" />
  </svg>
);

export const DiningRoomIcon = ({ className = '', size = 24 }: RoomIconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <circle cx="12" cy="12" r="4" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

export const BalconyIcon = ({ className = '', size = 24 }: RoomIconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="8" y1="8" x2="8" y2="20" />
    <line x1="16" y1="8" x2="16" y2="20" />
  </svg>
);

export const LaundryIcon = ({ className = '', size = 24 }: RoomIconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 10v4" />
    <path d="M10 12h4" />
  </svg>
);