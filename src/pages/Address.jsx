

const Address = () => {
  const handleGetDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          // Replace with your hospital’s coordinates
          const hospitalLat = 26.92667391625166;
          const hospitalLng = 83.29581577505678;

          const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${hospitalLat},${hospitalLng}&travelmode=driving`;
          window.open(directionsUrl, '_blank');
        },
        (error) => {
          alert('Location access denied or unavailable. Please enable location services.',error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 mt-16">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-8">
        <h1 className="text-4xl font-bold text-blue-700">Our Location</h1>

        <p className="text-lg text-gray-700">
          You can visit or locate <strong>Bubhda Clinic</strong> using the interactive map below. We are committed to serving you with the best medical facilities.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Clinic Address</h2>
            <p className="text-gray-800 mb-2">🏥 <strong>Bubhda Clinic</strong></p>
            <p className="text-gray-800 mb-2">📍 Bubhda, Gorakhpur, Uttar Pradesh, 273001</p>
            <p className="text-gray-800 mb-2">📞 Phone: <a href="tel:+911234567890" className="text-blue-600 underline">+91 12345 67890</a></p>
            <p className="text-gray-800 mb-2">📧 Email: <a href="mailto:info@bubhdaclinic.com" className="text-blue-600 underline">info@bubhdaclinic.com</a></p>

            <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Opening Hours</h2>
            <ul className="text-gray-700">
              <li>Monday - Saturday: 8:00 AM – 8:00 PM</li>
              <li>Sunday: Emergency Only</li>
            </ul>

            <button
              onClick={handleGetDirections}
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              📍 Get Directions (From Your Location)
            </button>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1746085166367!6m8!1m7!1sHVXuR78m43UsXrQyDGuGOA!2m2!1d26.92667391625166!2d83.29581577505678!3f102.340410294481!4f-17.105157539661292!5f1.5228842531760098"
              width="100%"
              height="350"
              className="rounded-xl shadow"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bubhda Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
