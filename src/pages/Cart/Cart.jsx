import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle"
import CartProductSkeleton from "../../components/Products/CartProduct/CartProductSkeleton";
import { MainLayout } from "../../layouts"
import { retrieveCart } from "../../store/reducer/cartSlice";
import "./cart.css";
import CartInfo from "./CartInfo";
import CartItems from "./CartItems";

function Cart() {
  const {items, info: cart, loading, id: cartId} = useSelector(({cart}) => cart);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if(cartId == null) return;
    dispatch(retrieveCart(cartId));
  }, [cartId, dispatch]);

  return (
    <MainLayout>
      <PageTitle title="Cart" />
      <div className="my-6">

        <div className="container">
          <div className="lg:flex items-start">
            {loading ? <CartProductSkeleton count={5} /> :
              <>
                <CartItems
                  items={items}
                />
                <CartInfo
                  total={cart.subtotal.formatted_with_symbol}
                />
              </>
            }
          </div>
          
        </div>
      </div>
    </MainLayout>
  )
}

export default Cart
