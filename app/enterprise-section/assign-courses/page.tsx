import React from 'react';

const AssignCoursesPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Assign Courses</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Placeholder for Employee Selection */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Select Employees</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p>Employee selection UI goes here (e.g., checkbox list, search).</p>
          </div>
        </div>

        {/* Placeholder for Course Selection */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Select Courses</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p>Course selection UI goes here (e.g., course catalog browsing).</p>
          </div>
        </div>

        {/* "Assign Courses" Button Placeholder */}
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Assign Selected Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignCoursesPage;
