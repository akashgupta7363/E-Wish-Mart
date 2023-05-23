import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage } from "./Routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' exact element={}/> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          {/* <Route path="/forget-password" element={<LoginPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
