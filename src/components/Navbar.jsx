import { useState, useRef, useEffect } from 'react';
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Appcontext';
import { IoMdMenu, IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='w-full border-b border-gray-200 shadow-sm fixed top-0 bg-white z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16'>

        {/* Logo */}
        <img
          onClick={() => { navigate('/'); closeMenu(); }}
          className="w-40 sm:w-44 cursor-pointer"
          src={assets.logo}
          alt='Logo'
        />

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6 items-center font-medium'>
          <NavLink to="/" onClick={closeMenu}>
            <li className='text-gray-700 hover:text-blue-600 transition text-lg'>Home</li>
          </NavLink>
          <NavLink to="/AppointmentPage" onClick={closeMenu}>
            <li className='text-gray-700 hover:text-blue-600 transition text-lg'>Appointment</li>
          </NavLink>
          <NavLink to="/About" onClick={closeMenu}>
            <li className='text-gray-700 hover:text-blue-600 transition text-lg'>About</li>
          </NavLink>
          <NavLink to="/Doctor" onClick={closeMenu}>
            <li className='text-gray-700 hover:text-blue-600 transition text-lg'>Doctor</li>
          </NavLink>
          <NavLink to="/Content" onClick={closeMenu}>
            <li className='text-gray-700 hover:text-blue-600 transition text-lg'>Contact</li>
          </NavLink>
        </ul>

        {/* Desktop Profile Dropdown */}
        <div className='hidden md:flex items-center gap-4 relative' ref={profileRef}>
          {user ? (
            <>
              {/* Profile Image and Dropdown Icon */}
              <div className='flex items-center gap-1 cursor-pointer' onClick={() => setProfileOpen(!profileOpen)}>
                <img className='w-8 h-8 rounded-full' src={assets.profile_pic} alt='Profile' />
                <img className='w-3' src={assets.dropdown_icon} alt='Dropdown' />
              </div>

              {/* Dropdown */}
              {profileOpen && (
                <div className='absolute top-full right-0 mt-2 w-44 bg-white shadow-lg rounded-md z-50'>
                  <p
                    onClick={() => navigate('/MyProfile')}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate('/MyAppointments')}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => logout(true)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              )}
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={handleToggle}>
            {menuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className='md:hidden bg-white px-4 py-4 space-y-3 shadow-md'>
          <NavLink to="/" onClick={closeMenu}>
            <div className='text-gray-700 text-base font-semibold hover:text-blue-600'>Home</div>
          </NavLink>
          <NavLink to="/AppointmentPage" onClick={closeMenu}>
            <div className='text-gray-700 text-base font-semibold hover:text-blue-600'>Appointment</div>
          </NavLink>
          <NavLink to="/About" onClick={closeMenu}>
            <div className='text-gray-700 text-base font-semibold hover:text-blue-600'>About</div>
          </NavLink>
          <NavLink to="/Doctor" onClick={closeMenu}>
            <div className='text-gray-700 text-base font-semibold hover:text-blue-600'>Doctor</div>
          </NavLink>
          <NavLink to="/Content" onClick={closeMenu}>
            <div className='text-gray-700 text-base font-semibold hover:text-blue-600'>Contact</div>
          </NavLink>

          {
            user ? (
              <>
                <hr />
                <div className="flex flex-col gap-2">
                  <p onClick={() => { navigate('/MyProfile'); closeMenu(); }} className="cursor-pointer hover:text-black">My Profile</p>
                  <p onClick={() => { navigate('/MyAppointments'); closeMenu(); }} className="cursor-pointer hover:text-black">My Appointments</p>
                  <p onClick={() => { logout(true); closeMenu(); }} className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </>
            ) : (
              <button
                onClick={() => { navigate("/login"); closeMenu(); }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
              >
                Login
              </button>
            )
          }
        </div>
      )}
    </nav>
  );
};

export default Navbar;
