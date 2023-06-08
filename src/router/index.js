import {
    createBrowserRouter
} from 'react-router-dom';
import Layout from "../layouts/Layout";

// import pages 
import Home from '../pages/Home'
import About from '../pages/About'
import Project from '../pages/Project'
import Contact from '../pages/Contact'


export const router = createBrowserRouter([
    {
        path:"/",
        element:(
            <Layout>
                <Home/>
            </Layout>
        )
    },
    {
        path:"/about",
        element:(
            <Layout>
                <About/>
            </Layout>
        )    },
    {
        path:"/project",
        element:(
            <Layout>
                <Project/>
            </Layout>
        )    },
    {
        path:"/contact",
        element:(
            <Layout>
                <Contact/>
            </Layout>
        )    },
])