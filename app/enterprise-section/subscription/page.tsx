import React from 'react';
import Link from 'next/link';

const CompanySubscriptionPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Company Subscription & Billing</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Placeholder for Current Plan Details */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Current Plan</h2>
          <p>Plan Name: [Plan Name]</p>
          <p>Used/Available Seats: [Used]/[Total]</p>
          <p>Price: [Price] / [Billing Cycle]</p>
          <p>Next Billing Date: [Date]</p>
        </div>

        {/* Options to Manage Subscription */}
        <div className="space-x-4 mb-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Upgrade/Downgrade Plan
          </button>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Adjust Seat Count
          </button>
        </div>

        {/* Links to Payment and Billing History */}
        <div className="space-x-4">
          <Link href="/enterprise/settings/payment-methods" className="text-blue-500 hover:underline">
            Manage Payment Methods
          </Link>
          <Link href="/enterprise/billing-history" className="text-blue-500 hover:underline">
            View Billing History
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanySubscriptionPage;
