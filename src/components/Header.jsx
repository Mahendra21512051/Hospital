import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='bg-blue-400 w-full rounded-lg px-4 py-6 overflow-hidden'>
      <div className='flex flex-row items-center justify-between gap-4 max-w-[1200px] mx-auto'>

        {/* Left box */}
        <div className='flex-1 flex flex-col gap-4 sm:gap-6'>
          <h1 className='text-white font-extrabold text-[22px] sm:text-[28px] md:text-[36px] leading-tight'>
            Book Appointment <br /> with Trusted <br /> Doctors
          </h1>

          <div className='flex gap-3 items-start'>
            <img className='w-14 h-8 sm:w-20 sm:h-10 mt-1' src={assets.group_profiles} alt='group profile' />
            <p className='text-white text-[12px] sm:text-sm md:text-base leading-relaxed'>
              Simply browse through our extensive list of trusted doctors, <br />
              and schedule your appointment hassle-free.
            </p>
          </div>

          <Link to='/Doctor' className='bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 font-semibold text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center gap-2 hover:bg-blue-100 transition w-fit'>
            Book Appointment
            <img className="w-4 h-4" src={assets.arrow_icon} alt='arrow icon' />
          </Link>
        </div>

        {/* Right box */}
        <div className='flex-1 flex justify-center mb-0'>
          <img className='w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] mb-0' src={assets.header_img} alt='header' />
        </div>

      </div>
    </div>
  );
};

export default Header;
