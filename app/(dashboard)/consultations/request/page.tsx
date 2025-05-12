import React from 'react';

const ConsultationRequestPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Request Consultation</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Placeholder for Consultation Request Form */}
        <div className="space-y-4">
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Service Type</label>
            <select id="serviceType" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option>Select a service type</option>
              {/* Service type options */}
            </select>
          </div>
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-700">Request Details</label>
            <textarea id="details" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
          {/* Placeholder for preferred consultant and availability */}
          <div>
            <p>Preferred consultant and availability inputs go here.</p>
          </div>
        </div>

        {/* "Submit Request" Button Placeholder */}
        <div className="flex justify-end mt-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationRequestPage;
