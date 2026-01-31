import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorSignup() {
  const nav = useNavigate();
  const [data, setData] = useState({ name:"", email:"", password:"", specialization:"", role:"doctor" });

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const signup = async () => {
    const res = await axios.post("https://telehealth-backend-4sqr.onrender.com/signup", data);
    if (res.data.status === "exists") {
      alert("Doctor exists! Redirecting to login");
      nav("/login");
    } else {
      alert("Signup Success");
      nav("/login");
    }
  };

  return (
    <div className="card">
      <h2 className="title">Doctor Signup</h2>
      <input className="input" name="name" placeholder="Name" onChange={handleChange}/>
      <input className="input" name="email" placeholder="Email" onChange={handleChange}/>
      <input className="input" name="password" type="password" placeholder="Password" onChange={handleChange}/>
      <input className="input" name="specialization" placeholder="Specialization" onChange={handleChange}/>
      <button className="btn" onClick={signup}>Signup</button>
    </div>
  );
}

export default DoctorSignup;
