/** @format */

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

export const routes = [
  {
    path: "/login",
    title: "Masuk",
    element: <Login></Login>,
  },
  {
    path: "/register",
    title: "Daftar",
    element: <Login></Login>,
  },
  {
    path: "/",
    title: "Beranda",
    element: <Home></Home>,
  },
  {
    path: "/history",
    title: "Riwayat Pemesanan",
    element: <Home></Home>,
  },
  {
    path: "/pricelist",
    title: "Daftar Harga",
    element: <Home></Home>,
  },
  {
    path: "/products",
    title: "Semua Produk",
    element: <Home></Home>,
  },
  {
    path: "/contact",
    title: "Hubungi Kami",
    element: <Home></Home>,
  },
];

export default function App() {
  return (
    <>
      <Routes>
        {routes.map((route, id) => (
          <Route
            id={id.toString()}
            path={route.path}
            element={route.element}></Route>
        ))}
      </Routes>
    </>
  );
}
