import React from "react";
import { useState } from "react";
import "./AuthModal.css";

function AuthModal({ setShowModal, isSignUp }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    console.log("authButton clicked!");
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Passwords need to match");
      }
      console.log("make db request");
    } catch {
      console.log(error);
    } finally {
      console.log("");
    }
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-modal">
          <div className="close-icon" onClick={handleClick}>
            x
          </div>
          <h2>{isSignUp ? "Create Account" : "Sign in"}</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="email"
              name="email"
              id="email"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              id="password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isSignUp && (
              <input
                type="password-check"
                placeholder="confirm password"
                name="password-check"
                id="password-check"
                required={true}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}
            <input className="secondary-button" type="submit" />
            <p>{error}</p>
            <hr />
            <h2>GET THE APP!</h2>
          </form>
        </div>
      </div>
    </>
  );
}

export default AuthModal;
