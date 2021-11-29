import { CartProduct } from "../../components/Products"

function CartItems({items}) {
  return (
    <div className="cart-items">
      {items.map((item) => (
        <CartProduct
          key={item.id}
          product={item}
        />
      ))}
    </div>
  )
}

export default CartItems
