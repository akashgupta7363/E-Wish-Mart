import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage } from "./Routes";
import ActivationPage from "./pages/ActivationPage.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' exact element={}/> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
          {/* <Route path="/forget-password" element={<LoginPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
