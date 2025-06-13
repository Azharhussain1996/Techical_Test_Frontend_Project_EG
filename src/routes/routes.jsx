import React, { lazy } from "react";
import PATH_ROUTE from "./routeConstants";
// auth Routes
const SignIn = lazy(() => import("../view/admin/auth/AuthSignIn"));
const HomePage = lazy(() => import("../view/admin/dashboard/HomePage"));

const authRoutes = [
  {
    path: `/`,
    element: <SignIn />,
  },
];

const routes = [
  {
    path: PATH_ROUTE.DASHBOARD,
    exact: true,
    element: <HomePage />,
  },
];

export { authRoutes, routes };
