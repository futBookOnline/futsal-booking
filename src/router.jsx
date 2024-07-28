import { createBrowserRouter } from "react-router-dom";
import Home from "@/modules/home/pages/Home";
import Futsal from "@/modules/futsal/pages/Futsal";
import Booking from "@/modules/booking/pages/Booking";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/futsals/:id", element: <Futsal /> },
  { path: "/booking/:name", element: <Booking /> },
  { path: "*", element: <p>Error 404! page not found</p> },
]);

export default router;
