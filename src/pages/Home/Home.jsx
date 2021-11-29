import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductsList from '../../components/ProductsList';
import { MainLayout } from '../../layouts';
import productApi from '../../services/productApi';


function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productApi.getMany()
    .then(({data}) => {
      setProducts(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <MainLayout >
      <div className="my-8">
        <div className="container">
          <div>
            <div className="w-2/3">
              <Swiper
                className="rounded-lg"
                pagination={true}
                spaceBetween={16}
                loop={true}
                autoplay={{
                  delay: 3,
                  disableOnInteraction: false
                }}

              >
                <SwiperSlide>
                  <div
                    style={{ backgroundImage: "url('/images/slide1.jpg')" }}
                    className="w-full h-72 bg-cover bg-center rounded-lg"
                  ></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{ backgroundImage: "url('/images/slide1.jpg')" }}
                    className="w-full h-72 bg-cover bg-center rounded-lg"
                  ></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{ backgroundImage: "url('/images/slide1.jpg')" }}
                    className="w-full h-72 bg-cover bg-center rounded-lg"
                  ></div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <ProductsList
            title="Products"
            products={products}
            loading={loading}
            skeletonCount={5}
          />

        </div>
      </div>
    </MainLayout>
  )
}

export default Home
