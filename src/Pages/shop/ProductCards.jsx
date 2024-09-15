import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RatingStar from "../../components/RatingStar";

const ProductCards = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-4">
      {products.map((product, idx) => (
        <Link to={`/shop/${product._id}`} key={idx} className="product_card">
          <div className="relative">
            <div>
              <img
                src={product.image}
                alt="product image"
                className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="absolute hover:block top-3  right-3 rounded-md text-white">
              <button>
                <i className="ri-shopping-cart-2-line bg-primary p-1.5 hover:bg-primary-dark"></i>
              </button>
            </div>
          </div>
          <div className="product__card__content">
            <h4>{product.name}</h4>
            <p>
              ${product.price}
              {product?.oldPrice ? <s>${product?.oldPrice}</s> : null}
            </p>
            <RatingStar ratings={product.rating} />
          </div>
        </Link>
      ))}
    </div>
  );
};

ProductCards.propTypes = {
  products: PropTypes.array,
};

export default ProductCards;
