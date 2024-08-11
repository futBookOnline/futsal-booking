import React from "react";
import ReactDOM from "react-dom/client";
import "@/sass/main.scss";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import iconLibrary from "@/helpers/iconHelper.js";

import { NextUIProvider } from "@nextui-org/react";

import { Provider } from "react-redux";
import store from "@/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </Provider>
);
