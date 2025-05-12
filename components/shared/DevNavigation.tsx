"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const devRoutes = [
  { path: '/login', name: 'Login' },
  { path: '/register', name: 'Register' },
  { path: '/forgot-password', name: 'Forgot Password' },
  { path: '/reset-password', name: 'Reset Password' },
  { path: '/', name: 'Landing Page' }, // New Landing Page
  { path: '/dashboard', name: 'Dashboard' }, // Learner Dashboard (updated path)
  { path: '/courses', name: 'Course Catalog' }, // Course Catalog
  { path: '/courses/abc-123', name: 'Course Detail (Example)' }, // Placeholder for Course Detail
  { path: '/profile', name: 'User Profile' }, // User Profile Page
  { path: '/settings', name: 'User Settings' }, // User Settings Page
  { path: '/certificates', name: 'My Certificates' }, // My Certificates Page
  { path: '/subscriptions', name: 'My Subscriptions' }, // My Subscriptions Page
  { path: '/billing-history', name: 'Billing History' }, // Billing History Page
  { path: '/consultations', name: 'My Consultations' }, // My Consultations Page
  { path: '/consultations/request', name: 'Consultation Request' }, // Consultation Request Page
  { path: '/enterprise-section/dashboard', name: 'Enterprise Admin Dashboard' }, // Enterprise Admin Dashboard Page (updated path)
  { path: '/enterprise-section/employees', name: 'Manage Employees' }, // Manage Employees Page (updated path)
  { path: '/enterprise-section/assign-courses', name: 'Assign Courses' }, // Assign Courses Page (updated path)
  { path: '/enterprise-section/reports', name: 'Company Reports/Analytics' }, // Company Reports/Analytics Page (updated path)
  { path: '/enterprise-section/subscription', name: 'Company Subscription & Billing' }, // Company Subscription & Billing Page (updated path)
  { path: '/enterprise-section/settings', name: 'Company Settings' }, // Company Settings Page (updated path)
  // Add other routes as they are implemented
];

const DevNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'x') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded shadow-lg z-50">
      <h3 className="text-lg font-bold mb-2">Dev Navigation</h3>
      <ul>
        {devRoutes.map((route) => (
          <li key={route.path}>
            <Link href={route.path} className="hover:underline">
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevNavigation;
