/** @format */

import { useState } from "react";

import { MenuIcon, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

import logoIcon from "@/assets/Logo.svg";

import { Button } from "../button";
import Sidebar from "./sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="flex items-center justify-between h-[80px] px-20 border-b border-[#202328]">
        <div className="flex items-center gap-4 cursor-pointer">
          {/* INI ICON MENU SEMENTARA */}
          <MenuIcon onClick={() => setShowSidebar(true)} />
          <Link to="/" className="font-bold text-[20px]">
            <img src={logoIcon} alt="" />
          </Link>
        </div>
        <div className="form-control flex items-center gap-2 min-w-[600px] h-[48px] px-5 rounded-full bg-[#1D1F21]">
          {/* INI JUGA SEARCH ICON SEMENTARA */}
          <SearchIcon />
          <input
            type="text"
            id="password"
            placeholder="Cari game atau voucher..."
            className="bg-[#1D1F21] w-full h-full outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button className="w-full bg-[#0C0D0D] text-[#D0FD00] rounded-3xl font-semibold text-lg py-6">
            Daftar
          </Button>
          <Button className="w-full bg-[#D0FD00] text-[#0C0D0D] hover:text-[#D0FD00] rounded-3xl font-semibold text-lg py-6">
            Masuk
          </Button>

          {/* <Link to="/register" className="text-[#D0FD00] cursor-pointer ">
            Daftar
          </Link>
          <Link to="/login">
            <Button className="w-full bg-[#D0FD00] rounded-3xl font-semibold text-lg py-6 text-[#0C0D0D] hover:text-[#D0FD00]">
              Masuk
            </Button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
