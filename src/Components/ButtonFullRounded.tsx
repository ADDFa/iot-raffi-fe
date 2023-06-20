import { FC } from "react"

const ButtonFullRounded: FC<Button.FullRounded> = ({
    text,
    className,
    ...rest
}) => {
    return (
        <button
            className={`btn btn-primary w-100 rounded-5 mt-5 ${className}`}
            {...rest}
        >
            {text}
        </button>
    )
}

export default ButtonFullRounded
