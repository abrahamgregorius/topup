/** @format */

import { Link } from "react-router-dom";
import logoIcon from "@/assets/Logo.svg";

const Footer = () => {
    return (
        <footer className="p-20 mt-20 border-t border-[#202328]">
            <div className="w-full max-w-[1450px] mx-auto flex items-center justify-between">
                <div className="flex flex-col sm:flex-row items-center justify-between mx-auto">
                    <div className="footer-item flex flex-col items-start gap-6">
                        <div className="fi-item flex flex-col gap-3 items-start">
                            <img src={logoIcon} className="h-[50px]" alt="" />
                            <p className="w-[85%]">
                                Lorem ipsum dolor sit amet consectetur. A integer ut
                                faucibus a in semper diam integer pharetra.
                                Elementum nec imperdiet porta mi ullamcorper integer
                                scelerisque etiam pretium. Vitae id eget duis
                                volutpat et sagittis laoreet. Purus pellentesque
                                elit in in urna eu odio.
                            </p>
                        </div>
                        <div className="fi-item">
                            <Link to="#" className="text-[#D0FD00]">
                                Kerjasama Dengan Mystore
                            </Link>
                        </div>
                        <div className="fi-item flex flex-col gap-2">
                            <p className="text-white font-semibold">Ikuti kami</p>
                            <div className="links flex gap-3">
                                <Link to="#">Instagram</Link>
                                <Link to="#">Facebook</Link>
                            </div>

                        </div>

                    </div>
                    <div className="footer-item flex flex-col gap-10 mt-6 sm:flex-row justify-between w-full items-start">
                        <div className="footer-links">
                            <div className="fl-head font-semibold text-white text-md">Kemitraan</div>
                            <div className="fl-body text-sm flex flex-col gap-4 mt-5 text-gray-300">
                                <Link to="#">Menjadi Reseller</Link>
                                <Link to="#">Deposit</Link>
                                <Link to="#">Daftar Harga</Link>
                            </div>
                        </div>
                        <div className="footer-links">
                            <div className="fl-head font-semibold text-white text-md">Peta Situs</div>
                            <div className="fl-body text-sm flex flex-col gap-4 mt-5 text-gray-300">
                                <Link to="#">Beranda</Link>
                                <Link to="#">Masuk</Link>
                                <Link to="#">Daftar</Link>
                                <Link to="#">Riwayat Pemesanan</Link>
                                <Link to="#">Akun saya</Link>
                            </div>
                        </div>
                        <div className="footer-links">
                            <div className="fl-head font-semibold text-white text-md">Hubungi Kami</div>
                            <div className="fl-body text-sm flex flex-col gap-4 mt-5 text-gray-300">
                                <Link to="#">Whatsapp</Link>
                                <Link to="#">Telegram</Link>
                                <Link to="#">Email</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
