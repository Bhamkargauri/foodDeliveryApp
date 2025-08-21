import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenus from "./components/RestaurantMenus";
import RestaurantContainer from "./RestaurantContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true,
        element: <RestaurantContainer />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenus />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={appRouter} />
  // </StrictMode>
);
