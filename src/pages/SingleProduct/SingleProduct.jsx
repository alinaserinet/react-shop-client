import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Button from "../../components/Button";
import PageTitle from "../../components/PageTitle";
import { MainLayout } from "../../layouts";
import cartApi from "../../services/cartApi";
import { fetchProductById } from "../../store/reducer/productSlice";
import { ProductDetails } from "./components";
import ProductImages from './ProductImages';
import './singleProduct.css';

function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product: stateProducts, cart } = useSelector((state) => state);
  const { entities: products, loading } = stateProducts;
  const product = products[id];

  useEffect(() => {
    if (product === undefined) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id, product]);

  function addToCart() {
    cartApi.addItem(cart.id, product.id, 1);
  }

  return (
    <MainLayout>

      <PageTitle title="Shop" />

      <div className="container mt-6">
        {!loading && product &&
          <div className="product-wrapper">
            <div className="product-header">

              <div className="product-images">
                <ProductImages product={product} />
              </div>


              <div className="product-content mt-8 lg:mt-0">
                <div className="px-0 lg:px-6">
                  <h1 className="text-lg font-semibold border-l-2 pl-3">{product.name}</h1>
                </div>
              </div>

              <div className="product-info mt-6 lg:mt-0">
                <div className="bg-gray-50 px-3 py-4 w-full rounded-lg">
                  <div className="flex justify-between py-3">
                    <span>Price:</span>
                    <span className="font-semibold">{product.price.formatted_with_symbol}</span>
                  </div>
                  <div className="pt-6">
                    <Button
                      onClick={addToCart}
                      bg="purple-800"
                      color="white"
                      className="block w-full py-3">
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </div>

            </div>

            <ProductDetails
              description={product.description}
              attributes={[]}
            />

          </div>
        }
      </div>

    </ MainLayout>
  )
}

export default SingleProduct
