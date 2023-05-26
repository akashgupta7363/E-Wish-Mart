import React, { useState } from "react";
import styles from "../../styles/style";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { productData } from "../../static/data";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
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
  };
  return (
    <div className={`${styles.section}`}>
      <div className="hidden 800px:h-[50px] 800px:flex items-center justify-between">
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
                      <div className="w-full flex items-start py-3">
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
      </div>
    </div>
  );
};

export default Header;
