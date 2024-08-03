import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Check1 from "../check1";
import Landing from "../Auth/landing";
import Orders from "../Auth/orders";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<PrivateRoute />}>
          <Route index element={<Check1 />} />
          {/* All other routes that you want to protect will go inside here */}
        </Route>
        <Route path="/home" element={<Landing />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    )
  );
  export default router;