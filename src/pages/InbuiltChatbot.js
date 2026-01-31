import { useState } from "react";
import "../styles.css";

function InbuiltChatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am your Rural Health Assistant. Ask your health doubts." }
  ]);
  const [input, setInput] = useState("");

  const botReply = (msg) => {
    msg = msg.toLowerCase();

    const responses = {
      fever: `
Home Remedies:
- Drink plenty of water
- Take rest
- Use cold compress

Medicines (OTC):
- Paracetamol (Crocin, Calpol)
- Dolo 650

If fever > 2 days, consult a doctor.
      `,

      cold: `
Home Remedies:
- Warm water
- Steam inhalation
- Ginger tea

Medicines:
- Cetirizine
- Sinarest
- Vicks Vaporub
      `,

      cough: `
Home Remedies:
- Honey with warm water
- Steam inhalation
- Avoid cold drinks

Medicines:
- Benadryl syrup
- Ambroxol syrup

Consult doctor if cough > 1 week.
      `,

      headache: `
Home Remedies:
- Rest in dark room
- Drink water
- Reduce screen time

Medicines:
- Paracetamol
- Ibuprofen (Brufen)

If severe headache, consult doctor.
      `,

      stomach: `
Home Remedies:
- Warm water
- Avoid spicy food
- Rest

Medicines:
- Meftal Spas
- Buscopan

If pain severe, go to hospital.
      `,

      diarrhea: `
Home Remedies:
- ORS solution
- Coconut water
- Eat light food

Medicines:
- ORS packets
- Loperamide (Imodium)

If diarrhea > 2 days, consult doctor.
      `,

      vomiting: `
Home Remedies:
- Ginger tea
- Small sips of water
- Rest

Medicines:
- Domperidone
- Ondansetron (only if prescribed)

Consult doctor if continuous.
      `,

      throat: `
Home Remedies:
- Salt water gargle
- Warm tea
- Avoid cold food

Medicines:
- Strepsils lozenges
- Betadine gargle
      `,

      body: `
Home Remedies:
- Rest
- Warm bath

Medicines:
- Paracetamol
- Ibuprofen
      `,

      allergy: `
Home Remedies:
- Avoid dust/pollen
- Wash face

Medicines:
- Cetirizine
- Loratadine
      `,

      acidity: `
Home Remedies:
- Avoid spicy food
- Eat small meals

Medicines:
- ENO
- Digene
- Omeprazole
      `
    };

    for (let key in responses) {
      if (msg.includes(key)) return responses[key];
    }

    return `
I am not sure about this condition.
Please book a doctor appointment or visit nearest hospital.
    `;
  };

  const sendMessage = () => {
    if (!input) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: botReply(input) };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <h2>🤖 Rural Health Chatbot</h2>

      <p className="warning-text">
        ⚠️ This chatbot gives general guidance. For serious conditions, consult a doctor.
      </p>

      <div className="chat-box">
        {messages.map((m, i) => (
          <div key={i} className={m.sender === "user" ? "user-msg" : "bot-msg"}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="chat-input-box">
        <input
          className="chat-input"
          placeholder="Ask your health doubt (fever, cough, headache)..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="send-btn" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default InbuiltChatbot;
