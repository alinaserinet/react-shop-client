import { Link } from "react-router-dom"
import { ProductPrw } from "../Products"
import { ProductPrwSkeleton } from "../Products/ProductPrw"

function ProductsList({ title, products, loading, skeletonCount }) {

  return (
    <div className={`${title ? "relative my-8 border-t" : ""}`}>
      {title && <h2 className="absolute -top-3.5 bg-white pr-3 font-semibold">{title}</h2>}

      {loading ? <ProductPrwSkeleton count={skeletonCount || 10} /> :

        <div className="product-prw">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} >
              <ProductPrw
                name={product.name}
                image={product.image.url}
                price={product.price.formatted_with_symbol}
              />
            </Link>
          ))}

        </div>

      }

    </div>
  )
}

export default ProductsList
