import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const [data, setData] = useState({ email:"", password:"", role:"patient" });

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", data);

      if (res.data.status === "success") {
        alert("Login Success");

        // Save user details
        localStorage.setItem("userEmail", res.data.user.email);
        localStorage.setItem("userName", res.data.user.name);
        localStorage.setItem("userRole", res.data.user.role);

        // If doctor, store doctor email separately
        if (res.data.user.role === "doctor") {
          localStorage.setItem("doctorEmail", res.data.user.email);
        }

        // Redirect based on role
        if (res.data.user.role === "patient") {
          nav("/patient-dashboard");
        } else {
          nav("/doctor-appointments"); // ✅ DIRECTLY OPEN APPOINTMENTS PAGE
        }

      } else {
        alert("Invalid Credentials");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="card">
      <h2 className="title">Login</h2>

      <input className="input" name="email" placeholder="Email" onChange={handleChange}/>
      <input className="input" name="password" type="password" placeholder="Password" onChange={handleChange}/>

      <select className="input" name="role" onChange={handleChange}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>

      <button className="btn" onClick={login}>Login</button>
    </div>
  );
}

export default Login;
