import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Home from "./pages/Home";
import OnBoarding from "./pages/OnBoarding";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const authToken = cookies.AuthToken

  return (
    // BEM class naming convention
    // <div className="app">
    //   <Header />
    //   <TinderCards />
    //   <SwipeButtons />
    // </div>
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {authToken &&  <Route path="/dashboard" element={<Dashboard />} />}
          {authToken &&  <Route path="/onboarding" element={<OnBoarding />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
