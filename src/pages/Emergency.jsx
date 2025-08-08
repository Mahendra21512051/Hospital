import emergencyImage from "../assets/Vaishali_Emergency_1_8452c4d7fb.jpg";
import EmergencyPdf from "../assets/First_Aid_Advice.pdf";
import EmergencyPdf1 from "../assets/Recognizing_Stroke_Symptoms.pdf";
import image1 from "../assets/doc1.png";
import image2 from "../assets/doc2.png";
import image3 from "../assets/doc3.png";
import image4 from "../assets/doc4.png";



const Emergency = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 text-gray-800 p-6 pt-24">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-96 rounded-3xl shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${emergencyImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-start p-10 text-white">
          <h1 className="text-5xl font-extrabold mb-4 leading-snug bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">24/7 Emergency Services</h1>
          <a
            href="tel:1234567890"
            className="bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 transition px-6 py-3 text-lg rounded-lg font-bold shadow-md"
          >
            📞 Call Now — 123-456-7890
          </a>
        </div>
      </div>

      {/* Main Section */}
      <section className="mt-14 grid md:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-10">
          <div>
            <h2 className="text-3xl font-semibold mb-2 leading-snug bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Overview</h2>
            <p className="text-lg leading-relaxed">
              Our Emergency Department provides immediate care to patients of all ages with any medical emergency. We are equipped with state-of-the-art facilities and a skilled team for any critical situation.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-2 leading-snug bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Key Services</h2>
            <ul className="grid grid-cols-2 gap-2 text-lg">
              <li>🚑 Ambulance Service</li>
              <li>🩸 Trauma Care</li>
              <li>❤️ Cardiac Emergencies</li>
              <li>👶 Pediatric Care</li>
              <li>🏥 Critical Surgeries</li>
              <li>🧠 Neurological Support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-2 leading-snug bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li>24/7 Availability</li>
              <li>Highly Experienced Staff</li>
              <li>Advanced Life-Saving Equipment</li>
              <li>Rapid Response Team</li>
              <li>Clean & Modern Infrastructure</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-200 to-cyan-100 hover:from-blue-300 hover:to-cyan-200 p-4 rounded-lg border-l-4 border-blue-600 italic shadow-md">
            “They saved my life during a cardiac emergency. Forever grateful!” — John B
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-2 leading-snug bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Testimonials</h2>
            <p className="text-lg">“Excellent care during a critical emergency. Highly recommend.”</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 leading-snug bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Emergency Contact</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full border rounded px-4 py-2 focus:outline-red-600" />
              <input type="text" placeholder="Contact Number" className="w-full border rounded px-4 py-2 focus:outline-red-600" />
              <textarea placeholder="Description of Emergency" className="w-full border rounded px-4 py-2 focus:outline-red-600"></textarea>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white py-2 rounded font-semibold">
                🚑 Request Ambulance
              </button>
            </form>
          </div>

          {/* Tips */}
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
            <h2 className="text-xl font-semibold mb-3 leading-snug bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Emergency Tips</h2>
            <ul className="space-y-2 text-blue-700">
              <li>
                ➕ <a href={EmergencyPdf} target="_blank" rel="noopener noreferrer" className="underline">First Aid Advice (PDF)</a>
              </li>
              <li>
                🧠 <a href={EmergencyPdf1} target="_blank" rel="noopener noreferrer" className="underline">Stroke Symptoms (PDF)</a>
              </li>
            </ul>
          </div>

          {/* Staff Avatars */}
          <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
            <h2 className="text-xl font-semibold mb-3 leading-snug bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Our Emergency Team</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <img src={image1} alt="Doctor" className="w-20 h-20 rounded-full mx-auto" />
                <p className="mt-2">Dr. Kumar</p>
              </div>
              <div className="text-center">
                <img src={image2} alt="Nurse" className="w-20 h-20 rounded-full mx-auto" />
                <p className="mt-2">Nurse Priya</p>
              </div>
              <div className="text-center">
                <img src={image3} alt="Doctor" className="w-20 h-20 rounded-full mx-auto" />
                <p className="mt-2">Dr. Mehta</p>
              </div>
              <div className="text-center">
                <img src={image4} alt="Nurse" className="w-20 h-20 rounded-full mx-auto" />
                <p className="mt-2">Nurse Asha</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;