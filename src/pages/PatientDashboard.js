import { useNavigate } from "react-router-dom";

function PatientDashboard() {
  const nav = useNavigate();

  return (
    <div className="full-dashboard">
      
      {/* Top Header */}
      <div className="dashboard-top">
        <h2>Patient Dashboard</h2>
        <button className="logout-btn" onClick={() => nav("/")}>Logout</button>
      </div>

      <h3>Welcome to Rural Telehealth Platform</h3>
      <p>Select a service below to continue</p>

      {/* Feature Cards */}
      <div className="feature-grid">
        
        <div className="feature-card" onClick={() => nav("/chatbot")}>
          💬 Chat with Bot
        </div>

        <div className="feature-card" onClick={() => nav("/symptoms-report")}>
          📝 Disease Symptom Guide 
        </div>
        <div className="feature-card" onClick={() => nav("/smart-symptom-checker")}>
🧠 Smart Symptom Checker
</div>


        <div className="feature-card" onClick={() => nav("/map")}>
          🏥 Nearest Hospitals & Medical Shops
        </div>

        <div className="feature-card" onClick={() => nav("/book-appointment")}>
          📅 Book Appointment
        </div>

        <div className="feature-card" onClick={() => nav("/appointment-history")}>
          📜 Appointment History
        </div>

      </div>

    </div>
  );
}

export default PatientDashboard;
