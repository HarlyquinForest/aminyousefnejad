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
            className={`flex flex-row items-center text-${size} p-2 w-${width} font-extralight border-1 text-${color} border-primary`}
        >
            {icon && <span className="ml-2 text-2xl">{icon}</span>}
            {text}
        </button>
    )
}

export default Button
