import Auth from "./pages/Auth";
import {routesPath} from "./utils/const";
import Users from "./pages/Users";

export const publicRoutes = [
    {
        path: routesPath.LOGIN,
        Component: Auth
    },
    {
        path: routesPath.REGISTRATION,
        Component: Auth
    },
]

export const privateRoutes = [
    {
        path: routesPath.USERS,
        Component: Users
    }
]
