import React from 'react';
import Link from 'next/link';

const MySubscriptionsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">My Subscription</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Placeholder for Current Plan Details */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Current Plan</h2>
          <p>Plan Name: [Plan Name]</p>
          <p>Price: [Price] / [Billing Cycle]</p>
          <p>Next Billing Date: [Date]</p>
        </div>

        {/* Options to Manage Subscription */}
        <div className="space-x-4 mb-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Change Plan
          </button>
          <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600">
            Cancel Subscription
          </button>
        </div>

        {/* Links to Payment and Billing History */}
        <div className="space-x-4">
          <Link href="/settings/payment-method" className="text-blue-500 hover:underline">
            Update Payment Method
          </Link>
          <Link href="/billing-history" className="text-blue-500 hover:underline">
            Billing History
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MySubscriptionsPage;
