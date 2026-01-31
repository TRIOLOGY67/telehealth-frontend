import { useNavigate } from "react-router-dom";

function Landing() {
  const nav = useNavigate();

  return (
    <div className="card">
      <h2 className="title">Rural Telehealth Platform</h2>
      <p>Select your role to continue</p>

      <button className="btn" onClick={() => nav("/patient-signup")}>
        I am a Patient
      </button>

      <button className="btn" onClick={() => nav("/doctor-signup")} style={{marginTop:10}}>
        I am a Doctor
      </button>
    </div>
  );
}

export default Landing;
