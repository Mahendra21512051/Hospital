
// import Navbar from './components/Navbar';
// import About  from "./pages/About";
// import Appointment from './pages/Appointment';
// import Home from "./pages/Home"
// import  Content  from "./pages/Content";
// import  Doctor  from "./pages/Doctor";
// import AddDoctors from './pages/AddDoctors';
// import AppointmentHome  from "./pages/AppointmentHome";
// import MyAppointments from "./pages/MyAppointments";
// import  MyProfile from "./pages/MyProfile";
// import  Login  from "./pages/Login"; 
// import  {Routes,Route } from 'react-router-dom';
// import Footer from './components/Footer';
// import Address from './pages/Address';
// import PrimaryCare from "./pages/PrimaryCare"
// import Emergency from './pages/Emergency';
// import AdminLogin from './pages/AdminPage/AdminLogin';


// const App = () => {
//   return (
//     <div className='w-9/12 mx-auto '>
    
//       <Navbar />
      
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/AppointmentPage' element={<AppointmentHome />} />
//         <Route path='/About' element={<About />} />
//         <Route path='/Content' element={<Content />} />
//         <Route path='/Doctor' element={<Doctor />} /> 
//         <Route path="/AddDoctors" element={<AddDoctors/>}/>
//         <Route path ='/doctors/:speciality' element={<Doctor/>}/>
//         <Route path='/Login' element={<Login />} /> 
//         <Route path='/Address' element={<Address />} /> 
//         <Route path='/MyAppointments' element={<MyAppointments />} />
//         <Route path='/PrimaryCare' element={<PrimaryCare />} />
//         <Route path='/Emergency' element={<Emergency/>}/>
//         <Route path='/MyProfile' element={<MyProfile />} />
//         <Route path='/appointment/:docId' element={<Appointment/>}/>
//       </Routes>
      
//       <Footer/>
      
//     </div>
//   );
// };

// export default App;




import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateAdminRoute from './components/PrivateAdminRoute';

import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';
import Doctor from './pages/Doctor';
import Appointment from './pages/Appointment';
import AppointmentHome from './pages/AppointmentHome';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login';
import Address from './pages/Address';
import PrimaryCare from './pages/PrimaryCare';
import Emergency from './pages/Emergency';

import AdminLogin from './pages/AdminPage/AdminLogin';
import AdminDashboard from './pages/AdminPage/AdminDashboard';
import AddDoctors from './pages/AdminPage/AddDoctors';
import AdminAllDoctors from './pages/AdminPage/AdminAllDoctors';
import AdminAllAppointment from './pages/AdminPage/AdminAllAppoinment';

const App = () => {
  const location = useLocation();
  const isAdminRoute =
    location.pathname.startsWith('/admin') || location.pathname === '/AddDoctors';

  return (
    <div className="w-full">
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/AppointmentPage" element={<AppointmentHome />} />
        <Route path="/About" element={<About />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/doctors/:speciality" element={<Doctor />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Address" element={<Address />} />
        <Route path="/MyAppointments" element={<MyAppointments />} />
        <Route path="/PrimaryCare" element={<PrimaryCare />} />
        <Route path="/Emergency" element={<Emergency />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/appointment/:docId" element={<Appointment />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Dashboard and Nested Routes */}
        <Route
          path="/admin"
          element={
            <PrivateAdminRoute>
              <AdminDashboard />
            </PrivateAdminRoute>
          }
        >
          <Route path="dashboard" element={<AdminAllDoctors />} />
          <Route path="alldoctors" element={<AdminAllDoctors />} />
          <Route path="addDoctors" element={<AddDoctors />} />
          <Route path="adminAllAppointmnet" element={<AdminAllAppointment/>} />
          <Route path="addDoctors/:id" element={<AddDoctors />} />
          
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
