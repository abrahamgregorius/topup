import Container from "@/components/partials/Container";
import Content from "@/components/partials/Content";
import Main from "@/components/partials/Main";
import MenuBar from "@/components/partials/MenuBar";
import { Button } from "@/components/ui/button";
import {
    ClockIcon,
    WalletIcon,
} from "lucide-react";
import messageIcon from "@/assets/Iconly/Curved/Bold/Message.svg";
import profileIcon from "@/assets/Iconly/Curved/Bold/Profile.svg";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const DepositTransfer = () => {
    return (
        <>
            <Main>
                <Container>
                    <div className="flex flex-col sm:flex-row">
                        <MenuBar />
                        <Content>
                            <div className="help-content flex flex-col-reverse sm:flex-row gap-10">
                                <div className="flex flex-col w-full">
                                    <div className="help-content-item">
                                        {/* Transfer head */}
                                        <div className="flex flex-col">
                                            <p className="font-bold text-2xl mb-2">
                                                Jumlah Transfer
                                            </p>
                                            <p className="text-slate-200 font-light">
                                                Masukkan jumlah transfer yang
                                                kalian inginkan dibawah ini.
                                                Pastikan saldo anda cukup.
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
                                                diinginkan dengan menggunakan
                                                email atau username.
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

                                        <Dialog>
                                            <DialogTrigger className="w-full">
                                                <Button className="mt-7 w-full h-[48px] text-lg font-bold px-5 rounded-full bg-[#D0FD00] hover:bg-[#1D1F21] text-[#1D1F21] hover:text-[#D0FD00] transition duration-300">
                                                    Kirim
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="bg-[#0c0d0d] border-0 min-w-[300px]">
                                                <DialogHeader>
                                                    <DialogTitle></DialogTitle>
                                                    <DialogDescription className="text-white flex flex-col justify-center items-center">
                                                        <div className="flex flex-col gap-4 items-center">
                                                            <span className="font-bold text-2xl">
                                                                Yakin Ingin Transfer?
                                                            </span>
                                                            <span className="text-[#D4D4D4]">
                                                                Apakah Anda
                                                                yakin ingin
                                                                melakukan top up
                                                                Rp{" "}
                                                                <span className="text-[#D0FD00]">
                                                                    100.000
                                                                </span>{" "}
                                                                saldo?
                                                            </span>
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
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>

                                <div className="help-content-item w-full sm:w-[35%] mt-0 sm:mt-0">
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
                                            <Button className=" bg-[#D0FD00] text-[#0C0D0D] hover:text-[#D0FD00] rounded-full font-semibold text-base">
                                                Top Up
                                            </Button>
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

export default DepositTransfer;
