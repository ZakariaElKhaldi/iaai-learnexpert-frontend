import React from 'react';
import Link from 'next/link';

const EnterpriseAdminDashboardPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Enterprise Admin Dashboard</h1>

      {/* Key Metrics Placeholder */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Active Employees</h3>
            <p className="text-2xl">[Count]</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Completion Rate</h3>
            <p className="text-2xl">[Percentage]%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Learning Hours</h3>
            <p className="text-2xl">[Hours]</p>
          </div>
        </div>
      </section>

      {/* Subscription Overview Placeholder */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Subscription</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p>Current Plan: [Plan Name]</p>
          <p>Used/Available Seats: [Used]/[Total]</p>
          <p>Next Billing Date: [Date]</p>
          <Link href="/enterprise/subscription" className="text-blue-500 hover:underline mt-2 inline-block">Manage Subscription</Link>
        </div>
      </section>

      {/* Recent Employee Activity Placeholder */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p>List of recent employee learning activities will be here.</p>
        </div>
      </section>

      {/* Pending Approvals Placeholder */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pending Approvals</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p>List of items requiring admin approval will be here.</p>
        </div>
      </section>

      {/* Quick Links Placeholder */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/enterprise/employees" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Manage Employees</Link>
          <Link href="/enterprise/assign-courses" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Assign Courses</Link>
          <Link href="/enterprise/reports" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">View Reports</Link>
          <Link href="/enterprise/settings" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Company Settings</Link>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseAdminDashboardPage;
