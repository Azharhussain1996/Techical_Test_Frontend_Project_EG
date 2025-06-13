// import { routes, authRoutes, companyRoutes, newCompanyRoutes } from "./routes";
import { routes, authRoutes } from "./routes";
import AppLayout from "layout/AppLayout";
import AuthLayout from "layout/AuthLayout";
import ErrorPage from "components/error-page/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";

const routesConfig = [
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: authRoutes,
  },
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: routes,
  },
];

export default routesConfig;
