import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const isToken = localStorage.getItem("access_token") ? true : false;
  const { pathname } = useLocation();

  if (pathname === "/todo") {
    return isToken ? <Outlet /> : <Navigate to="/signin" />;
  }

  if (pathname === "/signin" || pathname === "/signup") {
    return isToken ? <Navigate to="/todo" /> : <Outlet />;
  }
};

export default PrivateRoute;
