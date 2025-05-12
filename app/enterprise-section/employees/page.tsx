import React from 'react';
import Link from 'next/link';

const ManageEmployeesPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Manage Employees</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Placeholder for Employee Table */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Employee List</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p>Employee table will be displayed here.</p>
          </div>
        </div>

        {/* Options to Add/Invite Employees */}
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Invite Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageEmployeesPage;
