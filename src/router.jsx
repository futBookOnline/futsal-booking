import { createBrowserRouter } from "react-router-dom";
import Home from "@/modules/Home/Pages/Home"

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
]);

export default router;