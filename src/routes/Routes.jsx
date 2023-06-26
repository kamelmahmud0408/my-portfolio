import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Projects from "../pages/Projects/Projects";
import AboutPage from "../pages/AboutPage/AboutPage";
import SkillsPage from "../pages/SkillsPage/SkillsPage";
import ContactPage from "../pages/ContactPage/ContactPage";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<AboutPage></AboutPage>
            },
            {
                path:'/skills',
                element:<SkillsPage></SkillsPage>
            },
            {
                path:'/projects',
                element:<Projects></Projects>
            },
            {
                path:'/contact',
                element:<ContactPage></ContactPage>
            }
        ]
    }
])

export default router;