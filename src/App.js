import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import PatientSignup from "./pages/PatientSignup";
import DoctorSignup from "./pages/DoctorSignup";
import Login from "./pages/Login";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import MapPage from "./pages/Map";
import InbuiltChatbot from "./pages/InbuiltChatbot";
import SymptomsReport from "./pages/SymptomsReport";

import SmartSymptomChecker from "./pages/SmartSymptomChecker";

import BookAppointment from "./pages/BookAppointment";
import DoctorAppointment from "./pages/DoctorAppointment";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/patient-signup" element={<PatientSignup />} />
        <Route path="/doctor-signup" element={<DoctorSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/chatbot" element={<InbuiltChatbot />} />
        <Route path="/symptoms-report" element={<SymptomsReport />} />
        <Route path="/smart-symptom-checker" element={<SmartSymptomChecker />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
<Route path="/doctor-appointments" element={<DoctorAppointment />} />





      </Routes>
    </Router>
  );
}

export default App;
