import React from 'react';

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex">
      {/* Potential Sidebar */}
      {/* <aside className="w-64 bg-gray-100 p-4">Sidebar Content</aside> */}
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
};

export default DashboardLayout;
