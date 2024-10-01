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
      <div className="flex items-center justify-between h-[80px] px-20 w-full border-b border-[#202328]">
        <div className="flex items-center gap-4 cursor-pointer ">
          <MenuIcon onClick={() => setShowSidebar(true)} />
          <Link to="/" className="font-bold text-[20px]">
            <img src={logoIcon} alt="" />
          </Link>
        </div>
        <div className="form-control hidden sm:flex items-center gap-2 max-w-[600px] h-[48px] px-5 rounded-full bg-[#1D1F21]">
          <SearchIcon />
          <input
            type="text"
            id="password"
            placeholder="Cari game atau voucher..."
            className="bg-[#1D1F21] w-full h-full outline-none"
          />
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Link to="/register">
            <Button className="w-full bg-[#0C0D0D] text-[#D0FD00] rounded-3xl font-semibold text-sm sm:text-lg py-6" >Daftar</Button>
          </Link>
          <Link to="/login">
            <Button className="w-full bg-[#D0FD00] text-[#0C0D0D] hover:text-[#D0FD00] rounded-3xl font-semibold text-sm sm:text-lg py-6" >Masuk</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
