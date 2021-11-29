function Button({ children, color, bg, size, className, ...rest }) {

  if(typeof size !== "number") {
    size = 1;
  }

  const textSizes = ["sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"];

  return (
    <button
      className={ `btn rounded-md font-semibold bg-${bg || "red"} text-${color || "black"} text-${textSizes[size] || "base"} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
