import { useEffect, useState } from "react";
import productData from "../../assets/data/products.json";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";

const filter = {
  categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
  colors: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
  priceRanges: [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 and above", min: 200, max: Infinity },
  ],
};

const ShopPage = () => {
  const [products, setProducts] = useState(productData);
  const [filteredState, setFilteredState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });

  //filtering function

  const applyFilters = () => {
    let filteredProducts = productData;

    //filter by category
    if (filteredState.category && filteredState.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filteredState.category
      );
    }

    //filter by color
    if (filteredState.color && filteredState.color !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filteredState.color
      );
    }

    //filter by prices
    if (filteredState.priceRange && filteredState.priceRange !== "") {
      const [minPrice, maxPrice] = filteredState.priceRange
        .split("-")
        .map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }
    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [filteredState]);

  //clear filter
  const clearFilters = () => {
    setFilteredState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };

  return (
    <div className="inset-0 -z-10 h-full w-full bg-primary-light bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <section className="section__container bg-extra-light ">
        <h2 className="section__header capitalize">Shop Page</h2>
        <p className="section__subheader">
          Browse a diverse range of categories, from chic dresses to versatile
          accessories. Elevate your style today.
        </p>
      </section>
      <section className="section__container ">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          {/* left side */}
          <ShopFiltering
            filter={filter}
            filteredState={filteredState}
            setFilteredState={setFilteredState}
            clearFilters={clearFilters}
          />

          {/* right side */}
          <div>
            <h3 className="text-xl font-medium mb-4">
              Products Available : {products.length}
            </h3>
            <ProductCards products={products} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
