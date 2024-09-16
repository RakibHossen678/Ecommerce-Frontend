import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartModal from "../Pages/shop/CartModal";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCarOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCarOpen(!isCartOpen);
  };
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className=" ">
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className={`fixed z-[1000] inset-0 bg-black bg-opacity-80 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`fixed z-[1001] inset-y-0 left-0 bg-white w-2/3 max-w-xs h-full shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="nav__logo pt-8 px-10">
              <Link to={"/"}>
                StyleBask <span>.</span>
              </Link>
            </div>
            <ul className=" pt-10 px-10 space-y-7">
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
          </div>
        </div>
      )}
      <nav>
        <button onClick={handleMenuToggle} className=" lg:hidden block">
          <i className="ri-menu-2-line text-2xl pr-2"></i>
        </button>
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
              <i className="ri-login-circle-line "></i>
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
