import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types";
import OrderSummery from "./OrderSummery";

const CartModal = ({ products, onClose, isOpen }) => {
  const handleOverlayClick = () => {
    onClose(false); // Close the modal
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`fixed z-[1000] inset-0 bg-black bg-opacity-80 transition-opacity duration-700 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={handleModalClick}
        className={`fixed right-0 top-0 w-full md:w-2/3 lg:w-1/3 bg-white h-full overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.94)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg rounded-l-lg`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center border-b pb-4">
            <h4 className="text-xl font-semibold">Your Cart</h4>
            <button
              onClick={() => onClose(!isOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <RxCross2 size={30} />
            </button>
          </div>

          <div className="mt-5">
            {products.length === 0 ? (
              <div className="text-center text-gray-500">
                Your Cart is empty
              </div>
            ) : (
              products.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-between shadow-md rounded-lg p-4 mb-4 bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div className="flex items-center w-full md:w-3/5">
                    <span className="mr-1 text-sm px-2 py-1 bg-primary text-white rounded-full">
                      0{index + 1}
                    </span>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover mr-1 rounded-md shadow-sm"
                    />
                    <div>
                      <h5 className="text-md font-medium">{item.name}</h5>
                      <p className="text-gray-500 text-sm">
                        ${Number(item.price).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3 md:mt-0 w-full md:w-2/5">
                    <div className="flex items-center space-x-3">
                      <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white transition">
                        -
                      </button>
                      <span className="px-1">{item.quantity}</span>
                      <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white transition">
                        +
                      </button>
                    </div>

                    <button className="text-blue-500 hover:text-blue-800 transition ">
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {products.length > 0 && <OrderSummery />}
        </div>
      </div>
    </div>
  );
};

CartModal.propTypes = {
  products: PropTypes.array,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default CartModal;
