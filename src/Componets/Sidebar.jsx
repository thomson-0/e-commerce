import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineArrowRight } from "react-icons/ai";

import {
  removeFromCart,
  increment,
  decrement,
} from "../redux/CardSlice";
import { Link } from "react-router-dom";


function Sidebar({ open, close }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(increment({ id: itemId }));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrement({ id: itemId }));
  };

 
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div>
      {open && (
        <div className="fixed top-0 z-10 right-0 h-full w-[300px] bg-white shadow p-4">
          <span className="text-black cursor-pointer" onClick={close}>
            <AiOutlineArrowRight />
          </span>

          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <h1 className="font-bold text-gray-800 mr-auto text-[15px]">
                Cart
              </h1>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
            {cartItems.map((item) => (
              <li key={item.id} className="py-4 flex items-center space-x-4">
                <div className="w-16 h-16 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p className="text-[10px]">{item.title}</p>
                    <p>{item.price}</p>
                  </div>
                  <div className="flex mt-3 justify-around items-center">
                    <button onClick={() => handleDecrement(item.id)} className="border px-2">-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)} className="border px-2">+</button>
                    <button
                      type="button"
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </div>
          <div className="mt-6 border-t border-gray-200 pt-4">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <p className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                Checkout
              </p>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or &nbsp;
                <Link to={'/'}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={close}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
