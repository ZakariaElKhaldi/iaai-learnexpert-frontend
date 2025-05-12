import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {/* Placeholder for Login Form */}
        <p className="text-center">Login form goes here.</p>
        {/* Links for Forgot Password and Sign Up */}
        <div className="text-center">
          <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
          <span className="mx-2">|</span>
          <a href="/register" className="text-blue-500 hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
