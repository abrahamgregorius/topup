/** @format */

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount/MyAccount";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import History from "./pages/History";
import PriceList from "./pages/PriceList";
import AccountSettings from "./pages/MyAccount/AccountSettings";

export const authRoutes = [
  {
    path: "/login",
    title: "Masuk",
    element: <Login></Login>,
    icon: "",
  },
  {
    path: "/register",
    title: "Daftar",
    element: <Register></Register>,
    icon: "",
  },
];

export const sidebarRoutes = [
  {
    path: "/",
    title: "Beranda",
    element: <Home></Home>,
    icon: "",
  },
  {
    path: "/history",
    title: "Riwayat Pemesanan",
    element: <History></History>,
    icon: "",
  },
  {
    path: "/pricelist",
    title: "Daftar Harga",
    element: <PriceList></PriceList>,
    icon: "",
  },
  {
    path: "/products",
    title: "Semua Produk",
    element: <Products></Products>,
    icon: "",
  },
  {
    path: "/contact",
    title: "Hubungi Kami",
    element: <Contact></Contact>,
    icon: "",
  },
];

export const myAccountRoutes = [
  {
    path: "/my-account",
    title: "My Account",
    element: <MyAccount></MyAccount>,
  },
  {
    path: "/my-account/settings",
    title: "Pengaturan Profil",
    element: <AccountSettings></AccountSettings>,
  },
  {
    path: "/deposit",
    title: "Pengaturan Profil",
    element: <MyAccount></MyAccount>,
  },
  {
    path: "/help",
    title: "Bantuan",
    element: <MyAccount></MyAccount>,
  },
  {
    path: "/activity",
    title: "Aktivitas Akun",
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
