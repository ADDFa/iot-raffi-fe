import { Link, useNavigate } from "react-router-dom"
import { NavLink } from "./NavLink"

const Navbar = () => {
    const navigate = useNavigate()

    const signOut = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="#">
                    Navbar
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink to="/chatting">Chatting</NavLink>
                        <NavLink to="/report">Laporan</NavLink>
                    </ul>
                    <button
                        className="btn btn-danger text-light"
                        onClick={signOut}
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
