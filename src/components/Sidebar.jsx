// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h1 className="text-xl font-bold mb-8">TeamPilot</h1>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/tasks" className="hover:bg-gray-700 p-2 rounded">Tasks</Link>
        <Link to="/performance" className="hover:bg-gray-700 p-2 rounded">Performance</Link>
        <Link to="/settings" className="hover:bg-gray-700 p-2 rounded">Settings</Link>
      </nav>
    </div>
  );
}
