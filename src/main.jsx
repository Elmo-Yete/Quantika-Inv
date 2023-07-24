import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//  * Imports
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProd from "./pages/AddProd";
// *
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/patients",
    element: <p>aqui van los pacientes</p>,
  },
  {
    path: "/reports",
    element: <p>aqui van los reportes</p>,
  },
  {
    path: "/detail",
    element: <p>aqui va el detalle del producto cuando se le hace click</p>,
  },
  {
    path: "/add-product",
    element: <AddProd />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
