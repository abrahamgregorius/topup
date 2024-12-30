import Container from "@/components/partials/Container";
import Content from "@/components/partials/Content";
import Main from "@/components/partials/Main";
import diamond from "@/assets/diamond.png";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import dana from "@/assets/Ewallet/dana.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import mlbb from "@/assets/mlbb.png";
import BadgeNew from "@/components/partials/BadgeNew";
import shield from "@/assets/Iconly/Curved/Bold/Shield Done.svg";
import { Link } from "react-router-dom";

const Order = () => {
    return (
        <>
            <Main>
                <Container>
                    <Content col={false} className="gap-7">
                        <div className="left w-1/2">
                            <img src={mlbb} alt="" />

                            <div className="mt-7">
                                <div className="title">
                                    <span className="text-xl font-bold">
                                        Mobile Legends
                                    </span>
                                </div>

                                <div className="badges flex flex-wrap gap-2 mt-4">
                                    <BadgeNew
                                        type="info"
                                        className="py-2 px-5 gap-2 rounded-2xl"
                                    >
                                        <img
                                            src={shield}
                                            className="h-[20px]"
                                            alt=""
                                        />
                                        <span>Jaminan Layanan</span>
                                    </BadgeNew>
                                    <BadgeNew
                                        type="info"
                                        className="py-2 px-5 gap-2 rounded-2xl"
                                    >
                                        <img
                                            src={shield}
                                            className="h-[20px]"
                                            alt=""
                                        />

                                        <span>Layanan Pelanggan 24/7</span>
                                    </BadgeNew>
                                    <BadgeNew
                                        type="info"
                                        className="py-2 px-5 gap-2 rounded-2xl"
                                    >
                                        {" "}
                                        <img
                                            src={shield}
                                            className="h-[20px]"
                                            alt=""
                                        />
                                        <span>Pembayaran Aman</span>
                                    </BadgeNew>
                                    <BadgeNew
                                        type="info"
                                        className="py-2 px-5 gap-2 rounded-2xl"
                                    >
                                        {" "}
                                        <img
                                            src={shield}
                                            className="h-[20px]"
                                            alt=""
                                        />
                                        <span>Pengiriman Instant</span>
                                    </BadgeNew>
                                </div>

                                <div className="description mt-7">
                                    <span className="font-semibold">
                                        Top Up Diamond Mobile Legends Hanya Dalam Hitungan Detik!
                                    </span>

                                    <div className="flex flex-col mt-3">
                                        <ol className="list-decimal ml-4">
                                            <li>Cukup Masukan User ID dan Zone ID MLBB Anda.</li>
                                            <li>Pilih Jumlah Diamond Yang Anda inginkan.</li>
                                            <li>Pilih Pembayaran Yang Anda Gunakan Dan Selesaikan Pembayaran.</li>
                                            <li>Dan Diamond Akan Secara Langsung Ditambahkan Ke Akun Mobile Legends Anda.</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="right w-full flex flex-col gap-4 sm:px-0">
                            <div className="rounded-3xl bg-[#151617]">
                                <div className="flex flex-col justify-between p-7">
                                    <div className="flex gap-5 items-center">
                                        <div className="rounded-full flex justify-center items-center h-14 w-14 bg-[#D0FD00] text-black font-bold text-2xl">
                                            1
                                        </div>
                                        <div className="flex flex-col items-start gap-2">
                                            <div className="flex flex-col gap-2">
                                                <span className="font-bold text-2xl">
                                                    Masukkan User ID
                                                </span>
                                                <span className="text-sm">
                                                    Masukkan User ID dibawah ini
                                                    dengan benar.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-7">
                                        <div className="input flex flex-col gap-3">
                                            <label
                                                className="font-semibold"
                                                htmlFor=""
                                            >
                                                User ID
                                            </label>
                                            <div className="form-control flex items-center gap-2 px-5 py-3 rounded-full bg-[#1D1F21]">
                                                <input
                                                    className="bg-[#1D1F21]  rounded-full w-full h-full outline-none"
                                                    name=""
                                                    id=""
                                                    placeholder="Masukkan user ID"
                                                />
                                            </div>
                                        </div>
                                        <div className="input flex flex-col gap-3">
                                            <label
                                                className="font-semibold"
                                                htmlFor=""
                                            >
                                                Server ID
                                            </label>
                                            <div className="form-control flex items-center gap-2 w-full h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                                <input
                                                    type="text"
                                                    id="password"
                                                    placeholder="Masukkan server ID"
                                                    className="bg-[#1D1F21] w-full h-full outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl bg-[#151617]">
                                <div className="flex flex-col justify-between p-7">
                                    <div className="flex gap-5 items-center">
                                        <div className="rounded-full flex justify-center items-center h-14 w-14 bg-[#D0FD00] text-black font-bold text-2xl">
                                            2
                                        </div>
                                        <div className="flex flex-col items-start gap-2">
                                            <div className="flex flex-col gap-2">
                                                <span className="font-bold text-2xl">
                                                    Pilih Nominal Top Up
                                                </span>
                                                <span className="text-sm">
                                                    Pilih nominal top up dibawah
                                                    ini, sesuai yang anda
                                                    inginkan.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-7">
                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                            <div className="w-full flex flex-col h-full items-start ">
                                                <div className="flex flex-col h-full justify-between items-start">
                                                    <div className="flex flex-col items-start gap-1">
                                                        <p className="font-bold text-left text-xl">
                                                            Weekly Diamond Pass
                                                        </p>
                                                        <p className="text-md">
                                                            Rp 200.000
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-1/2 h-[110px] justify-end items-end">
                                                <img
                                                    src={diamond}
                                                    className="h-[45px] self-end"
                                                />
                                            </div>
                                        </button>
                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                            <div className="w-full flex flex-col h-full items-start ">
                                                <div className="flex flex-col h-full justify-between items-start">
                                                    <div className="flex flex-col items-start gap-1">
                                                        <p className="font-bold text-left text-xl">
                                                            Weekly Diamond Pass
                                                        </p>
                                                        <p className="text-md">
                                                            Rp 200.000
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-1/2 h-[110px] justify-end items-end">
                                                <img
                                                    src={diamond}
                                                    className="h-[45px] self-end"
                                                />
                                            </div>
                                        </button>
                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                            <div className="w-full flex flex-col h-full items-start ">
                                                <div className="flex flex-col h-full justify-between items-start">
                                                    <div className="flex flex-col items-start gap-1">
                                                        <p className="font-bold text-left text-xl">
                                                            Weekly Diamond Pass
                                                        </p>
                                                        <p className="text-md">
                                                            Rp 200.000
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-1/2 h-[110px] justify-end items-end">
                                                <img
                                                    src={diamond}
                                                    className="h-[45px] self-end"
                                                />
                                            </div>
                                        </button>
                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                            <div className="w-full flex flex-col h-full items-start ">
                                                <div className="flex flex-col h-full justify-between items-start">
                                                    <div className="flex flex-col items-start gap-1">
                                                        <p className="font-bold text-left text-xl">
                                                            Weekly Diamond Pass
                                                        </p>
                                                        <p className="text-md">
                                                            Rp 200.000
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-1/2 h-[110px] justify-end items-end">
                                                <img
                                                    src={diamond}
                                                    className="h-[45px] self-end"
                                                />
                                            </div>
                                        </button>
                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                            <div className="w-full flex flex-col h-full items-start ">
                                                <div className="flex flex-col h-full justify-between items-start">
                                                    <div className="flex flex-col items-start gap-1">
                                                        <p className="font-bold text-left text-xl">
                                                            Weekly Diamond Pass
                                                        </p>
                                                        <p className="text-md">
                                                            Rp 200.000
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-1/2 h-[110px] justify-end items-end">
                                                <img
                                                    src={diamond}
                                                    className="h-[45px] self-end"
                                                />
                                            </div>
                                        </button>
                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                            <div className="w-full flex flex-col h-full items-start ">
                                                <div className="flex flex-col h-full justify-between items-start">
                                                    <div className="flex flex-col items-start gap-1">
                                                        <p className="font-bold text-left text-xl">
                                                            Weekly Diamond Pass
                                                        </p>
                                                        <p className="text-md">
                                                            Rp 200.000
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-1/2 h-[110px] justify-end items-end">
                                                <img
                                                    src={diamond}
                                                    className="h-[45px] self-end"
                                                />
                                            </div>
                                        </button>
                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                            <div className="w-full flex flex-col h-full items-start ">
                                                <div className="flex flex-col h-full justify-between items-start">
                                                    <div className="flex flex-col items-start gap-1">
                                                        <p className="font-bold text-left text-xl">
                                                            Weekly Diamond Pass
                                                        </p>
                                                        <p className="text-md">
                                                            Rp 200.000
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-1/2 h-[110px] justify-end items-end">
                                                <img
                                                    src={diamond}
                                                    className="h-[45px] self-end"
                                                />
                                            </div>
                                        </button>
                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                            <div className="w-full flex flex-col h-full items-start ">
                                                <div className="flex flex-col h-full justify-between items-start">
                                                    <div className="flex flex-col items-start gap-1">
                                                        <p className="font-bold text-left text-xl">
                                                            Weekly Diamond Pass
                                                        </p>
                                                        <p className="text-md">
                                                            Rp 200.000
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-1/2 h-[110px] justify-end items-end">
                                                <img
                                                    src={diamond}
                                                    className="h-[45px] self-end"
                                                />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl bg-[#151617]">
                                <div className="flex flex-col justify-between p-7">
                                    <div className="flex gap-5 items-center">
                                        <div className="rounded-full flex justify-center items-center h-14 w-14 bg-[#D0FD00] text-black font-bold text-2xl">
                                            3
                                        </div>
                                        <div className="flex flex-col items-start gap-2">
                                            <div className="flex flex-col gap-2">
                                                <span className="font-bold text-2xl">
                                                    Pilih Metode Pembayaran
                                                </span>
                                                <span className="text-sm">
                                                    Pilih metode pembayaran.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mt-7">
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger>
                                                    QRIS
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mt-7">
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-2">
                                                <AccordionTrigger>
                                                    E-Wallet
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mt-7">
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-3">
                                                <AccordionTrigger>
                                                    Convenience Store
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mt-7">
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-4">
                                                <AccordionTrigger>
                                                    <div className="flex justify-between">
                                                        Credit/Debit Card
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mt-7">
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                        <button className="px-8 py-8 bg-[#151617] rounded-3xl border border-[#202328] text-[#D4D4D4] flex flex-row">
                                                            <div className="w-full flex flex-col h-full items-start">
                                                                <div className="flex flex-col h-full justify-end">
                                                                    <div className="flex flex-col items-start gap-1">
                                                                        <p className="font-semibold text-left text-xl text-[#D0FD00]">
                                                                            Rp
                                                                            200.000
                                                                        </p>
                                                                        <p className="text-md">
                                                                            Gopay
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-1/2 h-[110px] justify-end items-start">
                                                                <img
                                                                    src={dana}
                                                                    className=""
                                                                />
                                                            </div>
                                                        </button>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl bg-[#151617]">
                                <div className="flex flex-col justify-between p-7">
                                    <div className="flex gap-5 items-center">
                                        <div className="rounded-full flex justify-center items-center h-14 w-14 bg-[#D0FD00] text-black font-bold text-2xl">
                                            4
                                        </div>
                                        <div className="flex flex-col items-start gap-2">
                                            <div className="flex flex-col gap-2">
                                                <span className="font-bold text-2xl">
                                                    Gunakan Kode Promo
                                                    (Opsional)
                                                </span>
                                                <span className="text-sm">
                                                    Jika anda punya kode promo,
                                                    silahkan untuk memasukkannya
                                                    di bawah ini.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="gap-7 mt-7">
                                            <div className="input flex flex-col w-full gap-3">
                                                <label
                                                    className="font-semibold"
                                                    htmlFor=""
                                                >
                                                    Kode Promo
                                                </label>
                                                <div className="form-control flex w-full items-center gap-2 pl-5 pr-3 py-2 rounded-full bg-[#1D1F21]">
                                                    <input
                                                        className="bg-[#1D1F21] rounded-full w-full h-full outline-none"
                                                        name=""
                                                        id=""
                                                        placeholder="Masukkan kode"
                                                    />
                                                    <Button className="bg-[#D0FD00] text-[#0C0D0D] hover:text-[#D0FD00] rounded-3xl font-semibold text-sm sm:text-lg py-6">
                                                        Masuk
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl bg-[#151617]">
                                <div className="flex flex-col justify-between p-7">
                                    <div className="flex gap-5 items-center">
                                        <div className="rounded-full flex justify-center items-center h-14 w-14 bg-[#D0FD00] text-black font-bold text-2xl">
                                            5
                                        </div>
                                        <div className="flex flex-col items-start gap-2">
                                            <div className="flex flex-col gap-2">
                                                <span className="font-bold text-2xl">
                                                    Masukkan Detail Anda
                                                </span>
                                                <span className="text-sm">
                                                    Silahkan masukkan email anda
                                                    untuk menerima bukti
                                                    pembelian anda
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="gap-7 mt-7">
                                            <div className="input flex flex-col w-full gap-3">
                                                <label
                                                    className="font-semibold"
                                                    htmlFor=""
                                                >
                                                    Email
                                                </label>
                                                <div className="form-control flex w-full items-center gap-2 px-5 py-4 rounded-full bg-[#1D1F21]">
                                                    <input
                                                        className="bg-[#1D1F21] rounded-full w-full h-full outline-none"
                                                        name=""
                                                        id=""
                                                        placeholder="Masukkan email anda"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-control flex gap-2 my-7">
                                            <Checkbox
                                                id="remember-me"
                                                className={`h-5 w-5 rounded border-[#D0FD00]`}
                                            ></Checkbox>
                                            <label htmlFor="remember-me">
                                                Ya, saya ingin menerima berita
                                                dan promosi melalui SMS atau
                                                WhatsApp
                                            </label>
                                        </div>

                                        <div className="gap-7 mt-5">
                                            <div className="input flex flex-col w-full gap-3">
                                                <label
                                                    className="font-semibold"
                                                    htmlFor=""
                                                >
                                                    Masukkan Nomor WhatsApp
                                                </label>
                                                <div className="form-control flex w-full items-center gap-2 px-5 py-4 rounded-full bg-[#1D1F21]">
                                                    <input
                                                        className="bg-[#1D1F21] rounded-full w-full h-full outline-none"
                                                        name=""
                                                        id=""
                                                        placeholder="Masukkan Nomor WhatsApp"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link to="/invoice" className="w-full">
                                <Button className="bg-[#D0FD00] text-[#0C0D0D] hover:text-[#D0FD00] w-full rounded-3xl font-semibold text-sm sm:text-lg py-6">
                                    Top Up Sekarang
                                </Button>
                            </Link>
                        </div>
                    </Content>
                </Container>
            </Main>
        </>
    );
};

export default Order;
