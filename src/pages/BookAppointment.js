import { useEffect, useState } from "react";
import axios from "axios";

function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");

  // Get logged patient name
  const patientName = localStorage.getItem("userName") || "Ravi";

  useEffect(() => {
    axios.get("http://localhost:5000/doctors")
      .then(res => {
        console.log("Doctors loaded:", res.data);
        setDoctors(res.data);
      });
  }, []);

  const book = async (doctor) => {
    if (!date) {
      alert("Please select appointment date");
      return;
    }

    const appointment = {
      doctorName: doctor.name,
      doctorEmail: doctor.email,
      specialization: doctor.specialization,
      patientName: patientName,
      date: date
    };

    console.log("Sending appointment:", appointment);

    try {
      const res = await axios.post("http://localhost:5000/book-appointment", appointment);
      console.log("Server Response:", res.data);
      alert("Appointment Booked Successfully");
    } catch (err) {
      console.error("Booking failed:", err);
      alert("Booking failed");
    }
  };

  return (
    <div className="book-appointment-page">
      <h2>📅 Book Doctor Appointment</h2>

      {/* Date Picker */}
      <div className="date-picker-box">
        <input 
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)} 
        />
      </div>

      {/* Doctors List */}
      <div className="doctor-grid">
        {doctors.map((d, i) => (
          <div key={i} className="doctor-card">
            <h3>{d.name}</h3>
            <div className="specialization-badge">{d.specialization}</div>
            <p>Email: {d.email}</p>

            <button className="book-btn" onClick={() => book(d)}>
              Book Appointment
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default BookAppointment;
