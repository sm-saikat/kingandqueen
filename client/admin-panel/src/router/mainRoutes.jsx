import { Dashboard, Products } from "../components/pages";


const mainRoutes = [
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/products',
        element: <Products />
    }
]


export default mainRoutes;