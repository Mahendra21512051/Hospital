import { useState, useEffect } from "react";
import axios from "axios";

const AdminAllAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  const handleFetchAppointment = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/appointment/getAllAppointment");
      if (response.data.success) {
        console.log("its response data", response);
        setAppointments(response.data.data); // `data` contains the array of appointments
      }
    } catch (error) {
      console.error("Failed to fetch the appointments", error);
    }
  };

  useEffect(() => {
    handleFetchAppointment();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Appointments</h2>
      {appointments.length > 0 ? (
        appointments.map((appt, index) => (
          <div key={index} className="border p-4 rounded-lg shadow mb-4">
            <p><strong>Patient Name:</strong> {appt.userName}</p>
            <p><strong>Doctor Name:</strong> {appt.doctorName}</p>
            <p><strong>Date:</strong> {appt.appointmentDate}</p>
            <p><strong>Time:</strong> {appt.appointmentTime}</p>
            <p><strong>fees:</strong> {appt.fees}</p>
            <p><strong>Booking time: </strong>{new Date(appt.createdAt).toLocaleString()}</p>

          </div>
        ))
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
};

export default AdminAllAppointment;
