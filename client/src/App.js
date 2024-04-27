import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignInPage from "./components/auth/SignInPage";
import SignUpPage from "./components/auth/SignUpPage";
import BuyerLandingPage from "./components/buyer/BuyerLandingPage";
import BuyerLandingPageAfterLogin from "./components/buyer/BuyerLandingPageAfterLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuyerLandingPage />} />
        <Route
          path="/BuyerLandingPageAfterLogin"
          element={<BuyerLandingPageAfterLogin />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
