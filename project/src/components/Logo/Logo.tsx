import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/home-vistoria-logo.png" 
        alt="Home Vistoria" 
        className="h-10"
      />
    </Link>
  );
}