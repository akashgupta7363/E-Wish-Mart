import React from "react";
import styles from "../../../styles/style";
import Lottie from "react-lottie";
import ecom from "../../../assets/ecom0.json";
import { Link } from "react-router-dom";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ecom,
  };
  return (
    <>
      <div
        className={`flex gap-14 justify-center   relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-slate-100 ${styles.normalFlex} `}
      >
        <div className={` w-[40%] 800px:w-[40%] `}>
          <h1
            className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
          >
            Best Collection <br /> for You
          </h1>
          <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
            <h3 className="text-2xl font-semibold mb-2">
              Welcome to{" "}
              <span className="text-blue-700 font-semibold">E-WISH-MART</span>{" "}
            </h3>
            Discover the Best Products for You.
            <br /> Find Quality and brands at every Product Category.
            <br />
            Enjoy a Seamless Shopping experience with us
            <br />
            Exclusive Deals and Discounts on most of the items Await You.
          </p>
          <Link to="/products">
            <div className={`${styles.button} mt-5 `}>
              <span className="text-[#fff] font-[Poppins] text-[18px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </>
  );
};

export default Hero;
