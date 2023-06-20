import { FC } from "react"
import { Link } from "react-router-dom"

const LinkToggle: FC<LoginRegister.LinkToggle> = ({
    to = "/",
    children,
    text
}) => {
    return (
        <p className="text-end">
            {text}
            <Link to={to}> {children}</Link>
        </p>
    )
}

export default LinkToggle
