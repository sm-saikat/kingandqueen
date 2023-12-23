import { About, Home } from '@/components/pages/user';


const userRoutes = [
    {
        path: '/',
        element: <Home />
    },

    {
        path: 'about',
        element: <About />
    }
]


export default userRoutes;