import React from 'react';

const ForgotPasswordPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
        {/* Placeholder for Forgot Password Form */}
        <p className="text-center">Forgot password form goes here.</p>
        {/* Link to Login */}
        <div className="text-center">
          <a href="/login" className="text-blue-500 hover:underline">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
