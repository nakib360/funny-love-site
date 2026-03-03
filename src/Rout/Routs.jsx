import { createBrowserRouter, Navigate } from "react-router";
import Main from "../Root/Main";
import Proposal from "../Components/Proposal";
import Celebration from "../Components/Celebration";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        index: true,
        element: <Navigate to="/proposal" replace />,
      },
      {
        path: "proposal",
        Component: Proposal,
      },
      {
        path: "celebration",
        Component: Celebration,
      },
    ],
  },
]);

export default router;
