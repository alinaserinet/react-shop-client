import Button from "../../../Button"

function CountButton({children}) {
  return (
    <Button
      className="w-8 h-8 bg-gray-200 text-black p-0 rounded-full border text-xl">
      {children}
    </Button>
  )
}

export default CountButton
