import Button from "../../components/Button"

function CartInfo({total}) {
  return (
    <div className="cart-info">
      <div className="bg-gray-100 rounded-md p-4">
        <div className="flex justify-between py-3">
          <span>Total:</span>
          <span className="font-semibold">{total}</span>
        </div>
        <div className="pt-6">
          <Button
            bg="purple-800"
            color="white"
            className="block w-full py-3">
            Check Out
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartInfo
