import { useState } from "react";
import "../styles.css";

function SymptomsReport() {
  const symptomsList = [
    "Fever",
    "Cough",
    "Cold",
    "Headache",
    "Body Pain",
    "Sore Throat",
    "Vomiting",
    "Diarrhea",
    "Stomach Pain",
    "Chest Pain",
    "Shortness of Breath",
    "Fatigue",
    "Dizziness",
    "Nausea",
    "Loss of Appetite",
    "Skin Rash",
    "Itching",
    "High Blood Pressure",
    "Low Blood Pressure",
    "Joint Pain",
    "Back Pain",
    "Allergy",
    "Burning Urination",
    "Frequent Urination",
    "Weight Loss",
    "Weight Gain"
  ];

  const diseaseMap = {
    Fever: "Viral Fever, Dengue, Malaria, COVID-19, Typhoid",
    Cough: "Common Cold, Bronchitis, Asthma, COVID-19",
    Cold: "Common Cold, Sinusitis, Allergic Rhinitis",
    Headache: "Migraine, Stress, Dehydration, Sinusitis",
    "Body Pain": "Viral Fever, Dengue, Arthritis",
    "Sore Throat": "Tonsillitis, Throat Infection, Common Cold",
    Vomiting: "Food Poisoning, Gastritis, Infection",
    Diarrhea: "Food Poisoning, Infection, IBS",
    "Stomach Pain": "Gastritis, Ulcer, Appendicitis",
    "Chest Pain": "Heart Disease, Muscle Strain, Acid Reflux",
    "Shortness of Breath": "Asthma, COVID-19, Heart Problems",
    Fatigue: "Anemia, Thyroid Issues, Infection",
    Dizziness: "Low BP, Dehydration, Vertigo",
    Nausea: "Pregnancy, Infection, Gastritis",
    "Loss of Appetite": "Infection, Depression, Liver Disease",
    "Skin Rash": "Allergy, Chickenpox, Fungal Infection",
    Itching: "Allergy, Skin Infection, Liver Disease",
    "High Blood Pressure": "Hypertension, Heart Disease",
    "Low Blood Pressure": "Dehydration, Heart Problems",
    "Joint Pain": "Arthritis, Dengue, Injury",
    "Back Pain": "Muscle Strain, Kidney Issues, Injury",
    Allergy: "Dust Allergy, Food Allergy, Skin Allergy",
    "Burning Urination": "Urinary Tract Infection (UTI)",
    "Frequent Urination": "Diabetes, UTI",
    "Weight Loss": "Diabetes, Cancer, Thyroid Issues",
    "Weight Gain": "Hormonal Issues, Thyroid, Lifestyle"
  };

  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState("");

  const toggleSymptom = (symptom) => {
    if (selected.includes(symptom)) {
      setSelected(selected.filter((s) => s !== symptom));
    } else {
      setSelected([...selected, symptom]);
    }
  };

  const analyzeSymptoms = () => {
    let diseases = new Set();

    selected.forEach((sym) => {
      if (diseaseMap[sym]) {
        diseaseMap[sym].split(", ").forEach((d) => diseases.add(d));
      }
    });

    if (diseases.size === 0) {
      setResult("No symptoms selected.");
    } else {
      setResult(
        "Possible related conditions:\n" +
          [...diseases].join(", ") +
          "\n\n⚠️ This is not a diagnosis. Please consult a doctor."
      );
    }
  };

  return (
    <div className="symptoms-page">
      <h2>🩺 Send Symptoms & Get Possible Conditions</h2>

      <p className="warning-text">
        ⚠️ This tool gives general health guidance. Always consult a doctor for diagnosis.
      </p>

      <div className="symptoms-grid">
        {symptomsList.map((s, i) => (
          <div
            key={i}
            className={`symptom-box ${selected.includes(s) ? "selected" : ""}`}
            onClick={() => toggleSymptom(s)}
          >
            {s}
          </div>
        ))}
      </div>

      <button className="btn" onClick={analyzeSymptoms}>
        Analyze Symptoms
      </button>

      {result && <pre className="result-box">{result}</pre>}
    </div>
  );
}

export default SymptomsReport;
