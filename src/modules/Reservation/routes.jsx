import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Futsal from "./pages/Futsal";


const routes = [
    { path: "/", element: <Home /> },
    { path: "/futsal/:id", element: <Futsal /> },
    { path: "/reservation/:id", element: <Reservation /> }
]

export default routes;