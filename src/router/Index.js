import {
    createBrowserRouter,
} from 'react-router-dom'


import Layouts from '../Layouts/Layouts'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Project from '../pages/Project'
import Services from '../pages/Services'


export const router = createBrowserRouter([
    {
        path: '/',
        element: (<Layouts><Home/></Layouts>),
        errorElement:<ErrorPage/>
    },
    {
        path: "/about",
        element: (<Layouts>
            <About/>
        </Layouts>),
    }, 
    {
        path: "/services",
        element: (<Layouts>
            <Services/>
        </Layouts>)
    },
    {
        path: "/contact",
        element: (<Layouts>
            <Contact/>
        </Layouts>)
    },
    {
        path: "/project",
        element: (<Layouts>
            <Project/>
        </Layouts>)
    }
])
