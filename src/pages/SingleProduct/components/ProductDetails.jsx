import { useState } from "react"
import { ProductAttributes, ProductDescription } from "."
import Button from "../../../components/Button"

function ProductDetails({ description, attributes }) {
  const tabs = [
    <ProductDescription description={description} />,
    <ProductAttributes attributes={attributes} />
  ]

  const [activeTab, setActiveTab] = useState(0);

  function changeTab(index) {
    if (typeof index !== 'number' || index >= tabs.length) {
      index = 0;
    }
    setActiveTab(index);
  }

  return (
    <div>
      <div className="mt-8">
        <Button
          onClick={() => changeTab(0)}
          bg="gray-200"
          className="py-1 px-3 w-28 mr-3" >
          Description
        </Button>
        <Button
          onClick={() => changeTab(1)}
          bg="gray-200"
          className="py-1 px-3 w-28" >
          Attributes
        </Button>
      </div>

      {tabs[activeTab]}

    </div>
  )
}

export default ProductDetails
