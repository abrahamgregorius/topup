import React from "react";
import timeSquareIcon from "@/assets/Iconly/Curved/Bold/Time Square.svg";
import personIcon from "@/assets/Iconly/Curved/Bold/Profile.svg";
import walletIcon from "@/assets/Iconly/Curved/Bold/Wallet.svg";
import infoSquareIcon from "@/assets/Iconly/Curved/Bold/Info Square.svg";
import chartIcon from "@/assets/Iconly/Curved/Bold/Chart.svg";
import { Link } from "react-router-dom";
import { HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

const settingsRoutes = [
    {
        isGroup: true,
        title: "Akun",
        icon: <PersonIcon />,
        paths: [
            {
                name: "Akun Saya",
                path: "/my-account",
            },
            {
                name: "Pengaturan Profil",
                path: "/my-account/settings",
            },
        ],
    },
    {
        isGroup: false,
        title: "Riwayat Transaksi",
        icon: <PersonIcon />,
        path: "/history",
    },
    {
        isGroup: false,
        title: "Deposit",
        icon: <PersonIcon />,
        path: "/deposit",
    },
    {
        isGroup: false,
        title: "Bantuan",
        icon: <PersonIcon />,
        path: "/help",
    },
    {
        isGroup: false,
        title: "Aktivitas Akun",
        icon: <PersonIcon />,
        path: "/activity",
    },
    {
        isGroup: false,
        title: "Keluar",
        icon: <PersonIcon />,
        path: "#",
    },
];

const MenuBar = () => {
    return (
        <>
            <div className="px-7 py-8 space-y-3 w-1/4">
                {settingsRoutes.map((route) => {
                    if (route.isGroup)
                        return (
                            <>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="flex gap-2 px-5 py-3 items-center rounded-full">
                                            {route.title}
                                        </AccordionTrigger>
                                        {route.paths?.map((path) => {
                                            return (
                                                <>
                                                <AccordionContent>
                                                    <Link
                                                        to={path.path}
                                                        className={`flex px-5 py-2 items-center rounded-full ${
                                                            location.pathname ===
                                                            route.path
                                                                ? "bg-[#191E00] text-[#D0FD00] font-semibold"
                                                                : ""
                                                        }`} >
                                                        {path.name}
                                                    </Link>
                                                </AccordionContent>
                                                </>
                                            );
                                        })}
                                    </AccordionItem>
                                </Accordion>
                            </>
                        );
                    return (
                        <div>
                            <Link
                                to={route.path as string}
                                className={`flex gap-2 px-5 py-3 items-center rounded-full ${
                                    location.pathname === route.path
                                        ? "bg-[#191E00] text-[#D0FD00] font-semibold"
                                        : ""
                                }`}
                            >
                                {route.icon}
                                {route.title}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const oldLayout = () => {
    return (
        <>
            <div className="history-item w-1/4">
                <div className="p-4">
                    <ul className="flex flex-col items-start">
                        <li className="w-full">
                            <Link
                                to="#"
                                className="form-control hidden sm:flex items-center gap-2 px-5 py-3 rounded-full bg-[#1D1F21]"
                            >
                                <img src={personIcon} alt="" />
                                Akun
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link
                                to="#"
                                className="form-control hidden sm:flex items-center gap-2 px-5 py-3 rounded-full"
                            >
                                <img src={timeSquareIcon} alt="" />
                                Riwayat Transaksi
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link
                                to="#"
                                className="form-control hidden sm:flex items-center gap-2 px-5 py-3 rounded-full"
                            >
                                <img src={walletIcon} alt="" />
                                Deposit
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link
                                to="#"
                                className="form-control hidden sm:flex items-center gap-2 px-5 py-3 rounded-full"
                            >
                                <img src={infoSquareIcon} alt="" />
                                Bantuan
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link
                                to="#"
                                className="form-control hidden sm:flex items-center gap-2 px-5 py-3 rounded-full"
                            >
                                <img src={chartIcon} alt="" />
                                Aktivitas Akun
                            </Link>
                        </li>
                        <li className="text-red-500 w-full">
                            <Link
                                to="#"
                                className="form-control hidden sm:flex items-center gap-2 px-6 py-3 rounded-full"
                            >
                                <svg
                                    width="19"
                                    height="18"
                                    viewBox="0 0 19 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.0671 9.10559H7.53125"
                                        stroke="#F73030"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M15.5062 6.55408L18.0682 9.10558L15.5062 11.6571"
                                        stroke="#F73030"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M13.3148 5.17613C13.0261 2.04363 11.8536 0.906128 7.18982 0.906128C0.976444 0.906128 0.976444 2.92738 0.976444 8.99988C0.976444 15.0724 0.976444 17.0936 7.18982 17.0936C11.8536 17.0936 13.0261 15.9561 13.3148 12.8236"
                                        stroke="#F73030"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Keluar
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MenuBar;
