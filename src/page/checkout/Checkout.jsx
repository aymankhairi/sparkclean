import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../css/checkout.css";
export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;
  const [paid, setPaid] = useState(false);
  const billing = location.state?.billing || "monthly";
  const handleFakePayment = () => {
    setPaid(true);
    setTimeout(() => {
      navigate("/success", { state: { plan } });
    }, 1800);
  };
  if (!plan) {
    return (
      <div className="checkout-empty">
        <h2>No plan selected</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }
  return (
    <div className="checkout-page">
      <div className="checkout-glow"></div>
      <div className="checkout-card">
        <div className="checkout-header">
          <h1>Secure Checkout</h1>
          <p>Complete your booking in seconds</p>
        </div>
        <div className="plan-box">
          <h2>{plan.name}</h2>
          <p>{billing === "monthly" ? "Monthly Plan" : "Yearly Plan"}</p>
          <p>{plan.desc}</p>
          <div className="price">
            ${billing === "monthly" ? plan.monthly : plan.yearly}/
            {billing === "monthly" ? "month" : "year"}
          </div>
        </div>
        <div className="features">
          {plan.features.map((f, i) => (
            <div key={i} className="feature-item">
              ✓ {f}
            </div>
          ))}
        </div>
        {!paid ? (
          <button className="pay-btn" onClick={handleFakePayment}>
            Pay Now
          </button>
        ) : (
          <div className="processing">Processing secure payment...</div>
        )}
        <div className="secure-note">🔒 Secure mock payment for demo</div>
      </div>
    </div>
  );
}
