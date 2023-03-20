import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import AuthLayout from "./components/AuthLayout";
import Dashboard from "./views/dashboard";
import Landingpage from "./views/landingpage/landingpage";
import Login from "./views/login";
import Signup from "./views/signup";
import EmployerProfile from "./views/employerProfile";
import Jobs from "./views/jobs";
import JobForm from "./views/jobForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landingpage />,
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            // {
            //     path: "/dashboard",
            //     element: <Navigate to="/" />,
            // },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/jobs",
                element: <Jobs />,
            },
            {
                path: "/jobs/create",
                element: <JobForm />,
            },
        ],
    },
]);

export default router;
