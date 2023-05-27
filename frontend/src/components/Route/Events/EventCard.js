import React from "react";
import styles from "../../../styles/style";
import CountDown from "./CountDown.js";

const EventCard = ({ active }) => {
  return (
    <div
      className={`w-full block bg-white rounded-lg lg:flex p-2 ${
        active ? "unset" : "mb-12"
      }`}
    >
      <div className="w-full lg:-w[50%] m-auto ">
        <img
          src="https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg"
          alt=""
        />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={styles.productTitle}>Iphone 14pro max 8/256gb</h2>
        <p>
          ROG Cetra in-ear gaming headphones with Active Noise Cancellation
          (ANC), 10mm ASUS Essence drivers and USB-C connector for PC, mobile
          and Nintendo Switch Active Noise Cancellation technology eliminates
          environmental noise for immersive gaming experiences anywhere. Large,
          10mm ASUS Essence drivers deliver incredibly strong bass and optimized
          gaming audio. An ergonomic design, three sizes of ear gels and fins,
          and a pair of foam ear tips ensure a secure and comfortable fit. USB-C
          connector provides multiplatform support for mobile phones, PCs, Mac
          and Nintendo Switch.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              149$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Robotos">
              99$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {" "}
            120 sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
