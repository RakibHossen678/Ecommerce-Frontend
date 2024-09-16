import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartModal from "../Pages/shop/CartModal";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setIsCarOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCarOpen(!isCartOpen);
  };
  return (
    <header className=" ">
      <nav>
        <ul className="nav__links">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="link">
            <Link to="/pages">Pages</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* logo */}
        <div className="nav__logo">
          <Link to={"/"}>
            StyleBask <span>.</span>
          </Link>
        </div>

        {/* nav icons */}
        <div className="nav__icons relative">
          <span>
            <Link to={"/search"}>
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button
              onClick={handleCartToggle}
              className="hover:text-primary text-xl"
            >
              <i className="ri-shopping-bag-line"></i>
              <sup className="text-sm px-1.5 text-center  text-white rounded-full bg-primary">
                {products.length}
              </sup>
            </button>
          </span>
          <span>
            <Link to={"/login"}>
              <i className="ri-user-line"></i>
            </Link>
          </span>
        </div>
      </nav>
      {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
        />
      )}
    </header>
  );
};

export default Navbar;
