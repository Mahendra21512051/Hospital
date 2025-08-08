import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      {/* About Us Section */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 tracking-tight hover:scale-105 transition-transform duration-300">
          About Us
        </h2>

        <div className="mt-10 flex flex-col md:flex-row md:justify-center md:items-center gap-10">
  {/* Image Section */}
  <div className="w-full md:w-1/3 flex justify-center">
    <img
      src={assets.about_image}
      alt="About"
      className="w-full max-w-sm md:max-w-md h-auto rounded-lg shadow-lg object-cover transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
    />
  </div>
  {/* Additional content can go here */}



          {/* Text Content */}
          <div className="w-full md:w-1/2 px-4">
            <div className="group relative bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-105 space-y-6 text-gray-600 text-center md:text-left">
              {/* Gradient Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl z-0"></div>

              {/* Actual Content */}
              <div className="relative z-10 space-y-6">
                <p className="text-base sm:text-lg font-medium">
                  Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently.
                </p>
                <p className="text-base sm:text-lg font-medium">
                  Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service.
                </p>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 tracking-tight">Our Vision</h3>
                  <p className="text-base sm:text-lg font-medium">
                    Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 tracking-tight text-center">
          Why Choose Us
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group relative bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 relative z-10 bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 tracking-tight">EFFICIENCY</h3>
            <p className="text-gray-600 relative z-10">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          {/* Card 2 */}
          <div className="group relative bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 relative z-10 bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 tracking-tight">CONVENIENCE</h3>
            <p className="text-gray-600 relative z-10">Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          {/* Card 3 */}
          <div className="group relative bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl"></div>
            <h3 className="text-xl font-semibold  mb-2 relative z-10 bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 tracking-tight">PERSONALIZATION</h3>
            <p className="text-gray-600 relative z-10">Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
