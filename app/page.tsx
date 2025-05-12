import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to LearnExpert Connect</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        Your premier platform for integrated online learning and personalized expert guidance.
      </p>
      <div className="space-x-4">
        <Link href="/login" className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600">
          Login
        </Link>
        <Link href="/register" className="border border-blue-500 text-blue-500 py-2 px-6 rounded-lg text-lg hover:bg-blue-50">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
