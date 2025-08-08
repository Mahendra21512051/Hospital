
import { useNavigate } from 'react-router-dom';
import TopDoctor from '../components/TopDoctor';
import Homeimage from "../assets/HomeBaground.png";
import PrimaryImage from "../assets/Primary_Image.png";
import AppoinmentImage from "../assets/calendar_12938933.png";
import EmergencyImage from "../assets/hospital-bed.png";
import LocationImage from "../assets/location.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 mt-20">
      {/* Hero Section */}
      <div
        className="
          relative bg-cover bg-center
          h-[60vh] sm:h-[60vh] md:h-screen
          flex flex-col md:flex-row items-center justify-center px-4"
        style={{ backgroundImage: `url(${Homeimage})` }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0  bg-opacity-50 z-0"></div> */}

        {/* Hero Text */}
        <div className="text-center text-white md:text-left md:w-1/2 w-full z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug text-black">
            We Care for Your Health Every Moment
          </h1>
          <p className=" text-base sm:text-lg mb-6 text-black">
            Your health is our top priority.
          </p>
          <button
            className="bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white font-semibold py-2 px-6 rounded transition-colors duration-300"
            onClick={() => navigate('/Doctor')}
          >
            Book Appointment
          </button>

        </div>

        {/* Optional Right Section (currently empty) */}
        <div className="w-full md:w-1/2 hidden md:block z-10"></div>
      </div>

      {/* Welcome Heading */}
      <div className="w-full text-center mt-12 sm:mt-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 tracking-tight">
          Welcome to Buddha Clinic
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-10 bg-white text-center">
        {/* Primary Case */}
        <div
          className="cursor-pointer hover:shadow-lg transition duration-300 rounded-lg p-4"
          onClick={() => navigate("/PrimaryCare")}
        >
          <img src={PrimaryImage} alt="Primary Case" className="w-16 h-16 mx-auto mb-2 object-contain" />
          <h2 className="text-lg sm:text-xl font-semibold text-blue-700">Primary Case</h2>
          <p className="text-gray-600 text-sm">We care about your health.</p>
        </div>

        {/* Emergency Case */}
        <div
          className="cursor-pointer hover:shadow-lg transition duration-300 rounded-lg p-4"
          onClick={() => navigate("/Emergency")}
        >
          <img src={EmergencyImage} alt="Emergency Case" className="w-16 h-16 mx-auto mb-2 object-contain" />
          <h2 className="text-lg sm:text-xl font-semibold text-red-600">Emergency Case</h2>
          <p className="text-gray-600 text-sm">Quick response in critical situations.</p>
        </div>

        {/* Online Appointment */}
        <div
          className="cursor-pointer hover:shadow-lg transition duration-300 rounded-lg p-4"
          onClick={() => navigate("/Doctor")}
        >
          <img src={AppoinmentImage} alt="Online Appointment" className="w-16 h-16 mx-auto mb-2 object-contain" />
          <h2 className="text-lg sm:text-xl font-semibold text-green-700">Online Appointment</h2>
          <p className="text-gray-600 text-sm">Book consultations from anywhere.</p>
        </div>

        {/* Location */}
        <div
          className="cursor-pointer hover:shadow-lg transition duration-300 rounded-lg p-4"
          onClick={() => navigate("/Address")}
        >
          <img src={LocationImage} alt="Location & Direction" className="w-16 h-16 mx-auto mb-2 object-contain" />
          <h2 className="text-lg sm:text-xl font-semibold text-purple-700">Location & Direction</h2>
          <p className="text-gray-600 text-sm">Find Buddha Clinic easily on Google Maps.</p>
        </div>
      </div>

      {/* Doctors Section */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 tracking-tight">
        Meet Our Doctors
      </h1>
      <div className="px-4 sm:px-8 mb-10">
        <TopDoctor />
      </div>
    </div>
  );
};

export default Home;
