import { createBrowserRouter } from "react-router-dom"
import { Suspense, lazy } from "react"
import Login, { loginLoader } from "./Pages/Login"

const Register = lazy(() => import("./Pages/Register"))
const Root = lazy(() => import("./Root"))
const rootLoader = import("./Root")
const Dashboard = lazy(() => import("./Pages/Dashboard"))
const Chatting = lazy(() => import("./Pages/Chatting"))
const Report = lazy(() => import("./Pages/Report"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        loader: loginLoader
    },
    {
        path: "/register",
        element: (
            <Suspense fallback={<Login />}>
                <Register />
            </Suspense>
        ),
        loader: loginLoader
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
        ],
        loader: async () => (await rootLoader).rootLoader()
    }
])

export default router
