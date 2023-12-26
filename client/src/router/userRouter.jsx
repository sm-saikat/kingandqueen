import { About, Home, Shop } from '@/components/pages/user';


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
    }
]


export default userRoutes;