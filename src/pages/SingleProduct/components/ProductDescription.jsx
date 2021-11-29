function ProductDescription({ description }) {
  return (
    <div className="product-description mt-6 border-t relative">
      <h2 className="absolute -top-3.5 bg-white pr-3 font-semibold">Description</h2>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="py-4 text-justify"
      >
      </div>
    </div>

  )
}

export default ProductDescription
