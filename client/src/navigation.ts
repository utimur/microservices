import Login from "./pages/Login";
import Registration from "./pages/Registration";

export const publicRoutes = [
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/registration',
        Component: Registration
    },
]

export const privateRoutes = [

]
