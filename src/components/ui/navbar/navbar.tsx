/** @format */

import { useState } from "react";

import { MenuIcon, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../button";
import Sidebar from "./sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      {/* INI SEMENTARA JUGA, KLO MAU PAKE TRANSITION PROSES DI SIDEBAR COMPONENTNYA AJA */}
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
      <div className="flex items-center justify-between h-[80px] px-[80px] border-b border-[#202328]">
        <div className="flex items-center gap-4 cursor-pointer">
          {/* INI ICON MENU SEMENTARA */}
          <MenuIcon onClick={() => setShowSidebar(true)} />
          <Link to="/" className="font-bold text-[20px]">
            awikwok
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
        <div className="flex items-center gap-3">
          <Link to="/register" className="text-[#D0FD00] cursor-pointer ">
            Daftar
          </Link>
          <Link to="/login">
            <Button className="w-full bg-[#D0FD00] rounded-3xl font-semibold text-lg py-6 text-[#0C0D0D] hover:text-[#D0FD00]">
              Masuk
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
