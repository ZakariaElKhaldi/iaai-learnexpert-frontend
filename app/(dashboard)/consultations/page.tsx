import React from 'react';
import Link from 'next/link';

const MyConsultationsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">My Consultations</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Placeholder for Tabs/Sections */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Sessions</h2>
          {/* Placeholder for list of upcoming sessions */}
          <div className="bg-gray-100 p-4 rounded">
            <p>Upcoming consultation sessions will be listed here.</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Pending Requests</h2>
          {/* Placeholder for list of pending requests */}
          <div className="bg-gray-100 p-4 rounded">
            <p>Pending consultation requests will be listed here.</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Past Sessions</h2>
          {/* Placeholder for history of completed sessions */}
          <div className="bg-gray-100 p-4 rounded">
            <p>Past consultation sessions will be listed here.</p>
          </div>
        </div>

        {/* Link to Request Consultation */}
        <div className="mt-6 text-center">
          <Link href="/consultations/request" className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Request New Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyConsultationsPage;
