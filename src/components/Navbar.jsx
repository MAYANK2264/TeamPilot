import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <div className="text-lg font-semibold">TeamPilot Dashboard</div>
      <div className="flex gap-4 items-center">
        <button
          onClick={handleLogout}
          className="text-sm text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
