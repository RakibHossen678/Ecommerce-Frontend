const PromoBanner = () => {
  return (
    <div className=" inset-0 -z-10 h-full w-full bg-primary-light bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

    <section className="section__container banner__container">
      <div className="banner__card">
        <span>
          <i className="ri-truck-line"></i>
        </span>
        <h4>Free Delivery</h4>
        <p>Enjoy fast and reliable delivery at no additional cost to you.</p>
      </div>
      <div className="banner__card">
        <span>
          <i className="ri-exchange-dollar-line"></i>
        </span>
        <h4 className="text-[18px]">100% Money Back Guarantee</h4>
        <p>
          Shop with confidence—get a full refund if you{"'"}re not satisfied.
        </p>
      </div>
      <div className="banner__card">
        <span>
          <i className="ri-user-voice-fill"></i>
        </span>
        <h4>Strong Support</h4>
        <p>
          Our team is here to help with any questions or issues you may have.
        </p>
      </div>
    </section>
    </div>
  );
};

export default PromoBanner;
