import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//  * Imports
import Login from "./pages/Login";

// *
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <p>Aqui va la tabla de movimientos diarios y el menu lateral</p>,
  },
  {
    path: "/products",
    element: <p>aqui va a ir el inventario de todos los productos</p>,
  },
  {
    path: "/detail",
    element: <p>aqui va el detalle del producto cuando se le hace click</p>,
  },
  {
    path: "/add-product",
    element: <p>aqui va el form donde agregamos productos</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
