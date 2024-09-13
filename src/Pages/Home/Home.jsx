import Banner from "./Banner";
import Categories from "./Categories";
import HeroSection from "./HeroSection";
import TrendingProducts from "../shop/TrendingProducts";
import Contact from "./Contact";
import AllUsers from "./Allusers";
import ServicesPage from "./ServicesPage";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <HeroSection />
      <TrendingProducts />
      <Contact/>
      <AllUsers/>
      <ServicesPage/>
    </>
  );
};

export default Home;
