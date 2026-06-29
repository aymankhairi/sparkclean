import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../css/success.css";

export default function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);
  return (
    <div className="success-page">
      <div className="success-glow"></div>
      <div className={`success-card ${show ? "show" : ""}`}>
        <div className="check-icon">✔</div>
        <h1>Payment Successful</h1>
        <p className="subtitle">Your booking has been confirmed successfully</p>
        {plan && (
          <div className="plan-summary">
            <h3>{plan.name}</h3>
            <p>{plan.desc}</p>
            <div className="price">${plan.monthly}</div>
          </div>
        )}
        <div className="actions">
          <button onClick={() => navigate("/")}>Back to Home</button>
          <button onClick={() => navigate("/services")}>View Services</button>
        </div>
        <div className="footer-note">You will receive confirmation shortly</div>
      </div>
    </div>
  );
}
