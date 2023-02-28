import React, { useState } from "react";
import Nav from "../components/Nav";
import "./Home.css";
import AuthModal from "../components/AuthModal";

function Home() {

  const authToken = false;
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  

  const handleClick = () => {
    console.log("primary button clicked");
    setShowModal(true); 
    setIsSignUp(true);
  };

  return (
    <>
      <div className="overlay">
        <Nav minimal={false} authToken={authToken} setShowModal={setShowModal} showModal={showModal} setIsSignUp={setIsSignUp} />
        <div className="home">
          <p className="primary-title">Swipe Right</p>
          <button className="primaryButton" onClick={handleClick}>
            {authToken ? "Sign Out" : "Create Account"}
          </button>

          {showModal && <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>}
        </div>
      </div>
    </>
  );
}

export default Home;
