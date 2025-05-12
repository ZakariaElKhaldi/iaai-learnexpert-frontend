import React from 'react';
import Link from 'next/link';

const MyCertificatesPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">My Certificates</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Placeholder for List of Certificates */}
        <div className="space-y-4">
          {/* Example Certificate Entry */}
          <div className="border p-4 rounded flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Course Title Placeholder</h2>
              <p className="text-sm text-gray-600">Issued on: [Date Issued]</p>
              <p className="text-sm text-gray-600">Certificate ID: [UID]</p>
            </div>
            <div className="space-x-2">
              <button className="bg-gray-300 text-gray-800 py-1 px-3 rounded hover:bg-gray-400 text-sm">
                View Certificate
              </button>
              <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 text-sm">
                Download PDF
              </button>
            </div>
          </div>
          {/* More certificate entries */}
          <div className="text-center text-gray-500">
            <p>Certificate listings will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCertificatesPage;
