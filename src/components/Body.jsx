//Package Imports
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { auth } from "../utils/fireBase";
import { addUser, removeUser } from "../utils/reduxStateManagement/slices/userSlice";

//Project Imports
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {

    const dispatch = useDispatch()

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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser(
                    { uid, email, displayName, photoURL }
                ))
            } else {
                dispatch(removeUser())
            }
        });
    }, [])

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}



export default Body;

