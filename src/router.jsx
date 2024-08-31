import { createBrowserRouter } from "react-router-dom";
import Home from "@/modules/Home/pages/Home";
import Futsal from "@/modules/futsal/pages/Futsal";
import Booking from "@/modules/booking/pages/Booking";
import Error404 from "./components/Error404";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/futsals/:id", element: <Futsal /> },
  { path: "/book/:id", element: <Booking /> },
  { path: "*", element: <Error404 /> },
]);

export default router;
