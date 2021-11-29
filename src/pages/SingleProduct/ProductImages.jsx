import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function ProductImages({ product }) {

  const [image, setImage] = useState(0);

  return (
    <>
      <div
        className="h-96 w-full bg-gray-50 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${product?.assets[image]?.url})` }}
      >
      </div>
      <div className="mt-4 text-center">
        <Swiper
          spaceBetween={0}
          slidesPerView={6}
        >

          {product.assets.map(({ url, id }, index) => (
            <SwiperSlide key={id} >
              <button onClick={() => setImage(index)} >
                <div
                  className="mx-auto h-14 w-14 bg-gray-50 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${url})` }}
                ></div>
              </button>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </>
  )
}

export default ProductImages
