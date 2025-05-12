import React from 'react';

const CourseCatalogPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Course Catalog</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search Bar Placeholder */}
        <input
          type="text"
          placeholder="Search courses..."
          className="flex-grow p-2 border rounded"
        />
        {/* Filters Placeholder */}
        <div className="flex gap-4">
          <select className="p-2 border rounded">
            <option>Category</option>
            {/* Category options */}
          </select>
          <select className="p-2 border rounded">
            <option>Skill Level</option>
            {/* Skill Level options */}
          </select>
          {/* More filters */}
        </div>
      </div>

      {/* Course Listings Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for Course Cards */}
        <div className="bg-gray-100 p-4 rounded">
          <p>Course cards will be displayed here.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p>Course cards will be displayed here.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p>Course cards will be displayed here.</p>
        </div>
      </div>

      {/* Pagination Placeholder */}
      <div className="mt-8 text-center">
        <p>Pagination goes here.</p>
      </div>
    </div>
  );
};

export default CourseCatalogPage;
