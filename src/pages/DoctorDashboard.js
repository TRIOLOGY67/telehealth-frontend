import { useNavigate } from "react-router-dom";

function DoctorDashboard() {
  const nav = useNavigate();

  return (
    <div className="dashboard-container">
      
      {/* Header */}
      <div className="dashboard-header">
        <h2 className="dashboard-title">Doctor Dashboard</h2>
        <button className="logout-btn" onClick={() => nav("/")}>Logout</button>
      </div>

      {/* Cards */}
      <div className="dashboard-cards">
        <div className="card-box">
          Today's Patients
          <span>8</span>
        </div>
        <div className="card-box">
          Total Patients
          <span>120</span>
        </div>
        <div className="card-box">
          Appointments Pending
          <span>4</span>
        </div>
      </div>

      {/* Patient List */}
      <h3 style={{ marginTop: "20px" }}>Patient Appointments</h3>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Issue</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ravi Kumar</td>
            <td>Fever</td>
            <td>2026-02-10</td>
            <td>
              <button className="btn">Approve</button>
            </td>
          </tr>
          <tr>
            <td>Sita</td>
            <td>Chest Pain</td>
            <td>2026-02-11</td>
            <td>
              <button className="btn">Approve</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default DoctorDashboard;
