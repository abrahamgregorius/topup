import timeSquareIcon from "@/assets/Iconly/Curved/Bold/Time Square.svg";
import personIcon from "@/assets/Iconly/Curved/Bold/Profile.svg";
import walletIcon from "@/assets/Iconly/Curved/Bold/Wallet.svg";
import infoSquareIcon from "@/assets/Iconly/Curved/Bold/Info Square.svg";
import chartIcon from "@/assets/Iconly/Curved/Bold/Chart.svg";
import { Link } from "react-router-dom";
import { PersonIcon } from "@radix-ui/react-icons";
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
        icon: <img src={personIcon}></img>,
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
        icon: <img src={timeSquareIcon}></img>,
        path: "/history",
    },
    {
        isGroup: true,
        title: "Deposit",
        icon: <img src={walletIcon}></img>,
        paths: [
            {
                name: "Riwayat Deposit",
                path: "/deposit/history"
            },
            {
                name: "Top Up Saldo",
                path: "/deposit/topup"
            },
            {
                name: "Transfer Saldo",
                path: "/deposit/transfer"
            },
            {
                name: "Mutasi Saldo",
                path: "/deposit/mutasi"
            },
        ],
    },
    {
        isGroup: false,
        title: "Bantuan",
        icon: <img src={infoSquareIcon}></img>,
        path: "/help",
    },
    {
        isGroup: false,
        title: "Aktivitas Akun",
        icon: <img src={chartIcon}></img>,
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
            <div className="px-7 py-8 w-full sm:w-1/4">
                {settingsRoutes.map((route) => {
                    if (route.isGroup)
                        return (
                            <>
                                <Accordion className="px-5 rounded-full" type="single" collapsible>
                                    <AccordionItem value="item-1" className="hover:no-underline border-0">
                                        <AccordionTrigger className="hover:no-underline">
                                            <div className="flex text-[15px] justify-start gap-3">
                                                {route.icon}
                                                {route.title}
                                            </div>
                                        </AccordionTrigger>
                                        {route.paths?.map((path) => {
                                            return (
                                                <>
                                                    <AccordionContent>
                                                        <Link
                                                            to={path.path as string}
                                                            className={`flex px-5 py-3 items-center rounded-full ${
                                                                location.pathname ===
                                                                path.path
                                                                    ? "bg-[#191E00] text-[#D0FD00] font-semibold"
                                                                    : ""
                                                            }`}
                                                        >
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
                        <Link
                            to={route.path as string}
                            className={`flex gap-2 px-5 mb-2 py-3 items-center rounded-full ${
                                location.pathname === route.path
                                    ? "bg-[#191E00] text-[#D0FD00] font-semibold"
                                    : ""
                            }`}
                        >
                            {route.icon}
                            {route.title}
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default MenuBar;
