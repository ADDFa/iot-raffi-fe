import { MouseEventHandler, useCallback, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import SidebarLink from "./SidebarLink"

const Sidebar = () => {
    const buttonCloseRef = useRef<HTMLButtonElement>(null)
    const toggleRef = useRef<HTMLAnchorElement>(null)

    const setOpacity = useCallback((opacity: "0" | "1") => {
        if (!toggleRef.current) return
        toggleRef.current.style.opacity = opacity
    }, [])

    const showSidebar: MouseEventHandler<HTMLAnchorElement> = (evt) => {
        setOpacity("0")
    }

    useEffect(() => {
        buttonCloseRef.current?.addEventListener("click", () => {
            setOpacity("1")
        })
    }, [setOpacity])

    return (
        <div className="sidebar-container">
            <Link
                to="#"
                className="toggle-sidebar bg-primary text-light"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
                onClick={showSidebar}
            >
                <i className="bi bi-chevron-compact-right" />
            </Link>

            <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        Internet Of Things
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        ref={buttonCloseRef}
                    />
                </div>
                <div
                    className="offcanvas-body d-flex flex-column gap-2 mt-5"
                    onClick={() => {
                        buttonCloseRef.current?.click()
                    }}
                >
                    <SidebarLink iconName="house-fill" to="/dashboard">
                        Dashboard
                    </SidebarLink>
                    <SidebarLink iconName="chat-fill" to="/chatting">
                        Chatting
                    </SidebarLink>
                    <SidebarLink iconName="chat-fill" to="/report">
                        Laporan
                    </SidebarLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
