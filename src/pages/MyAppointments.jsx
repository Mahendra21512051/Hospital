
// import { useContext } from 'react';
// import { Appcontext } from '../context/Appcontext';

// const MyAppointments = () => {
//   const { doctors } = useContext(Appcontext);
//   const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;


//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   async function payNow() {
//     const res = await loadRazorpayScript();
//     if (!res) {
//       alert("Razorpay SDK failed to load. Are you online?");
//       return;
//     }

//     const response = await fetch("http://localhost:5000/order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         amount: 50000, // Amount in paisa = ₹500.00
//         currency: "INR",
//         receipt: "receipt#1",
//         notes: {},
//       }),
//     });

//     const order = await response.json();

//     const options = {
//       key: razorpayKey, // keep this in .env
//       amount: order.amount,
//       currency: order.currency,
//       name: "Doctor Appointment",
//       description: "Consultation Fee",
//       order_id: order.id,
//       handler: async (response) => {
//         const validationRes = await fetch("http://localhost:5000/order/validate", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(response),
//         });

//         const data = await validationRes.json();
//         alert("Payment successful! 🎉 Payment ID: " + data.paymentId);
//       },
//       prefill: {
//         name: "Mahendra Kumar Maury",
//         email: "mahendramaury420@gmail.com",
//         contact: "9555642486",
//       },
//       theme: {
//         color: "#1e40af",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">My Appointments</h2>
//       <div className="space-y-6">
//         {doctors.slice(0, 2).map((item, index) => (
//           <div key={index} className="p-4 bg-white rounded-lg shadow-md flex space-x-4">
//             <div className="w-32 h-32">
//               <img
//                 src={item.image}
//                 alt="Doctor"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-xl font-semibold">{item.name}</h3>
//               <p className="text-sm text-gray-600">{item.speciality}</p>
//               <p className="font-bold mt-2">Address:</p>
//               <p>{item.address.line1}</p>
//               <p>{item.address.line2}</p>
//               <p className="mt-4">
//                 <span className="font-bold">Date & Time:</span> 25 July 2024 | 8:30 PM
//               </p>
//             </div>
//             <div className="flex flex-col space-y-2">
//               <button
//                 onClick={payNow}
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//               >
//                 Pay Online
//               </button>
//               <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
//                 Cancel Appointment
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyAppointments;


import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/Appcontext";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const MyAppointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/appointment/getAppointment", {
          userId: user?.data?.user?._id,
        });
        setAppointments(res.data.appointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    if (user?.data?.user?._id) fetchAppointments();
  }, [user]);

  const cancelAppointment = async (appointmentId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to cancel this appointment?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, cancel it!',
    });

    if (result.isConfirmed) {
      try {
        // Call API to delete appointment
        await axios.delete(`http://localhost:5000/api/appointment/deleteAppointment/${appointmentId}`);
        
        // Remove the appointment from local state (UI update)
        setAppointments(prev => prev.filter(item => item._id !== appointmentId));

        // SweetAlert popup after success
        Swal.fire(
          'Cancelled!',
          'Your appointment has been cancelled.',
          'success'
        );
      } catch (error) {
        console.error("Error cancelling the appointment:", error);
        toast.error("Failed to cancel appointment");
      }
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const payNow = async (amount = 50000) => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency: "INR", receipt: "receipt#1", notes: {} }),
    });

    const order = await response.json();

    const options = {
      key: razorpayKey,
      amount: order.amount,
      currency: order.currency,
      name: "Doctor Appointment",
      description: "Consultation Fee",
      order_id: order.id,
      handler: async (response) => {
        const validationRes = await fetch("http://localhost:5000/order/validate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });

        const data = await validationRes.json();
        alert("Payment successful! Payment ID: " + data.paymentId);
      },
      prefill: {
        name: user?.data?.user?.name || "User",
        email: user?.data?.user?.email || "user@example.com",
        contact: "9999999999",
      },
      theme: { color: "#1e40af" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-6 mt-20">
      <h2 className="text-2xl font-bold mb-6 gradient-heading">My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <div className="space-y-6">
          {appointments.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md flex space-x-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.doctorName}</h3>
                <p className="text-sm text-gray-600">{item.speciality}</p>
                <p className="mt-2">
                  <span className="font-bold">Date:</span> {item.appointmentDate}
                </p>
                <p>
                  <span className="font-bold">Time:</span> {item.appointmentTime}
                </p>
                <p>
                  <span className="font-bold">Fees:</span> ₹{item.fees}
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => payNow(item.fees * 100)}
                  className="bg-blue-600 text-white px-4 py-2 rounded gradient-bg"
                >
                  Pay Online
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => cancelAppointment(item._id)}
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
