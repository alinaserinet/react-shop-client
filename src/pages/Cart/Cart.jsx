import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle"
import CartProductSkeleton from "../../components/Products/CartProduct/CartProductSkeleton";
import { MainLayout } from "../../layouts"
import "./cart.css";
import CartInfo from "./CartInfo";
import CartItems from "./CartItems";

function Cart() {
  const {items, info: cart, loading} = useSelector(({cart}) => cart);

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
