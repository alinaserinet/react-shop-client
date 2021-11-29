import ListTools from "../../components/ListTools"
import PageTitle from "../../components/PageTitle"
import { MainLayout } from "../../layouts";
import { useEffect, useState } from 'react';
import httpClient from '../../services/httpClient';
import { useDispatch } from "react-redux";
import { addManyProducts } from "../../store/reducer/productSlice";
import ProductsList from "../../components/ProductsList";

function ProductList() {

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    httpClient.get('/products')
      .then(({ data }) => {
        setProducts(data.data);
        setLoading(false);
        dispatch(addManyProducts(data.data));
      });
  }, [dispatch]);

  return (
    <MainLayout>

      <PageTitle title="Shop" />

      <ListTools title={"title"} about={"about"} />

      <div>

        <div className="container">

          <ProductsList
            loading={loading}
            products={products}
          />

        </div>

      </div>
    </MainLayout>
  )
}

export default ProductList
