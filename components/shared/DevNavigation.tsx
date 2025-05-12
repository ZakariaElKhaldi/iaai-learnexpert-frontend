import React from 'react';
import Link from 'next/link';

const devRoutes = [
  { path: '/login', name: 'Login' },
  { path: '/register', name: 'Register' },
  { path: '/forgot-password', name: 'Forgot Password' },
  { path: '/reset-password', name: 'Reset Password' },
  // Add other routes as they are implemented
];

const DevNavigation = () => {
  if (process.env.NODE_ENV !== 'development') {
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
