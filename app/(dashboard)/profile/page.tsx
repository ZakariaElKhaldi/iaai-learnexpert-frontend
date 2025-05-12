import React from 'react';

const UserProfilePage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Placeholder for User Information Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="fullName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" disabled />
            <p className="mt-1 text-sm text-gray-500">Email cannot be changed.</p>
          </div>
          {/* Placeholder for Avatar Upload */}
          <div className="md:col-span-2">
            <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar</label>
            <input type="file" id="avatar" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>
          {/* Placeholder for other profile fields (bio, title, etc.) */}
          <div className="md:col-span-2">
             <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
             <textarea id="bio" rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
        </div>

        {/* Password Change Link Placeholder */}
        <div className="mb-6">
          <a href="/settings/change-password" className="text-blue-500 hover:underline">Change Password</a>
        </div>

        {/* "Save Changes" Button Placeholder */}
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
