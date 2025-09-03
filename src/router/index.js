import {createBrowserRouter, Navigate} from 'react-router-dom'

import Layout from '../views/layout'
import Welcome from '../views/welcome'
import Login from '../views/login'
import NotFound from '../views/notfound'


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/welcome',
                element: <Welcome />
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/welcome" />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router


