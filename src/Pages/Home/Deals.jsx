import dealImg from "../../assets/deals.png";

const Deals = () => {
  return (
    <div className=" inset-0 -z-10 h-full w-full bg-primary-light bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]  pb-6">
      <section className="section__container deals__container shadow-md ">
        <div className="deals__image">
          <img className="" src={dealImg} alt="" />
        </div>
        <div className="deals__content">
          <h5>Get Up To 20% Discount</h5>
          <h4>Deals of This Month</h4>
          <p>
            Our Women{"'"}s Fashion Deals of the Month are here to make your
            style dreams a reality without breaking the bank. Discover a curated
            collection of exquisite clothing, accessories, and footwear, all
            handpicked to elevate your wardrobe.{" "}
          </p>
          <div className="deals__countdown flex-wrap">
            <div className="deals__countdown__card">
              <h4>14</h4>
              <p>Days</p>
            </div>
            <div className="deals__countdown__card">
              <h4>20</h4>
              <p>Hours</p>
            </div>
            <div className="deals__countdown__card">
              <h4>15</h4>
              <p>Mins</p>
            </div>
            <div className="deals__countdown__card">
              <h4>15</h4>
              <p>Sec</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deals;
