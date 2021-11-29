import Skeleton from "../../Skeleton"

function CartProductSkeleton({ count }) {
  const items = [];
  for (let i = 0; i < (count || 1); i++) {
    items.push(
      <div className="border-b py-3" key={i} >
        <Skeleton className="h-20 w-20" width="100%" />
      </div>
    );
  }
  return (
    <div className="cart-items">
      {items}
    </div>
  )
}

export default CartProductSkeleton
