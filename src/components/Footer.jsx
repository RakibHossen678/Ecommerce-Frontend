import instagram1 from "../assets/instagram-1.jpg";
import instagram2 from "../assets/instagram-2.jpg";
import instagram3 from "../assets/instagram-3.jpg";
import instagram4 from "../assets/instagram-4.jpg";
import instagram5 from "../assets/instagram-5.jpg";
import instagram6 from "../assets/instagram-6.jpg";
const Footer = () => {
  return (
    <div className=" top-0 z-[-2] bg-radial-custom">
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <span>
              <i className="ri-map-pin-2-fill"> </i>
              123, London Bridge Street, London
            </span>
          </p>
          <p>
            <span>
              <i className="ri-mail-fill"> </i>
              styleBask@support.com
            </span>
          </p>
          <p>
            <span>
              <i className="ri-phone-fill"> </i> +8801944807599
            </span>
          </p>
        </div>
        <div className="footer__col">
          <h1>COMPANY</h1>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Work With Us</a>
          <a href="/">Our Blogs</a>
          <a href="/">Terms & Condition</a>
        </div>
        <div className="footer__col">
          <h1>USEFUL LINK</h1>
          <a href="/">Help</a>
          <a href="/">Track My Order</a>
          <a href="/">Men</a>
          <a href="/">Women</a>
          <a href="/">Dresses</a>
        </div>
        <div className="footer__col">
          <h4>INSTAGRAM</h4>
          <div className="instagram__grid">
            <img src={instagram1} alt="" />
            <img src={instagram2} alt="" />
            <img src={instagram3} alt="" />
            <img src={instagram4} alt="" />
            <img src={instagram5} alt="" />
            <img src={instagram6} alt="" />
          </div>
        </div>
      </footer>
      <div className="footer__bar">
        Copyright @ 2025 StyleBask. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
