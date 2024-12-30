/** @format */

import { HomeIcon, MenuIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { sidebarRoutes } from "@/App";
import logoIcon from "@/assets/Logo.svg";

interface SidebarProps {
    showSidebar: boolean;
    setShowSidebar: (value: boolean) => void;
}

const Sidebar = ({ setShowSidebar, showSidebar }: SidebarProps) => {
    const location = useLocation();

  return (
    <>
      <div
        onClick={() => setShowSidebar(false)}
        className={`z-10 bg-[#0C0D0D] fixed w-full h-full top-0 left-0 transition ${
          showSidebar ? "opacity-60" : "opacity-0 pointer-events-none"
        }`}></div>
      <div
        className={`z-20 fixed p-7 h-screen w-[300px] top-0 left-0 bg-[#0C0D0D] border-r border-[#202328] transition ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="flex items-center justify-between cursor-pointer">
          <Link to="/" className="font-bold text-[20px]">
            <img src={logoIcon} alt="" />
          </Link>
          <MenuIcon onClick={() => setShowSidebar(false)} />
        </div>
        <div className="mt-[50px] flex flex-col gap-1">
          {sidebarRoutes.map((route) => (
            <Link
              // 12% of D0FD00 is 191E00
              onClick={() => setShowSidebar(false)}
              to={route.path}
              className={`flex gap-2 py-3 px-4 rounded-full ${
                location.pathname === route.path
                  ? "bg-[#191E00] text-[#D0FD00] font-semibold"
                  : ""
              }`}>
              {/* Ini buat iconnya set dari routes harusnya */}
              {route.icon}
              {route.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
