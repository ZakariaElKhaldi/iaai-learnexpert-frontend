import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">LearnExpert Connect</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            The ultimate platform connecting learners with industry experts for personalized guidance and comprehensive learning
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/login" className="bg-white text-blue-700 py-2 px-6 rounded-lg text-lg font-medium hover:bg-gray-100">
              Login
            </Link>
            <Link href="/register" className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-medium hover:bg-blue-600 border border-white">
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LearnExpert</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Expert-Led Learning</h3>
              <p className="text-gray-600">Learn from industry professionals with hands-on experience in their fields</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Interactive Courses</h3>
              <p className="text-gray-600">Engage with interactive content designed for maximum retention and practical application</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">1-on-1 Consultations</h3>
              <p className="text-gray-600">Book personalized sessions with experts to solve specific challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to accelerate your learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students and professionals advancing their careers through LearnExpert Connect.
          </p>
          <Link href="/register" className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-blue-700">
            Start Learning Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-6">
          <p className="text-center">&copy; 2023 LearnExpert Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
