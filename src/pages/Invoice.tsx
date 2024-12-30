import Container from "@/components/partials/Container";
import Content from "@/components/partials/Content";
import Main from "@/components/partials/Main";
import { Button } from "@/components/ui/button";
import gameIcon from "@/assets/Iconly/Curved/Bold/Game.svg";
import BadgeNew from "@/components/partials/BadgeNew";
import mlbb from "@/assets/mlbb.png";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const Invoice = () => {
    return (
        <>
            <Main>
                <Container>
                    <Content>
                        <div className="w-full rounded-3xl border border-[#151617]">
                            <div className="flex flex-col justify-between p-7">
                                <div className="flex gap-5 items-center">
                                    <div className="flex flex-col items-start gap-4">
                                        <div className="flex gap-2 items-center">
                                            <img
                                                src={gameIcon}
                                                alt=""
                                                className="h-[20px]"
                                            />
                                            <span>Terimakasih.</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className="font-bold text-3xl">
                                                Transaksi Sukses!
                                            </span>
                                            <span className="text-md">
                                                Pesanan kamu{" "}
                                                <span className="text-[#D0FD00]">
                                                    SL-1692890632-JAI15CJD5Y9Y5OH
                                                </span>{" "}
                                                telah dikirim dan akan segera
                                                tiba.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full justify-between gap-7 mt-7">
                                    <div className="left flex flex-col gap-1">
                                        <span>
                                            Transaksi ini dibuat pada tanggal
                                        </span>
                                        <span className="text-[#D0FD00]">
                                            09-08-2023 13:15:45
                                        </span>
                                    </div>
                                    <div className="right">
                                        <Button className="bg-[#D0FD00] text-[#0C0D0D] hover:text-[#D0FD00] w-full rounded-3xl font-semibold text-sm sm:text-lg py-6">
                                            Unduh Transaksi
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col sm:flex-row gap-8 py-8 px-8 sm:px-0">
                            <div className="left w-full sm:w-1/2">
                                <img src={mlbb} alt="" />

                                <div className="mt-7">
                                    <div className="title">
                                        <span className="text-xl font-bold">
                                            Mobile Legends
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="right w-full sm:w-1/2">
                                <div className="mt-7">
                                    <div className="title">
                                        <span className="text-xl font-bold">
                                            Detail Transaksi
                                        </span>
                                    </div>

                                    <div className="flex flex-col ml-5 mt-4 gap-4">
                                        <div className="flex justify-between align-items">
                                            <span className="text-[#D4D4D4]">
                                                Metode Pembayaran
                                            </span>
                                            <span className="font-semibold text-right">
                                                Gopay
                                            </span>
                                        </div>
                                        <div className="flex justify-between align-items">
                                            <span className="text-[#D4D4D4]">
                                                Nomor Pesanan
                                            </span>
                                            <span className="font-semibold text-right">
                                                SL-1692890632-JAI15CJD5Y9Y5OH
                                            </span>
                                        </div>
                                        <div className="flex justify-between align-items">
                                            <span className="text-[#D4D4D4]">
                                                Status Transaksi
                                            </span>
                                            <BadgeNew type="success">
                                                Sukses
                                            </BadgeNew>
                                        </div>
                                        <div className="flex justify-between align-items">
                                            <span className="text-[#D4D4D4]">
                                                Metode Pembayaran
                                            </span>
                                            <BadgeNew type="success">
                                                Dibayar
                                            </BadgeNew>
                                        </div>
                                        <div className="flex justify-between align-items">
                                            <span className="text-[#D4D4D4]">
                                                Pesan
                                            </span>
                                            <span className="w-[40%] text-right">
                                                Transaksi berhasil pada
                                                2023/08/09 14:23 WIB
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger>
                                                    <span className="text-lg font-bold">
                                                        Riwayat Transaksi
                                                    </span>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="grid grid-cols-1 gap-4">
                                                        <div className="w-full rounded-3xl border border-[#151617]">
                                                            <div className="flex flex-col justify-between p-7">
                                                                <div className="flex gap-5 items-center justify-between">
                                                                    <div className="flex flex-col items-start gap-4">
                                                                        <div className="flex flex-col gap-2 justify-center">
                                                                            <span className="font-semibold text-lg">
                                                                                System
                                                                            </span>
                                                                            <span>
                                                                                Transaksi berhasil pada 2023/08/09 14:23 WIB
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-start w-1/2 h-full text-right justify-end">
                                                                        <span>09 Aug 2023, 01:15:45</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full rounded-3xl border border-[#151617]">
                                                            <div className="flex flex-col justify-between p-7">
                                                                <div className="flex gap-5 items-center justify-between">
                                                                    <div className="flex flex-col items-start gap-4">
                                                                        <div className="flex flex-col gap-2 justify-center">
                                                                            <span className="font-semibold text-lg">
                                                                                System
                                                                            </span>
                                                                            <span>
                                                                                Transaksi berhasil pada 2023/08/09 14:23 WIB
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-start w-1/2 h-full text-right justify-end">
                                                                        <span>09 Aug 2023, 01:15:45</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full rounded-3xl border border-[#151617]">
                                                            <div className="flex flex-col justify-between p-7">
                                                                <div className="flex gap-5 items-center justify-between">
                                                                    <div className="flex flex-col items-start gap-4">
                                                                        <div className="flex flex-col gap-2 justify-center">
                                                                            <span className="font-semibold text-lg">
                                                                                System
                                                                            </span>
                                                                            <span>
                                                                                Transaksi berhasil pada 2023/08/09 14:23 WIB
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-start w-1/2 h-full text-right justify-end">
                                                                        <span>09 Aug 2023, 01:15:45</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>

                                    <div className="mt-5 flex flex-col gap-3">
                                        <Link to="/order">
                                            <Button className="bg-[#D0FD00] text-[#0C0D0D] hover:text-[#D0FD00] w-full rounded-3xl font-semibold text-sm sm:text-lg py-6">
                                                Top Up Sekarang
                                            </Button>
                                        </Link>
                                        <Link to="/">
                                            <Button className="text-[#D0FD00] bg-[#0C0D0D] w-full rounded-3xl font-semibold text-sm sm:text-lg py-6">
                                                Kembali ke Beranda
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Container>
            </Main>
        </>
    );
};

export default Invoice;
