import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthModal.css";
import { useCookies } from "react-cookie";

function AuthModal({ setShowModal, isSignUp }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  let navigate = useNavigate();

  const handleClick = () => {
    console.log("authButton clicked!");
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Passwords need to match!");
        return;
      }

      const response = await axios.post(
        `http://localhost:8001/${isSignUp ? "signup" : "login"}`,
        { email, password }
      );

      setCookie("AuthToken", response.data.token);
      setCookie("UserId", response.data.userId);

      const success = response.status === 201;
      if (success && isSignUp) navigate("/onboarding");
      if (success && !isSignUp) navigate("/dashboard");

      window.location.reload();
    } catch (error) {
      console.log(error);
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
