const RatingStar = ({ ratings }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`ri-star${i <= ratings ? "-fill" : "-line"}`}
      ></span>
    );
  }
  return <div className="product__rating">{stars}</div>;
};

export default RatingStar;
