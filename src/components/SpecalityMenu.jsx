import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecalityMenu = () => {
  return (
    <div id="speciality" className='mt-10 flex flex-col items-center px-4 sm:px-8'>
     <h2 className="text-3xl font-semibold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 tracking-tight">
  Find Speciality
</h2>

      

      {/* Horizontal scroll container */}
      <div className='w-full overflow-x-auto no-scrollbar'>
        <div
          className='
            flex gap-6 py-2 min-w-full justify-start
            sm:justify-center  /* Center on desktop */
          '
        >
          {specialityData.map((item, index) => (
            <Link
              key={index}
              to={`/doctors/${item.speciality}`}
              onClick={() => scrollTo(0, 0)}
              className='
                flex flex-col items-center 
                min-w-[90px] sm:min-w-[110px]
              '
            >
              <img
                src={item.image}
                alt={item.speciality}
                className='w-16 sm:w-20 h-16 sm:h-20 object-contain mb-2 transition-all duration-300 ease-in-out 
                hover:-translate-y-2 cursor-pointer'
              />
              <p className='text-sm sm:text-base font-medium text-gray-800 text-center'>
                {item.speciality}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecalityMenu;
