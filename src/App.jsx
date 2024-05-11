import { NextUIProvider } from "@nextui-org/react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      {/*The outlet form the router is displayed here*/}
      <NextUIProvider>
        <Outlet />
      </NextUIProvider>
      {/*The outlet form the router is displayed here*/}
    </>
  );
};

export default App;
