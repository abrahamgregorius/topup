/** @format */

import { HomeIcon, MenuIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { routes } from "@/App";

interface SidebarProps {
  setShowSidebar: (value: boolean) => void;
}

const Sidebar = ({ setShowSidebar }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      <div
        onClick={() => setShowSidebar(false)}
        className="bg-[#0C0D0D] fixed w-full h-full top-0 left-0 opacity-60"></div>
      <div className="z-20 fixed p-7 h-screen w-[300px] top-0 left-0 bg-[#0C0D0D] border-r border-[#202328]">
        <div className="flex items-center justify-between cursor-pointer">
          <Link to="/" className="font-bold text-[20px]">
            awikwok
          </Link>
          <MenuIcon onClick={() => setShowSidebar(false)} />
        </div>
        <div className="mt-[50px] flex flex-col gap-1">
          {routes
            .filter(
              (route) => route.path !== "/login" && route.path !== "/register"
            )
            .map((route) => (
              <Link
                // 12% of D0FD00 is 191E00
                to={route.path}
                className={`flex gap-2 font-semibold py-3 px-4 rounded-full ${
                  location.pathname === route.path
                    ? "bg-[#191E00] text-[#D0FD00]"
                    : ""
                }`}>
                {/* Ini buat iconnya set dari routes harusnya */}
                <HomeIcon />
                {route.title}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
