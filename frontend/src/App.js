import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' exact element={}/> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
