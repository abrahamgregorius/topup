import Container from "@/components/partials/Container";
import Content from "@/components/partials/Content";
import Main from "@/components/partials/Main";
import MenuBar from "@/components/partials/MenuBar";
import { Button } from "@/components/ui/button";
import {
    MessageSquareWarningIcon,
    UserIcon,
    WalletIcon,
    XIcon,
} from "lucide-react";
import messageIcon from "@/assets/Iconly/Curved/Bold/Message.svg";
import profileIcon from "@/assets/Iconly/Curved/Bold/Profile.svg";

const DepositTransfer = () => {
    return (
        <>
            <Main>
                <Container>
                    <div className="flex flex-col sm:flex-row">
                        <MenuBar />
                        <Content>
                            <div className="help-content">
                                <div className="help-content-item">
                                    {/* Transfer head */}
                                    <div className="flex flex-col">
                                        <p className="font-bold text-2xl mb-2">
                                            Jumlah Transfer
                                        </p>
                                        <p className="text-slate-200 font-light">
                                            Masukkan jumlah transfer yang kalian
                                            inginkan dibawah ini. Pastikan saldo
                                            anda cukup.
                                        </p>
                                    </div>

                                    {/* Transfer input */}
                                    <div className="input flex flex-col gap-3 mt-7">
                                        <label
                                            className="font-semibold"
                                            htmlFor=""
                                        >
                                            Jumlah
                                        </label>
                                        <div className="form-control flex items-center gap-2 w-full h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                            <input
                                                type="text"
                                                placeholder="Masukkan nominal"
                                                className="bg-[#1D1F21] w-full h-full outline-none"
                                            />
                                        </div>
                                        <span className="text-gray-300">
                                            *Jumlah Minimum Rp. 100.000
                                        </span>
                                    </div>
                                </div>

                                <div className="help-content-item mt-12">
                                    {/* Transfer head */}
                                    <div className="flex flex-col">
                                        <p className="font-bold text-2xl mb-2">
                                            Transfer ke
                                        </p>
                                        <p className="text-slate-200 font-light">
                                            Transfer saldo menuju akun yang
                                            diinginkan dengan menggunakan email
                                            atau username.
                                        </p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 mt-7 gap-7 h-auto sm:h-[182px]">
                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl text-[#D4D4D4] flex flex-col justify-between">
                                            <div className="w-full flex justify-between items-end">
                                                <p className="font-bold text-3xl">
                                                    Email
                                                </p>
                                                <img
                                                    src={messageIcon}
                                                    className="self-center"
                                                />
                                            </div>
                                            <p className="text-xl font-semibold text-[#D0FD00]">
                                                Rp 200.000
                                            </p>
                                        </button>
                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl text-[#D4D4D4] flex flex-col justify-between">
                                            <div className="w-full flex justify-between items-end">
                                                <p className="font-bold text-3xl">
                                                    Username
                                                </p>
                                                <img
                                                    src={profileIcon}
                                                    className="self-center"
                                                />
                                            </div>
                                            <p className="text-xl font-semibold text-[#D0FD00]">
                                                Rp 200.000
                                            </p>
                                        </button>
                                    </div>

                                    {/* Receiver input */}
                                    <div className="input flex flex-col gap-3 mt-7">
                                        <label
                                            className="font-semibold"
                                            htmlFor=""
                                        >
                                            Transfer ke Email
                                        </label>
                                        <div className="form-control flex items-center gap-2 w-full h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                            <input
                                                type="text"
                                                placeholder="Masukkan email yang dituju..."
                                                className="bg-[#1D1F21] w-full h-full outline-none"
                                            />
                                        </div>
                                    </div>

                                    <button className="mt-7 w-full h-[48px] text-lg font-bold px-5 rounded-full bg-[#D0FD00] hover:bg-[#1D1F21] text-[#1D1F21] hover:text-[#D0FD00] transition duration-300">
                                        Kirim
                                    </button>

                                </div>
                            </div>
                        </Content>
                    </div>
                </Container>
            </Main>
        </>
    );
};

export default DepositTransfer;
