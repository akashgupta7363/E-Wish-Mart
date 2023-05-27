import React from "react";
import logo from "../../../assets/logo1.png";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { footerProductLinks } from "../../../static/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white ">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Suscribe</span> us for get news
          <br />
          events and offers
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Entr your email..."
            className="text-gray-800 sm:w-72 w:full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2  focus:outline-none "
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white w-full md:w-auto focus:outline-none">
            {" "}
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 pb-6 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            className="-ml-6 w-[180px]"
            src={logo}
            style={{ filter: "brightness(0) invert(1)" }}
            alt=""
          />
          <br />
          <p className="-mt-8 ">Enjoy a Seamless Shopping experience with us</p>
          <div className="flex items-center mt-[15px]">
            <a href="https://www.facebook.com/ag939367" target="_blank">
              <AiOutlineFacebook size={25} className="cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/ig_akash_gupta_/"
              target="_blank"
            >
              <AiOutlineInstagram
                size={25}
                className="cursor-pointer ml-[15px]"
              />
            </a>
            <a href="https://twitter.com/Akash_Gupta_7" target="_blank">
              <AiOutlineTwitter
                size={25}
                className="cursor-pointer ml-[15px]"
              />
            </a>
            <a href="https://github.com/akashgupta7363" target="_blank">
              <AiOutlineGithub size={25} className="cursor-pointer ml-[15px]" />{" "}
            </a>
          </div>
        </ul>
        <ul className="text-center sm:text-start ">
          <h1 className="mb-1 font-semibold ">Company</h1>
          {footerProductLinks.map((link) => (
            <li
              key={link.name}
              className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
