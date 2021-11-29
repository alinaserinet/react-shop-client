import { Route, Switch } from "react-router"
import Cart from "../pages/Cart"
import Home from "../pages/Home"
import ShopList from "../pages/ShopList"
import SingleProduct from "../pages/SingleProduct"

function Routes() {
  return (
    <Switch>
      <Route exact path="/products" component={ShopList} />
      <Route path="/products/:id" component={SingleProduct} />
      <Route path="/cart" component={Cart} />
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default Routes
