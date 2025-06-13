import { React, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import GlobalStyles from "./assets/styles/globalStyle";
import routesConfig from "./routes/routeConfig";
import "./App.css";
import LoaderFade from "./components/loaders/LoaderFade";

function App() {
  const router = createBrowserRouter(routesConfig);

  return (
    <>
      <ErrorBoundary>
            <Suspense fallback={<LoaderFade />}>
              <GlobalStyles />
              <RouterProvider router={router} />
            </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App
