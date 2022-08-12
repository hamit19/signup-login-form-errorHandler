import React from "react";
import { Routes, Route } from "react-router-dom";
import FourOFourPage from "./pages/FourOFourPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<FourOFourPage />} />
      </Routes>
    </div>
  );
};

export default App;
