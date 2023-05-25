import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage } from "./Routes";
import ActivationPage from "./pages/ActivationPage.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { server } from "./server";

export default function App() {
  useEffect(() => {
    axios
      .get(`${server}/user/getuser`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  });
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

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </>
  );
}
