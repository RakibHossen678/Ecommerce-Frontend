import { useSelector } from "react-redux";

const OrderSummery = () => {
  const products = useSelector((store) => store.cart.products);
  const { tax, taxRate, totalPrice, grandTotal, selectedItems } = useSelector(
    (store) => store.cart
  );
  return (
    <div className="bg-primary-light mt-5 rounded text-base shadow-sm">
      <div className="px-4 py-4 space-y-5">
        <h2 className="text-xl font-bold text-text-dark">Order Summery</h2>
        <p className="text-text-dark mt-2">Selected Items:{selectedItems}</p>
        <p>Total Price : ${totalPrice.toFixed(2)}</p>
        <p>
          Tax ({taxRate * 100}%) : ${tax.toFixed(2)}
        </p>
        <h3 className="font-bold">GrandTotal: ${grandTotal.toFixed(2)}</h3>
        <div className="">
          <button className="bg-blue-500 px-2 py-1.5 text-white mt-2 rounded-md flex justify-center items-center mb-4">Clear cart</button>
          <button className="bg-green-500 px-2 py-1.5 text-white mt-2 rounded-md flex justify-center items-center mb-4">Proceed checkout</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
