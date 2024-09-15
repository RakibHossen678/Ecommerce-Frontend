import { useState } from "react";
import products from "../../assets/data/products.json";
import ProductCards from "../shop/ProductCards";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const handleSearch = () => {
    const query = searchQuery.toLocaleLowerCase();
    const filtered = products.filter(
      (products) =>
        products.name.toLocaleLowerCase().includes(query) ||
        products.description.toLocaleLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };
  return (
    <>
      <section className="section__container bg-primary-light ">
        <h2 className="section__header capitalize">Search Products</h2>
        <p className="section__subheader">
          Browse a diverse range of categories, from chic dresses to versatile
          accessories. Elevate your style today.
        </p>
      </section>

      <section className="section__container  ">
        <div className="w-full  mb-12 flex flex-col md:flex-row item-center justify-center gap-4">
          <input
            type="text"
            value={searchQuery}
            className="search_bar  w-full max-w-4xl p-2 border rounded"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products......"
          />
          <button
            onClick={handleSearch}
            className="w-full md:w-auto py-2 px-8 bg-primary text-white rounded"
          >
            Search
          </button>
        </div>
        <ProductCards products={filteredProducts} />
      </section>
    </>
  );
};

export default Search;
