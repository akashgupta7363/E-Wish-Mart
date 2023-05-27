import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import styles from "../styles/style";
import { useSearchParams } from "react-router-dom";
import { categoriesData, productData } from "../static/data";
import ProductCard from "../components/Route/ProductCard/ProductCard";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");

  const [data, setData] = useState([]);
  useEffect(() => {
    if (categoryData === null) {
      const d =
        productData && productData.sort((a, b) => b.total_sell - a.total_sell);
      setData(d);
    } else {
      const d =
        productData && productData.filter((a) => a.category === categoryData);
      setData(d);
    }
  });
  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={styles.section}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2  md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((d, index) => <ProductCard key={index} data={d} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="w-full text-center pb-[110px] text-[20px]">
            No Products Found!
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default ProductPage;
