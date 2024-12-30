
import { Link } from "react-router-dom";

import logoIcon from "@/assets/Logo.svg";

const Footer = () => {
  const footerList = [
    {
      title: "Kemitraan",
      paths: [
        {
          name: "Menjadi Reseller",
          path: "#",
        },
        {
          name: "Deposit",
          path: "#",
        },
        {
          name: "Daftar Harga",
          path: "#",
        },
      ],
    },
    {
      title: "Peta situs",
      paths: [
        {
          name: "Beranda",
          path: "/",
        },
        {
          name: "Masuk",
          path: "/login",
        },
        {
          name: "Daftar",
          path: "/register",
        },
        {
          name: "Riwayat Pemesanan",
          path: "/history",
        },
        {
          name: "Akun Saya",
          path: "/my-account",
        },
      ],
    },
    {
      title: "Hubungi Kami",
      paths: [
        {
          name: "WhatsApp",
          path: "#",
        },
        {
          name: "Telegram",
          path: "#",
        },
        {
          name: "Email",
          path: "#",
        },
      ],
    },
  ];

  return (
    <>
      <footer className="flex gap-8 px-20 py-10 border-t border-[#202328]">
        <div className="w-[626px] max-w-full flex flex-col gap-8 items-start ">
          <img className="h-[52px]" src={logoIcon} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur. A integer ut faucibus a in
            semper diam integer pharetra. Elementum nec imperdiet porta mi
            ullamcorper integer scelerisque etiam pretium. Vitae id eget duis
            volutpat et sagittis laoreet. Purus pellentesque elit in in urna eu
            odio.
          </p>
          <p className="text-[#D0FD00]">Kerjasama Dengan Mystore</p>
          <div>
            <p>Ikuti Kami</p>
            <div className="mt-3 flex gap-3">
              {/* Ini nanti ditambahi image */}
              <img src="" alt="instagram" />
              <img src="" alt="facebook" />
            </div>
          </div>
        </div>
        {footerList.map((list) => (
          <div className="grow flex flex-col gap-5">
            <p className="font-semibold">{list.title}</p>
            {list.paths.map((path) => (
              <Link to={path.path}>{path.name}</Link>
            ))}
          </div>
        ))}
      </footer>
      <div className="py-5 bg-[#4F120]">
        <p className="text-center text-sm">
          Copyright © 2021 by mystore&nbsp;-&nbsp;
          <span className="text-[#D0FD00]">Terms and conditions</span>
          &nbsp;-&nbsp;<span className="text-[#D0FD00]">Privacy Policy</span>
        </p>
      </div>
    </>
  );
};

export default Footer