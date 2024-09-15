import Banner from "./Banner";
import Categories from "./Categories";
import HeroSection from "./HeroSection";
import TrendingProducts from "../shop/TrendingProducts";
import Deals from "./Deals";
import PromoBanner from "./PromoBanner";
import Blogs from "../blogs/Blogs";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <TrendingProducts />
      <Deals />
      <PromoBanner />
      <Blogs />
    </>
  );
};

export default Home;
