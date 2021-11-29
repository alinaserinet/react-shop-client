import "./productPrw.css";

function ProductPrw(props) {
  let title = props.name.split(' ').slice(0, 5).join(' ');
  title += props.name.length === title.length ? "" :  "...";
  return (
    <div className="mt-6 border border-transparent hover:border-gray-200 delay-50 duration-300 ease-in-out p-3 rounded-xl">
      <div className="h-48 w-full bg-center bg-cover mx-auto rounded-xl bg-gray-50"
        style={{ backgroundImage: `url(${props.image})` }}>
      </div>
      <div className="mt-1 text-center font-semibold text-sm text-blue-900">
        {title}
      </div>
      <div className="text-center">
        <span className={`w-2 h-2 bg-red inline-block rounded-full mx-1`}></span>
        <span className={`w-2 h-2 bg-blue inline-block rounded-full mx-1`}></span>
        <span className={`w-2 h-2 bg-black inline-block rounded-full mx-1`}></span>
      </div>

      <div className="flex justify-center text-sm font-semibold mt-2">
        <div className="hover:text-purple-900">{props.price}</div>
        {props.offPrice &&
          <div className="text-red pl-3 line-through">{props.offPrice}</div>
        }
      </div>
    </div>
  )
}

export default ProductPrw
