import './skeleton.css';

function Skeleton({ width, height, className }) {
  return (
    <div
      style={{ width, height }}
      className={`${className} bg-gray-50 h-4 w-20 rounded skeleton`}
    ></div>
  )
}

export default Skeleton
