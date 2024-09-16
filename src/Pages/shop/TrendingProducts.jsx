import { useState } from "react";
import ProductCards from "./ProductCards";
import products from "../../assets/data/products.json";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };
  return (
    <div className=" inset-0 -z-10 h-full w-full bg-primary-light bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <section className="section__container product__container ">
        <h2 className="section__header">Trending Products</h2>
        <p className="section__subheader pb-12">
          Discover the Hottest Picks: Elevate Your Style with Our Curated
          Collection of Trending Women{"'"}s Fashion Products.
        </p>

        <ProductCards products={products.slice(0, visibleProducts)} />
        <div className="product__btn">
          {visibleProducts < products.length && (
            <button className="btn " onClick={loadMoreProducts}>
              Load More
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default TrendingProducts;
