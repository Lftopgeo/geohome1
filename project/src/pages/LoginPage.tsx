import React, { useState } from 'react';
import { LoginForm } from '../components/Auth/LoginForm';
import { Logo } from '../components/Auth/Logo';

export function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Background Image */}
      <div className="hidden lg:block lg:w-2/3 relative">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          alt="Interior Design"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Darker overlay */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Logo className="w-96" />
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/3 bg-gray-900 p-8 flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          <div className="mb-8">
            <Logo className="w-48 lg:hidden mb-8" />
            <h1 className="text-3xl font-bold text-white mb-2">Bem-vindo</h1>
            <p className="text-gray-400">Faça login para continuar</p>
          </div>

          <LoginForm />
        </div>

        <div className="text-center text-gray-500 text-sm mt-8">
          GeoVistoria © 2024
        </div>
      </div>
    </div>
  );
}