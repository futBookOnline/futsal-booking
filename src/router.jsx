import { createBrowserRouter } from "react-router-dom";
import Error404 from "./components/Error404";
import ReservationRoutes from "@/modules/Reservation/routes"

const router = createBrowserRouter([
  ...ReservationRoutes,
  { path: "*", element: <Error404 /> },
]);

export default router;
