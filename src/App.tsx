/** @format */

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import Products from "./pages/Products";

export const authRoutes = [
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
];

export const sidebarRoutes = [
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
    element: <Products></Products>,
  },
  {
    path: "/contact",
    title: "Hubungi Kami",
    element: <Home></Home>,
  },
];

export const myAccountRoutes = [
  {
    path: "/my-account",
    title: "My Account",
    element: <MyAccount></MyAccount>,
  },
];

export const allRoutes = [...authRoutes, ...sidebarRoutes, ...myAccountRoutes];

export default function App() {
  return (
    <>
      <Routes>
        {allRoutes.map((route, id) => (
          <Route
            id={id.toString()}
            path={route.path}
            element={route.element}></Route>
        ))}
      </Routes>
    </>
  );
}
