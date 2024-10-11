import Container from "@/components/partials/Container";
import Content from "@/components/partials/Content";
import Main from "@/components/partials/Main";
import MenuBar from "@/components/partials/MenuBar";
import { Button } from "@/components/ui/button";
import { SearchIcon, WalletIcon } from "lucide-react";
import React from "react";
import rect from "@/assets/rect.png";

const icons = [
    {
        name: "Telegram",
        img: rect,
    },
    {
        name: "WhatsApp",
        img: rect,
    },
    {
        name: "Email",
        img: rect,
    },
];

const Help = () => {
    return (
        <>
            <Main>
                <Container>
                    <div className="flex flex-col sm:flex-row">
                        <MenuBar />
                        <Content>
                            {/* Card Saldo */}
                            {/* <div className="flex flex-row gap-4 sm:gap-0 justify-between rounded-3xl p-7 bg-[#151617]">
                                <div className="flex flex-col gap-2">
                                    <p className="text-3xl text-[#D0FD00] font-bold">
                                        Rp 273.000
                                    </p>
                                    <p className="flex gap-2 text-base">
                                        <WalletIcon /> Saldo Anda
                                    </p>
                                </div>
                                <div className="flex items-center justify-end gap-3">
                                    <Button className="py-5 bg-[#D0FD00] text-[#0C0D0D] hover:text-[#D0FD00] rounded-full font-semibold text-base">
                                        Top Up
                                    </Button>
                                </div>
                            </div> */}

                            <div className="help-content">
                                {/* Help head */}
                                <div className="flex flex-col">
                                    <p className="font-bold text-2xl mb-2">
                                        Bantuan
                                    </p>
                                    <p className="text-slate-200 font-light">
                                        Anda dapat menghubungi kami melalui
                                        beberapa platform dibawah ini.
                                    </p>
                                </div>

                                {/* Help Icons */}
                                <div className="icons mt-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {icons.map((item, index) => {
                                        return (
                                            <>
                                                <button
                                                    key={index}
                                                    className="icon rounded-2xl gap-4 flex flex-col px-10 py-12 justify-center items-center bg-[#151617]"
                                                >
                                                    <img
                                                        src={item.img}
                                                        alt=""
                                                    />
                                                    <p className="font-semibold">
                                                        {item.name}
                                                    </p>
                                                </button>
                                            </>
                                        );
                                    })}
                                </div>

                                {/* Help form */}
                                <div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-7">
                                        <div className="input flex flex-col gap-3">
                                            <label className="font-semibold" htmlFor="">Pilih Tipe</label>
                                            <div className="form-control flex items-center gap-2 px-5 py-3 rounded-full bg-[#1D1F21]">
                                                <select
                                                    className="bg-[#1D1F21]  rounded-full w-full h-full outline-none"
                                                    name=""
                                                    id=""
                                                >
                                                    <option value="">
                                                        Pilih tipe
                                                    </option>
                                                    <option value="">
                                                        Pilih tipe
                                                    </option>
                                                    <option value="">
                                                        Pilih tipe
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="input flex flex-col gap-3">
                                            <label className="font-semibold" htmlFor="">Nama Anda</label>
                                            <div className="form-control flex items-center gap-2 w-full h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                                <input
                                                    type="text"
                                                    id="password"
                                                    placeholder="Masukkan nama anda"
                                                    className="bg-[#1D1F21] w-full h-full outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-9 mt-7">
                                        <div className="input flex flex-col gap-3">
                                            <label className="font-semibold" htmlFor="">Nomor WhatsApp</label>
                                            <div className="form-control flex items-center gap-2 w-full h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                                <input
                                                    type="text"
                                                    placeholder="Masukkan no whatsapp"
                                                    className="bg-[#1D1F21] w-full h-full outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-9 mt-7">
                                        <div className="input flex flex-col gap-3">
                                            <label className="font-semibold" htmlFor="">Deskripsi</label>
                                            <div className="form-control flex items-center gap-2 w-full h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                                <input
                                                    type="text"
                                                    placeholder="Masukkan pesan"
                                                    className="bg-[#1D1F21] w-full h-full outline-none"
                                                />
                                            </div>
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

export default Help;
