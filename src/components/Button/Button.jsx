function Button({ children, className, onClick, ...rest }) {

  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
