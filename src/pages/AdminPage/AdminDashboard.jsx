import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top Navbar */}
      <nav className="bg-white shadow-md px-4 py-4 flex justify-between items-center md:px-6">
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-2xl font-bold text-blue-600">Admin Panel</h1>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
        >
          Logout
        </button>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar for Desktop & Slide-in Mobile */}
        <aside
          className={`fixed z-40 inset-y-0 left-0 w-64 bg-white shadow-md p-6 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `font-medium ${
                  isActive ? 'text-blue-600 underline' : 'text-gray-700'
                }`
              }
              onClick={() => setIsSidebarOpen(false)}
            >
              All Doctors
            </NavLink>
            <NavLink
              to="addDoctors"
              className={({ isActive }) =>
                `font-medium ${
                  isActive ? 'text-blue-600 underline' : 'text-gray-700'
                }`
              }
              onClick={() => setIsSidebarOpen(false)}
            >
              Add Doctor
            </NavLink>
            <NavLink
              to="adminAllAppointmnet"
              className={({ isActive }) =>
                `font-medium ${
                  isActive ? 'text-blue-600 underline' : 'text-gray-700'
                }`
              }
              onClick={() => setIsSidebarOpen(false)}
            >
              Appointments
            </NavLink>
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 mt-16 md:mt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
