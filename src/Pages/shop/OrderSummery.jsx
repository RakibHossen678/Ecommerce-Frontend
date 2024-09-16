import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Redux/featues/cart/cartSlice";

const OrderSummery = () => {
  const products = useSelector((store) => store.cart.products);
  const { tax, taxRate, totalPrice, grandTotal, selectedItems } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-white mt-6 rounded-lg shadow-lg text-base">
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
          Order Summary
        </h2>
        <p className="text-[17px] font-medium text-gray-600">
          Selected Items:{" "}
          <span className="font-bold text-gray-900">{selectedItems}</span>
        </p>
        <p className="text-[17px] text-gray-600">
          Total Price:{" "}
          <span className="font-bold text-gray-900">
            ${totalPrice.toFixed(2)}
          </span>
        </p>
        <p className="text-[17px] text-gray-600">
          Tax ({(taxRate * 100).toFixed(2)}%):{" "}
          <span className="font-bold text-gray-900">${tax.toFixed(2)}</span>
        </p>
        <h3 className="text-xl font-semibold text-gray-900">
          Grand Total:{" "}
          <span className="text-primary">${grandTotal.toFixed(2)}</span>
        </h3>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleClearCart}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <span>Clear Cart</span> <i className="ri-delete-bin-line"></i>
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center space-x-2">
            <span>Proceed to Checkout</span>{" "}
            <i className="ri-bank-card-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
