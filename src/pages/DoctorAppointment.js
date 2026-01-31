import { useEffect, useState, useCallback } from "react";
import axios from "axios";

function DoctorAppointment() {
  const [appointments, setAppointments] = useState([]);
  const doctorEmail = localStorage.getItem("doctorEmail");

  const loadAppointments = useCallback(async () => {
    if (!doctorEmail) return;

    const res = await axios.get(`https://telehealth-backend-4sqr.onrender.com/doctor-appointments/${doctorEmail}`);
    setAppointments(res.data);
  }, [doctorEmail]);

  useEffect(() => {
    loadAppointments();
  }, [loadAppointments]);

  const updateStatus = async (appointment, newStatus) => {
    if (!appointment.id) {
      alert("Appointment ID missing! Rebook appointment.");
      return;
    }

    await axios.post("https://telehealth-backend-4sqr.onrender.com/update-appointment-status", {
      id: appointment.id,
      status: newStatus
    });

    alert("Status Updated Successfully");
    loadAppointments();
  };

  return (
    <div className="symptoms-page">
      <h2>🩺 My Appointments</h2>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Date</th>
            <th>Specialization</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map(a => (
            <tr key={a.id}>
              <td>{a.patientName}</td>
              <td>{a.date}</td>
              <td>{a.specialization}</td>

              <td style={{ color: a.status === "Accepted" ? "green" : a.status === "Rejected" ? "red" : "orange" }}>
                {a.status}
              </td>

              <td>
                <select value={a.status} onChange={(e) => updateStatus(a, e.target.value)}>
                  <option>Pending</option>
                  <option>Accepted</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default DoctorAppointment;
