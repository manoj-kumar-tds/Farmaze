
import React from "react";
import {
  RouterProvider
} from "react-router-dom";
import router from "./Pages/Router/router";
import "./App.css"
import "./Orders.css"
import "./Responsive.css"

const App = () => {

  return (
    <div>
     <RouterProvider
    router={router}
    fallbackElement={<div />}
  />
    </div>
  );
};

export default App;
