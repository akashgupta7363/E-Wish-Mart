import React from "react";
import styles from "../../../styles/style";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden  sm:block bg-white
    py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://thumbs.dreamstime.com/b/puma-logo-sports-run-shoes-animals-clothes-152641516.jpg"
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://thumbs.dreamstime.com/b/gucci-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-gucci-logo-editorial-illustrative-white-208329393.jpg"
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://thumbs.dreamstime.com/b/gucci-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-gucci-logo-editorial-illustrative-white-208329393.jpg"
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://thumbs.dreamstime.com/b/puma-logo-sports-run-shoes-animals-clothes-152641516.jpg"
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.freepnglogos.com/uploads/walmart-logo-24.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
