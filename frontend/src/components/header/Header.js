import React, { useState } from "react";
import styles from "../../styles/style";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { categoriesData, productData } from "../../static/data";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Navbar from "./Navbar.js";
import DropDown from "./DropDown.js";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = (activeHeading) => {
  const [active, setActive] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  const handleSearchChange = (e) => {
    e.preventDefault();
    const term = e.target.value;
    setSearchTerm(term);
    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
    window.addEventListener("scroll", () => {
      if (window.screenY > 70) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  };
  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px]  800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img className="800px:w-[150px] mt-4" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product.."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            ></input>
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-100 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((data, index) => {
                    const d = data.name;
                    const Product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${Product_name}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={data.image_Url[0].url}
                            className="w-[40px] h-[40px] mr-[10px] "
                          />
                          <h1>{data.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          <div className={`${styles.button}`}>
            <Link to="\seller">
              <h1 className="text-[#fff] flex items-center">
                {" "}
                Become Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          {/* categories- */}
          <div>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md `}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => {
                  setDropDown(!dropDown);
                }}
              />
              {dropDown && (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              )}
            </div>
          </div>
          {/* navItems */}
          <div className={`${styles.normalFlex} `}>
            <Navbar active={activeHeading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
