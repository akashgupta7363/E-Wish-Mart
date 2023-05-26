import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/style";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");

  return (
    <>
      <div className="w-full h-[375px] bg-white rounded-lg shadow-sm p-2 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            className="w-11/12 h-[170px] object-contain "
            alt=""
          />
        </Link>
        <Link to="/">
          {" "}
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
          <div className="flex">
            <AiFillStar
              className={`mr-2 corsor-pointer`}
              color="#f6BA00"
              size={20}
            />
            <AiFillStar
              className={`mr-2 corsor-pointer`}
              color="#f6BA00"
              size={20}
            />
            <AiFillStar
              className={`mr-2 corsor-pointer`}
              color="#f6BA00"
              size={20}
            />
            <AiFillStar
              className={`mr-2 corsor-pointer`}
              color="#f6BA00"
              size={20}
            />
            <AiOutlineStar
              className={`mr-2 corsor-pointer`}
              color="#f6BA00"
              size={20}
            />
          </div>
          <div className="py-2 flex items-center justify-between ">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                {data.price === 0 ? data.price : data.discount_price}$
              </h5>
              <h4 className={`${styles.price}`}>
                {data.price ? data.price + "$" : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data.total_sell} sold
            </span>
          </div>
        </Link>

        {/* side options */}
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-1 top-2"
              color={click ? "red" : "#333"}
              onClick={() => setClick(!click)}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-1 top-2"
              color={click ? "red" : "#333"}
              onClick={() => setClick(!click)}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-1 top-11"
            color={"#333"}
            onClick={() => setOpen(!open)}
            title="Quick View"
          />
          <AiOutlineShoppingCart
            size={22}
            className="cursor-pointer absolute right-1 top-20"
            color={"#444"}
            onClick={() => setOpen(!open)}
            title="Add to cart"
          />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
