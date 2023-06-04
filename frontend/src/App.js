import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  HomePage,
  ProductPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
} from "./Routes";
import ActivationPage from "./pages/ActivationPage.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";

import { loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";
import Lottie from "react-lottie";
import loaderanim from "./assets/loadi.json";

export default function App() {
  const { loading } = useSelector((state) => state.user);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderanim,
  };
  useEffect(() => {
    Store.dispatch(loadUser());
    // axios
    //   .get(`${server}/user/getuser`, { withCredentials: true })
    //   .then((res) => {
    //     toast.success(res.data.message);
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message);
    //   });
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-[90vh] flex items-center justify-center">
          <div className=" w-3/6 h-1/2 ">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage />} />
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
      )}
    </>
  );
}
