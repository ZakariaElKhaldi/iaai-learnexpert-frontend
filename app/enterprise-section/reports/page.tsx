import React from 'react';

const CompanyReportsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Company Reports & Analytics</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Placeholder for Reports and Analytics */}
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overall Stats</h2>
            <div className="bg-gray-100 p-4 rounded">
              <p>Overall company learning statistics will be displayed here (e.g., total hours, completion rate).</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Course Reports</h2>
            <div className="bg-gray-100 p-4 rounded">
              <p>Course-specific reports will be displayed here (e.g., enrollment and completion per course).</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Employee Reports</h2>
            <div className="bg-gray-100 p-4 rounded">
              <p>Employee-specific reports will be displayed here (e.g., courses enrolled, progress per employee).</p>
            </div>
          </section>

          {/* Placeholder for Filters and Export */}
          <div className="flex justify-end gap-4">
            <button className="bg-gray-300 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-400">
              Apply Filters
            </button>
            <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600">
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyReportsPage;
