import { createBrowserRouter } from "react-router-dom"
import Login from "./Pages/Login"
import { Suspense, lazy } from "react"

const Register = lazy(() => import("./Pages/Register"))
const Root = lazy(() => import("./Root"))
const Dashboard = lazy(() => import("./Pages/Dashboard"))
const Chatting = lazy(() => import("./Pages/Chatting"))
const Report = lazy(() => import("./Pages/Report"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/register",
        element: (
            <Suspense fallback={<Login />}>
                <Register />
            </Suspense>
        )
    },
    {
        element: (
            <Suspense>
                <Root />
            </Suspense>
        ),
        children: [
            {
                path: "/dashboard",
                element: (
                    <Suspense>
                        <Dashboard />
                    </Suspense>
                )
            },
            {
                path: "/chatting",
                element: (
                    <Suspense>
                        <Chatting />
                    </Suspense>
                )
            },
            {
                path: "/report",
                element: (
                    <Suspense>
                        <Report />
                    </Suspense>
                )
            }
        ]
    }
])

export default router
