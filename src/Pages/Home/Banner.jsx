import { Link } from "react-router-dom";
import headerImage from "../../assets/header1.png";
const Banner = () => {
  return (
    <div className="section__container bg-extra-light  min-h-[550px] rounded-b-3xl grid grid-cols-2 gap-10 items-center shadow-md">
      <div className="header__content z-30">
        <h4>UP TO 20% Discount on</h4>
        <h1>Girl{"'"}s Fashion</h1>
        <p>
          Discover the latest trends and express your unique style with our
          Women{"'"}s Fashion website.Explore a curated collection of clothing,
          accessories, and footwear that caters to every taste and occasion.
        </p>
        <button className="btn">
          <Link to={"/shop"}>EXPLORE NOW</Link>
        </button>
      </div>
      <div className="header__image">
        <img
          src={headerImage}
          alt="header-image"
          className="lg:h-[550px] object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Banner;
