import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";

export const publicRoutes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/registration',
        component: Registration
    },
]

export const privateRoutes = [

]
