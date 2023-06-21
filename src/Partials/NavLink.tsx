import { FC } from "react"
import { Link } from "react-router-dom"

export const NavLink: FC<Partials.NavLink> = ({ to, children, active }) => {
    return (
        <li className="nav-item">
            <Link className={`nav-link text-light`} aria-current="page" to={to}>
                {children}
            </Link>
        </li>
    )
}
