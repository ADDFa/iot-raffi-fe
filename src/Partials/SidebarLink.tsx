import { FC } from "react"
import { Link } from "react-router-dom"

const SidebarLink: FC<Partials.SidebarLink> = ({
    iconName,
    to,
    children,
    ...rest
}) => {
    return (
        <Link
            to={to}
            className="btn btn-primary w-100 text-start py-3"
            {...rest}
        >
            <i className={`bi bi-${iconName} me-3`} />
            {children}
        </Link>
    )
}

export default SidebarLink
