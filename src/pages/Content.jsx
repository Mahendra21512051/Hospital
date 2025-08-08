import { assets } from '../assets/assets';

const Content = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      {/* Contact Us Header */}
      <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 tracking-tight text-center hover:scale-105 transition-transform duration-300">
        Contact Us
      </h2>

      {/* Main Content */}
      <div className="mt-10 flex flex-col md:flex-row md:justify-center md:items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={assets.contact_image}
            alt="Contact Us"
            className="w-full max-w-sm md:max-w-md h-auto rounded-lg shadow-lg object-cover transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 px-4">
          <div className="group relative bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-105 space-y-6 text-gray-600 text-center md:text-left">
            {/* Gradient Hover Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl z-0"></div>

            {/* Actual Content */}
            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Our Office</h3>
                <p className="text-base sm:text-lg font-medium">
                  Aandnagar, Maharajganj<br />
                  Uttar Pradesh
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Contact</h3>
                <p className="text-base sm:text-lg font-medium">
                  Tel: +91 9555642486<br />
                  Email: mahendramaury420@gmail.com
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Careers at Edoro Technologies LLP</h3>
                <p className="text-base sm:text-lg font-medium">
                  Learn more about our teams and job openings.
                </p>
                <button className="mt-4 text-gray-600 font-bold border border-black cursor-pointer hover:bg-black hover:text-white duration-500 py-3 px-4 rounded">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
