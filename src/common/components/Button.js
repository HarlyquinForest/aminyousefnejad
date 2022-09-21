const Button = ({
  icon,
  bgColor,
  type,
  color,
  size,
  bgHoverColor,
  text,
  borderRadius,
  width,
  clickHandler
}) => {
  return (
    <button
      type={type ? type : 'button'}
      onClick={clickHandler}
      style={{ borderRadius }}
      className={`flex flex-row items-center text-${size} p-2 w-${width} font-semibold border-2 text-${color} border-primary hover:bg-primary hover:text-light-gray hover:translate-y-1 transition-all`}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      {text && text}
    </button>
  )
}

export default Button
