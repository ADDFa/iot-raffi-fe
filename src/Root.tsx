import { Outlet, redirect } from "react-router-dom"
import Navbar from "./Partials/Navbar"
import Auth from "./Functions/Auth"

export const rootLoader = () => {
    return Auth.token_access ? null : redirect("/")
}

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="h-100">
                <Outlet />
            </div>
        </div>
    )
}

export default Root
