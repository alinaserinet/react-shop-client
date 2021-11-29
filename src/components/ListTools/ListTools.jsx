import { IoGrid, IoMenuSharp } from "react-icons/io5";

function ListTools({title, about}) {
  return (
    <div className="my-8">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg">{title}</h2>
            <span className="text-xs text-gray-400">{about}</span>
          </div>
          <div className="">
            <button className="mr-3">
              <IoGrid
                size={20}
                className='text-gray-300 inline-block'
              />
            </button>

            <button>
              <IoMenuSharp
                size={28}
                className='text-gray-300 inline-block'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListTools
