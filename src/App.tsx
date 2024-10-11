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
import homeIcon from "@/assets/Iconly/Curved/Bold/Home.svg"
import timeSquareIcon from "@/assets/Iconly/Curved/Bold/Time Square.svg"
import buyIcon from "@/assets/Iconly/Curved/Bold/Buy.svg"
import gameIcon from "@/assets/Iconly/Curved/Bold/Game.svg"
import callIcon from "@/assets/Iconly/Curved/Bold/Call.svg"
import DepositHistory from "./pages/Deposit/DepositHistory";
import DepositTopup from "./pages/Deposit/DepositTopup";
import DepositTransfer from "./pages/Deposit/DepositTransfer";
import DepositMutasi from "./pages/Deposit/DepositMutasi";
import Help from "./pages/Help";

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
    icon: <img src={homeIcon}></img>,
  },
  {
    path: "/history",
    title: "Riwayat Pemesanan",
    element: <History></History>,
    icon: <img src={timeSquareIcon}></img>,
  },
  {
    path: "/pricelist",
    title: "Daftar Harga",
    element: <PriceList></PriceList>,
    icon: <img src={buyIcon}></img>,
  },
  {
    path: "/products",
    title: "Semua Produk",
    element: <Products></Products>,
    icon: <img src={gameIcon}></img>,
  },
  {
    path: "/contact",
    title: "Hubungi Kami",
    element: <Contact></Contact>,
    icon: <img src={callIcon}></img>,
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
    element: <Help></Help>,
  },
  {
    path: "/activity",
    title: "Aktivitas Akun",
    element: <MyAccount></MyAccount>,
  },
];

export const depositRoutes = [
  {
    path: "/deposit/history",
    title: "Riwayat Deposit",
    element: <DepositHistory></DepositHistory>,
  },
  {
    path: "/deposit/topup",
    title: "Top Up Saldo",
    element: <DepositTopup></DepositTopup>,
  },
  {
    path: "/deposit/transfer",
    title: "Transfer Saldo",
    element: <DepositTransfer></DepositTransfer>,
  },
  {
    path: "/deposit/mutasi",
    title: "Mutasi Saldo",
    element: <DepositMutasi></DepositMutasi>,
  }
]

export const allRoutes = [...authRoutes, ...sidebarRoutes, ...myAccountRoutes, ...depositRoutes];

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
