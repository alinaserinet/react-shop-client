import Skeleton from '../../Skeleton';

function ProductPrwSkeleton({count}) {
  const items = [];
  for(let i = 0; i < count; i++) {
    items.push(<div key={i} className="mt-6 p-3 rounded-xl">
      <Skeleton className="h-48 w-full bg-center bg-cover mx-auto rounded-xl bg-gray-50" />
      <Skeleton width="100%" height="5" className="my-2" />
      <Skeleton width="100%" height="10px" className="my-3" />
      <Skeleton width="100%" height="5" className="my-2" />
    </div>);
  }
  return (
    <div className="product-prw">
      {items}
    </div>
  )
}

export default ProductPrwSkeleton
