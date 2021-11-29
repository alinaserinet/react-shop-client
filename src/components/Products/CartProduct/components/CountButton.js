import Button from "../../../Button"

function CountButton({ children, onClick, ...rest }) {
  return (
    <Button
      onClick={onClick}
      className="w-8 h-8 bg-gray-200 text-black p-0 rounded-full border text-xl"
      {...rest}
    >
      {children}
    </Button>
  )
}

export default CountButton
