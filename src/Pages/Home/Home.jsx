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
      <div className="absolute inset-0 -z-10 h-full w-full bg-primary-light bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="mb-8">
        <Banner />
      </div>
      <Categories />
      <TrendingProducts />
      <Deals />
      <PromoBanner />
      <Blogs />
    </>
  );
};

export default Home;
