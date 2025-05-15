import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Content area */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to TeamPilot!</h1>
          <p className="text-gray-600 mb-6">This is your dashboard overview. Start managing your tasks and tracking team performance.</p>

          {/* Placeholder Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Tasks Overview</h2>
              <p className="text-gray-500">Tasks will appear here once added.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Team Info</h2>
              <p className="text-gray-500">Team stats and growth will be displayed here.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
