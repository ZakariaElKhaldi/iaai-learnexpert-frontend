import React from 'react';

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        {/* Placeholder for Registration Form */}
        <p className="text-center">Registration form goes here.</p>
        {/* Link to Login */}
        <div className="text-center">
          <span className="mx-2">Already have an account?</span>
          <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
