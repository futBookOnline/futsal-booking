import { createBrowserRouter } from "react-router-dom";
import Home from "@/modules/home/pages/Home";
import Futsal from "@/modules/futsal/pages/Futsal";
import { Route } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/futsals/:name", element: <Futsal /> },
  { path: "*", element: <p>Error 404! page not found</p> },
]);

export default router;
