/** @format */

import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { PersonIcon } from "@radix-ui/react-icons";

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

const SidebarSettings = () => {
  // INI BELUM SELESAI, ILL DO IT LATER
  return (
    <div className="px-7 py-8 w-[280px]">
      {settingsRoutes.map((route) => {
        if (route.isGroup)
          return (
            // <Accordion type="single" collapsible>
            //   <AccordionItem value="item-1">
            //     <AccordionTrigger>Is it accessible?</AccordionTrigger>
            //     <AccordionContent>
            //       Yes. It adheres to the WAI-ARIA design pattern.
            //     </AccordionContent>
            //   </AccordionItem>
            // </Accordion>
            <div>asd</div>
          );
        return (
          <div>
            <Link
              to={route.path as string}
              className={`flex gap-2 py-3 rounded-full ${
                location.pathname === route.path
                  ? "bg-[#191E00] text-[#D0FD00] font-semibold"
                  : ""
              }`}>
              {/* Ini harusnya jadi HomeIcon */}
              {/* <img src={route.icon} alt="" /> */}
              <HomeIcon />
              {route.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarSettings;
