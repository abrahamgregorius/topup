import Container from "@/components/partials/Container";
import Content from "@/components/partials/Content";
import Main from "@/components/partials/Main";
import MenuBar from "@/components/partials/MenuBar";
import { Button } from "@/components/ui/button";
import { ClockIcon, WalletIcon } from "lucide-react";
import React from "react";
import BCALogo from "@/assets/Bank Logo/White/BCA.png";
import BNILogo from "@/assets/Bank Logo/White/BTN.png";
import BRILogo from "@/assets/Bank Logo/White/BRI.png";
import MandiriLogo from "@/assets/Bank Logo/White/Mandiri.png";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const DepositTopup = () => {
    return (
        <>
            <Main>
                <Container>
                    <div className="flex flex-col sm:flex-row">
                        <MenuBar />
                        <Content>
                            <div className="help-content flex flex-col-reverse sm:flex-row gap-10">
                                <div className="flex flex-col w-full">
                                    <div className="topup-content-item">
                                        {/* Transfer head */}
                                        <div className="flex flex-col">
                                            <p className="font-bold text-2xl mb-2">
                                                Jumlah Top Up
                                            </p>
                                            <p className="text-slate-200 font-light">
                                                Masukkan jumlah top up yang
                                                kalian inginkan dibawah ini.
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

                                    <div className="topup-content-item mt-12">
                                        {/* Transfer head */}
                                        <div className="flex flex-col">
                                            <p className="font-bold text-2xl mb-2">
                                                Metode Pembayaran
                                            </p>
                                            <p className="text-slate-200 font-light">
                                                Transfer saldo menuju akun yang
                                                diinginkan dengan menggunakan
                                                email atau username.
                                            </p>
                                        </div>

                                        {/* Buttons */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 mt-7 gap-9 h-auto">
                                            <button className="px-8 py-8 bg-[#151617] rounded-3xl text-[#D4D4D4] flex flex-row">
                                                <div className="w-full flex flex-col h-full items-start">
                                                    <div className="flex flex-col h-full justify-between items-start">
                                                        <div className="flex flex-col items-start gap-1">
                                                            <p className="font-bold text-3xl">
                                                                Mandiri
                                                            </p>

                                                            <p>
                                                                <span className="text-[#D0FD00]">
                                                                    |
                                                                </span>{" "}
                                                                Dicek 1-10 Menit
                                                            </p>
                                                        </div>

                                                        <p className="text-xl font-semibold text-[#D0FD00]">
                                                            Rp 200.000
                                                        </p>
                                                    </div>
                                                </div>
                                                <img
                                                    src={MandiriLogo}
                                                    className="self-center"
                                                />
                                            </button>
                                            <button className="px-8 py-8 bg-[#151617] rounded-3xl text-[#D4D4D4] flex flex-row">
                                                <div className="w-full flex flex-col h-full items-start">
                                                    <div className="flex flex-col h-full justify-between items-start">
                                                        <div className="flex flex-col items-start gap-1">
                                                            <p className="font-bold text-3xl">
                                                                BCA
                                                            </p>

                                                            <p>
                                                                <span className="text-[#D0FD00]">
                                                                    |
                                                                </span>{" "}
                                                                Dicek 1-10 Menit
                                                            </p>
                                                        </div>

                                                        <p className="text-xl font-semibold text-[#D0FD00]">
                                                            Rp 200.000
                                                        </p>
                                                    </div>
                                                </div>
                                                <img
                                                    src={BCALogo}
                                                    className="self-center"
                                                />
                                            </button>
                                            <button className="px-8 py-8 bg-[#151617] rounded-3xl text-[#D4D4D4] flex flex-row">
                                                <div className="w-full flex flex-col h-full items-start">
                                                    <div className="flex flex-col h-full justify-between items-start">
                                                        <div className="flex flex-col items-start gap-1">
                                                            <p className="font-bold text-3xl">
                                                                BNI
                                                            </p>
                                                            <p>
                                                                <span className="text-[#D0FD00]">
                                                                    |
                                                                </span>{" "}
                                                                Dicek 1-10 Menit
                                                            </p>
                                                        </div>

                                                        <p className="text-xl font-semibold text-[#D0FD00]">
                                                            Rp 200.000
                                                        </p>
                                                    </div>
                                                </div>
                                                <img
                                                    src={BNILogo}
                                                    className="self-center"
                                                />
                                            </button>
                                            <button className="px-8 py-8 bg-[#151617] rounded-3xl text-[#D4D4D4] flex flex-row">
                                                <div className="w-full flex flex-col h-full items-start">
                                                    <div className="flex flex-col h-full justify-between items-start">
                                                        <div className="flex flex-col items-start gap-1">
                                                            <p className="font-bold text-3xl">
                                                                BRI
                                                            </p>

                                                            <p>
                                                                <span className="text-[#D0FD00]">
                                                                    |
                                                                </span>{" "}
                                                                Dicek 1-10 Menit
                                                            </p>
                                                        </div>

                                                        <p className="text-xl font-semibold text-[#D0FD00]">
                                                            Rp 200.000
                                                        </p>
                                                    </div>
                                                </div>
                                                <img
                                                    src={BRILogo}
                                                    className="self-center"
                                                />
                                            </button>
                                        </div>

                                        <Dialog>
                                            <DialogTrigger>
                                                <Button className="mt-12 w-full h-[48px] text-lg font-bold px-5 rounded-full bg-[#D0FD00] hover:bg-[#1D1F21] text-[#1D1F21] hover:text-[#D0FD00] transition duration-300">
                                                    Top Up Sekarang
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="bg-[#0c0d0d] border-0 min-w-[300px]">
                                                <DialogHeader>
                                                    <DialogTitle></DialogTitle>
                                                    <DialogDescription className="text-white flex flex-col justify-center items-center">
                                                        <div className="flex flex-col gap-4 items-center">
                                                            <span className="font-bold text-2xl">Yakin Ingin Top Up?</span>
                                                            <span className="text-[#D4D4D4]">Apakah Anda yakin ingin melakukan top up Rp <span className="text-[#D0FD00]">100.000</span> saldo?</span>
                                                        </div>
                                                        <div className="flex w-full justify-center mt-5">
                                                            <div className="flex flex-row gap-2">
                                                                <Button className="bg-[#1D1F21] w-full rounded-3xl font-semibold text-sm sm:text-lg py-6">
                                                                    Batal
                                                                </Button>
                                                                <Button className="bg-[#D0FD00] text-[#0C0D0D] hover:text-[#D0FD00] w-full rounded-3xl font-semibold text-sm sm:text-lg py-6">
                                                                    Ya, Yakin!
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-4 text-center mt-4">
                                                            <span className="text-[#545556]">*Anda tidak akan dapat melakukan top up saldo lagi sebelum transaksi top up ini Berhasil atau Dibatalkan.</span>
                                                        </div>
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>

                                <div className="topup-content-item w-full sm:w-[35%] mt-0 sm:mt-0">
                                    <div className="flex flex-col gap-8 sm:gap-6 justify-between rounded-3xl py-8 px-7 bg-[#151617]">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-3xl text-[#D0FD00] font-bold">
                                                Rp 273.000
                                            </p>
                                            <p className="flex gap-2 text-base">
                                                <WalletIcon /> Saldo Anda
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-end gap-3">
                                            <ClockIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Content>
                    </div>
                </Container>
            </Main>
        </>
    );
};

export default DepositTopup;
