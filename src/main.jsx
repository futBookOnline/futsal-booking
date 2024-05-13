import React from "react";
import ReactDOM from "react-dom/client";
import "@/sass/main.scss";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import iconLibrary from "@/helpers/iconHelper.js";

import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
);
