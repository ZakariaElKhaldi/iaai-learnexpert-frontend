import React from 'react';

const BillingHistoryPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Billing History</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Placeholder for List of Transactions/Invoices */}
        <div className="space-y-4">
          {/* Example Transaction Entry */}
          <div className="border p-4 rounded flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">[Date]</h2>
              <p className="text-sm text-gray-600">Description: [Description]</p>
              <p className="text-sm text-gray-600">Amount: [Amount] [Currency]</p>
              <p className="text-sm text-gray-600">Status: [Status]</p>
            </div>
            <div>
              <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 text-sm">
                Download Invoice (PDF)
              </button>
            </div>
          </div>
          {/* More transaction entries */}
          <div className="text-center text-gray-500">
            <p>Billing history will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingHistoryPage;
