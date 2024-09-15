import { useEffect } from "react";
import { Link } from "react-router-dom";
import RatingStar from "../../components/RatingStar";
// import ProductCards from "./ProductCards";

const SingleProducts = () => {
  // const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="section__container bg-primary-light ">
        <h2 className="section__header capitalize">Shop Page</h2>
        <div className="section__subheader space-x-2 ">
          <span className="hover:text-primary">
            <Link to={"/"}>home</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">
            <Link to={"/shop"}>shop</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">Product name</span>
        </div>
      </section>
      <section className="section__container">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          {/* product image */}
          <div className="md:w-1/2 w-full">
            <img
              className="rounded-md w-full h-auto"
              src="https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4">Product Name</h3>
            <p className="text-xl text-primary mb-4">
              $100 <span>$130</span>
            </p>
            <p>This is an product description</p>

            <div>
              <p>
                <strong>Category:</strong> accessories
              </p>
              <p>
                <strong>Color:</strong> beige
              </p>
              <div className="flex gap-2 items-center">
                <strong>Rating:</strong>
                <div className="pt-[7px]">
                  <RatingStar ratings={"4"} />
                </div>
              </div>
            </div>
            <button className="mt-6 rounded-md px-6 py-3 bg-primary text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProducts;
