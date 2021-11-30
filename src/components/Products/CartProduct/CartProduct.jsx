import Button from "../../Button"
import { IoClose } from 'react-icons/io5';
import { CountButton } from "./components";
import { useDispatch } from "react-redux";
import { changeQuantity, deleteItem, syncQuantities } from "../../../store/reducer/cartSlice";
import React from "react";

const CartProduct = React.forwardRef(({ product }, timer) => {

  let title = product.name.split(' ').slice(0, 5).join(' ');
  title += product.name.length === title.length ? "" : "...";
  const dispatch = useDispatch();

  function deleteItemHandler() {
    dispatch(deleteItem(product.id));
  }

  function reduceQuantity() {
    clearTimeout(timer.current);

    dispatch(changeQuantity({
      productId: product.id,
      quantity: product.quantity - 1
    }));

    timer.current = setTimeout(() => {
      dispatch(syncQuantities());
    }, 3000);
  }

  function increaseQuantity() {
    clearTimeout(timer.current);

    dispatch(changeQuantity({
      productId: product.id,
      quantity: product.quantity + 1
    }));

    timer.current = setTimeout(() => {
      dispatch(syncQuantities());
    }, 3000);
  }

  return (
    <div className="border-b py-3">
      <div className="flex items-center">

        <div className="flex-col w-3/12 lg:w-1/12 mr-4">
          <div
            className="bg-gray-100 bg-cover bg-center w-20 h-20 rounded-md"
            style={{ backgroundImage: `url(${product.image.url})` }}
          ></div>
        </div>

        <div className="flex-col w-9/12 lg:w-11/12">
          <div className="flex items-center">

            <div className="flex-col w-1/2 lg:w-1/3">
              <span className="font-semibold block">{title}</span>
              <span className="block text-gray-500 text-sm"></span>
            </div>

            <div className="flex-col hidden lg:block lg:w-1/6">
              <span className="font-semibold block">
                {product.price.formatted_with_symbol}
              </span>
            </div>

            <div className="flex-col hidden lg:block lg:w-1/3 text-center">
              <CountButton onClick={reduceQuantity}>-</CountButton>
              <span className="mx-1 w-10 inline-block text-center font-semibold">
                {product.quantity}
              </span>
              <CountButton onClick={increaseQuantity}>+</CountButton>
            </div>

            <div className="flex-col w-1/2 lg:w-1/6 text-right">
              <Button
                onClick={deleteItemHandler}
                className="p-1 bg-red-400 text-black"
              >
                <IoClose className="ml-auto" />
              </Button>
            </div>
          </div>
          <div className="flex items-center mt-6 lg:hidden lg:mt-0">
            <div className="flex-col w-1/2">
              <CountButton onClick={reduceQuantity}>-</CountButton>
              <span className="mx-1 w-10 inline-block text-center font-semibold">
                {product.quantity}
              </span>
              <CountButton onClick={increaseQuantity}>+</CountButton>
            </div>
            <div className="flex-col w-1/2 text-right">
              <span className="font-semibold block">
                {product.price.formatted_with_symbol}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
});

export default CartProduct
