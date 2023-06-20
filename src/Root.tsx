import { Outlet } from "react-router-dom"
import Sidebar from "./Partials/Sidebar"

const Root = () => {
    return (
        <div className="d-flex gap-3 h-100">
            <Sidebar />
            <div className="col h-100">
                <Outlet />
            </div>
        </div>
    )
}

export default Root
