import TopDoctor from '../components/TopDoctor';
import primarydocImage from "../assets/medium-shot-doctor-talking-patient.jpg";

const PrimaryCare = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-8 bg-gray-50 mt-14 space-y-16">
      
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="inline-block text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-snug bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent tracking-tight">
          Primary Care Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Comprehensive health care for you and your family.
        </p>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Box */}
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img
              src={primarydocImage}
              alt="Primary Care"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Content Box */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left bg-white p-8 rounded-2xl shadow-md transform hover:-translate-y-2 transition-all duration-300">
        <h2 className="text-3xl sm:text-4xl font-bold leading-snug bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
  What is Primary Care?
</h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Primary care involves regular checkups, preventive care, and management of common illnesses. Our experienced doctors ensure the best care for you and your family.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white p-8 rounded-2xl shadow-md space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold leading-snug bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Our Primary Care Services</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Routine Health Checkups</li>
          <li>Vaccinations & Immunizations</li>
          <li>Management of Chronic Diseases</li>
          <li>Health Screenings</li>
          <li>Children & Adult Care</li>
        </ul>
      </section>

      {/* Meet Our Doctors */}
      <section>
        <TopDoctor />
      </section>

      {/* FAQ Section */}
      <section className="bg-white p-8 rounded-2xl shadow-md space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold leading-snug bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-gray-50 p-4 rounded-lg shadow-sm cursor-pointer">
            <summary className="font-semibold text-gray-800">What is a primary care doctor?</summary>
            <p className="mt-2 text-gray-600">Primary care doctors provide general health services and preventive care to patients.</p>
          </details>
          <details className="bg-gray-50 p-4 rounded-lg shadow-sm cursor-pointer">
            <summary className="font-semibold text-gray-800">Can I get an online consultation?</summary>
            <p className="mt-2 text-gray-600">Yes, you can connect with our doctors instantly through secure video calling.</p>
          </details>
        </div>
      </section>

      {/* Contact Info */}
      <section className="text-center text-gray-700">
        <p>
          For any help, call us at <strong>+91-XXXXXXXXXX</strong> or email <strong>care@yourhospital.com</strong>
        </p>
      </section>
    </div>
  );
};

export default PrimaryCare;
