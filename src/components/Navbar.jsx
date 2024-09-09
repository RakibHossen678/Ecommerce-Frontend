import { Link } from "react-router-dom";

const Navbar = () => {
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
            <button className="hover:text-primary text-xl">
              <i className="ri-shopping-bag-line"></i>
              <sup className="text-sm px-1.5 text-center py-[1px] text-white rounded-3xl bg-primary">
                0
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
    </header>
  );
};

export default Navbar;
