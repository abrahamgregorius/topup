import { Badge } from "@/components/ui/badge";
import Container from "@/components/partials/Container";
import Main from "@/components/partials/Main";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { SearchIcon } from "lucide-react";
import MenuBar from "@/components/partials/MenuBar";
import Content from "@/components/partials/Content";

const History = () => {
    return (
        <>
            <Main>
                <Container>
                    <div className="flex flex-col sm:flex-row">
                        {/* Left history item */}
                        <MenuBar></MenuBar>

                        {/* Right history item */}
                        <Content>
                            {/* Head */}
                            <div className="history-head">
                                <h2 className="text-xl font-bold">
                                    Riwayat Transaksi
                                </h2>
                            </div>

                            {/* Filter */}
                            <div className="history-filter flex justify-between flex-col sm:flex-row">
                                <div className="hf-item">
                                    <div className="form-control hidden sm:flex items-center gap-2 w-[500px] h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                        <SearchIcon />
                                        <input
                                            type="text"
                                            id="password"
                                            placeholder="Cari pesanan lewat Nomor Pesanan..."
                                            className="bg-[#1D1F21] w-full h-full outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="hf-item flex flex-row items-center gap-3">
                                    <label htmlFor="">Waktu</label>
                                    <div className="form-control hidden sm:flex items-center gap-2 w-[200px] h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                        <input
                                            type="text"
                                            id="password"
                                            placeholder="Cari pesanan"
                                            className="bg-[#1D1F21] w-full h-full outline-none"
                                        />
                                    </div>
                                    <label htmlFor="">Status</label>
                                    <div className="form-control hidden sm:flex items-center gap-2 w-[200px] h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                        <input
                                            type="text"
                                            id="password"
                                            placeholder="Cari pesanan"
                                            className="bg-[#1D1F21] w-full h-full outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="history-body">
                                {/* Table */}
                                <table className="w-full mt-7 border-collapse">
                                    <thead className="">
                                        <tr className="bg-[#1D1F21]">
                                            <td className="py-4 px-5 text-lg font-semibold">Nomor Pesanan</td>
                                            <td className="py-4 px-5 text-lg font-semibold">Game</td>
                                            <td className="py-4 px-5 text-lg font-semibold">Item</td>
                                            <td className="py-4 px-5 text-lg font-semibold">Harga</td>
                                            <td className="py-4 px-5 text-lg font-semibold">Status</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="">
                                            <td className="mt-3 py-3 px-5 bg-[#151617]" >SL-2139481234-4321421</td>
                                            <td className="mt-3 py-3 px-5 bg-[#151617]" >Mobile Legends</td>
                                            <td className="mt-3 py-3 px-5 bg-[#151617]" >706 Diamonds</td>
                                            <td className="mt-3 py-3 px-5 bg-[#151617]" >Dibayar</td>
                                            <td className="mt-3 py-3 px-5 bg-[#151617]" >
                                                <Badge className="bg-[#8CF9011F] text-[#D0FD00]">
                                                    Sukses
                                                </Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Content>
                    </div>
                </Container>
            </Main>
        </>
    );
};

export default History;
