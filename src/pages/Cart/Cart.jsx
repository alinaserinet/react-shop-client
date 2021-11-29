import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle"
import CartProductSkeleton from "../../components/Products/CartProduct/CartProductSkeleton";
import { MainLayout } from "../../layouts"
import cartApi from "../../services/cartApi";
import "./cart.css";
import CartInfo from "./CartInfo";
import CartItems from "./CartItems";

function Cart() {
  const [cart, setCart] = useState({});
  const [items, setItems] = useState([]);
  const { id: cartId } = useSelector(({ cart }) => cart);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cartApi.retrieve(cartId)
      .then(({ data }) => {
        const { line_items, ...rest } = data;
        setCart(rest);
        setItems(line_items);
        setLoading(false);
      });
  }, [cartId]);

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
