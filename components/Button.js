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
            className={`text-${size} p-2 w-${width} font-extralight border-1 text-${color} border-${color}`}
        >
            {icon} {text}
        </button>
    )
}

export default Button
