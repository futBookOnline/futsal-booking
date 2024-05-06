import React from "react";
import ReactDOM from "react-dom/client";
import "@/sass/main.scss";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import iconLibrary from "@/helpers/iconHelper.js";

ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
);
