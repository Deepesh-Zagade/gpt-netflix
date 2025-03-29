//Package Imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Project Imports
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {

    const appRouter = createBrowserRouter(
        [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/browse',
                element: <Browse />
            }
        ]
    )

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}



export default Body;

