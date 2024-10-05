import React from 'react';
import Navbar from './components/Navbar';
import About  from "./pages/About";
import Appointment from './pages/Appointment';
import  Content  from "./pages/Content";
import  Doctor  from "./pages/Doctor"; // Corrected spelling here
import Home  from "./pages/Home";
import MyAppointments from "./pages/MyAppointments";
import  MyProfile from "./pages/MyProfile";
import  Login  from "./pages/Login"; 
import  {Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='w-9/12 mx-auto '>
    
      <Navbar />
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Content' element={<Content />} />
        <Route path='/Doctor' element={<Doctor />} /> 
        <Route path ='/doctors/:speciality' element={<Doctor/>}/>
   
        <Route path='/Login' element={<Login />} /> {/* Added this */}
        <Route path='/MyAppointments' element={<MyAppointments />} />
        <Route path='/MyProfile' element={<MyProfile />} />
        <Route path='/appointment/:docId' element={<Appointment/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
};

export default App;
