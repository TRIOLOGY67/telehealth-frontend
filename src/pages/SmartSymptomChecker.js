import { useState } from "react";
import "../styles.css";

function SmartSymptomChecker() {

  // Symptom → Disease Knowledge Base
  const symptomDiseaseDB = [
    { symptoms: ["fever", "cough", "cold"], disease: "Common Cold / Viral Fever" },
    { symptoms: ["fever", "cough", "breathing"], disease: "COVID-19" },
    { symptoms: ["fever", "headache", "body pain"], disease: "Dengue / Viral Infection" },
    { symptoms: ["stomach pain", "vomiting", "diarrhea"], disease: "Food Poisoning / Gastritis" },
    { symptoms: ["chest pain", "breathing", "fatigue"], disease: "Heart Disease / Cardiac Issue" },
    { symptoms: ["burning urination", "frequent urination"], disease: "Urinary Tract Infection (UTI)" },
    { symptoms: ["weight loss", "frequent urination", "thirst"], disease: "Diabetes" },
    { symptoms: ["joint pain", "back pain", "stiffness"], disease: "Arthritis / Muscle Strain" },
    { symptoms: ["skin rash", "itching"], disease: "Allergy / Skin Infection" },
    { symptoms: ["headache", "nausea", "dizziness"], disease: "Migraine" },
    { symptoms: ["sore throat", "cough"], disease: "Throat Infection / Tonsillitis" },
    { symptoms: ["fatigue", "weight gain", "hair fall"], disease: "Thyroid Disorder" },
    { symptoms: ["vomiting", "nausea", "loss of appetite"], disease: "Gastritis / Infection" },
    { symptoms: ["diarrhea", "cramps"], disease: "Food Poisoning / IBS" },
    { symptoms: ["shortness of breath", "wheezing"], disease: "Asthma" },
    { symptoms: ["chest pain", "acid reflux"], disease: "Acidity / GERD" },
    { symptoms: ["fever", "rash", "joint pain"], disease: "Chikungunya" },
    { symptoms: ["fever", "bleeding", "rash"], disease: "Severe Dengue (Consult Doctor Immediately)" },
    { symptoms: ["memory loss", "confusion"], disease: "Neurological Disorder (Consult Doctor)" },
    { symptoms: ["vision problems", "headache"], disease: "Eye Strain / Migraine" },
    { symptoms: ["ear pain", "hearing loss"], disease: "Ear Infection" },
    { symptoms: ["cough", "blood"], disease: "Tuberculosis (TB) - Consult Doctor Immediately" },
    { symptoms: ["fatigue", "pale skin"], disease: "Anemia" },
    { symptoms: ["weight gain", "swelling"], disease: "Hormonal Disorder" }
  ];

  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState("");

  const analyzeTextSymptoms = () => {
    const input = textInput.toLowerCase();
    let possibleDiseases = new Set();

    symptomDiseaseDB.forEach((item) => {
      let matchCount = 0;
      item.symptoms.forEach((s) => {
        if (input.includes(s)) matchCount++;
      });

      if (matchCount >= 1) {
        possibleDiseases.add(item.disease);
      }
    });

    if (possibleDiseases.size === 0) {
      setResult("No matching condition found. Please consult a doctor.");
    } else {
      setResult(
        "Possible related conditions:\n" +
        [...possibleDiseases].join(", ") +
        "\n\n⚠️ This is NOT a diagnosis. Please consult a doctor."
      );
    }
  };

  return (
    <div className="symptoms-page">
      <h2>🤖 Smart Symptom Checker</h2>

      <p className="warning-text">
        ⚠️ This tool provides general health guidance. It is NOT a medical diagnosis.
      </p>

      <div className="text-symptom-box">
        <textarea
          className="symptom-text-input"
          placeholder="Enter your symptoms (e.g., fever, cough, stomach pain, dizziness, chest pain)"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        ></textarea>

        <button className="btn" onClick={analyzeTextSymptoms}>
          Analyze Symptoms
        </button>
      </div>

      {result && <pre className="result-box">{result}</pre>}
    </div>
  );
}

export default SmartSymptomChecker;
