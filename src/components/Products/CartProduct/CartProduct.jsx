import Button from "../../Button"
import { IoClose } from 'react-icons/io5';

function CartProduct({product}) {
  let title = product.name.split(' ').slice(0, 5).join(' ');
  title += product.name.length === title.length ? "" : "...";

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
              <Button
                size={0}
                bg="white"
                className="w-8 h-8 bg-gray-200 rounded-full border text-xl">
                -
              </Button>
              <span className="mx-1 w-10 inline-block text-center font-semibold">
                {product.quantity}
              </span>
              <Button
                size={0}
                bg="white"
                className="w-8 h-8 bg-gray-200  rounded-full border text-xl">
                +
              </Button>
            </div>

            <div className="flex-col w-1/2 lg:w-1/6 text-right">
              <Button
                bg="red-300"
                className="p-1"
              >
                <IoClose className="ml-auto" />
              </Button>
            </div>
          </div>
          <div className="flex items-center mt-6 lg:hidden lg:mt-0">
            <div className="flex-col w-1/2">
              <Button
                size={0}
                bg="white"
                className="w-8 h-8 bg-gray-200 rounded-full border text-xl">
                -
              </Button>
              <span className="mx-1 w-10 inline-block text-center font-semibold">
                {product.quantity}
              </span>
              <Button
                size={0}
                bg="white"
                className="w-8 h-8 bg-gray-200  rounded-full border text-xl">
                +
              </Button>
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
}

export default CartProduct
