import { About, CustomerService, Home, Login, Shop } from '@/components/pages/user';


const userRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'shop',
        element: <Shop />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'customer-service',
        element: <CustomerService />
    }
]


export default userRoutes;