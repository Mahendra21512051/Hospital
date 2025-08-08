import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        
        {/* Left Section - Logo and Description */}
        <div className="flex flex-col gap-4 lg:w-1/3">
          <img className="w-44 cursor-pointer" src={assets.logo} alt="logo" />
          <p className="text-gray-600 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Middle Section - Company Links */}
        <div className="flex flex-col gap-3 lg:w-1/4">
          <h1 className="text-lg font-semibold text-gray-800">Company</h1>
          <p className="text-gray-600 cursor-pointer hover:text-blue-500">Home</p>
          <p className="text-gray-600 cursor-pointer hover:text-blue-500">About Us</p>
          <p className="text-gray-600 cursor-pointer hover:text-blue-500">Delivery</p>
          <p className="text-gray-600 cursor-pointer hover:text-blue-500">Privacy Policy</p>
        </div>

        {/* Right Section - Contact Information */}
        <div className="flex flex-col gap-3 lg:w-1/4">
          <h1 className="text-lg font-semibold text-gray-800">Get in Touch</h1>
          <p className="text-gray-600">+0-000-000-000</p>
          <p className="text-gray-600">greatstackdev@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
