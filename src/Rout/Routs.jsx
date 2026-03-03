import { createBrowserRouter } from "react-router";
import Main from "../Root/Main";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Main
    }
])

export default router;