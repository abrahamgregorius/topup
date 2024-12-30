import { Badge } from "@/components/ui/badge";
import Container from "@/components/partials/Container";
import Main from "@/components/partials/Main";
import { SearchIcon } from "lucide-react";
import MenuBar from "@/components/partials/MenuBar";
import Content from "@/components/partials/Content";
import BadgeNew from "@/components/partials/BadgeNew";
import Paginations from "@/components/partials/Paginations";
import TableData from "@/components/partials/table/TableData";
import Table from "@/components/partials/table/Table";
import TableHead from "@/components/partials/table/TableHead";
import TableHeader from "@/components/partials/table/TableHeader";
import TableBody from "@/components/partials/table/TableBody";
import TableRow from "@/components/partials/table/TableRow";

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
                                <Table>
                                    <TableHead>
                                        <TableHeader>Nomor Pesanan</TableHeader>
                                        <TableHeader>Game</TableHeader>
                                        <TableHeader>Item</TableHeader>
                                        <TableHeader>Harga</TableHeader>
                                        <TableHeader>Status</TableHeader>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableData>SL-2139481234-4321421</TableData>
                                            <TableData>Mobile Legends</TableData>
                                            <TableData>706 Diamonds</TableData>
                                            <TableData>Dibayar</TableData>
                                            <TableData>
                                                <BadgeNew type="success">
                                                    Sukses
                                                </BadgeNew>
                                            </TableData>
                                        </TableRow>
                                    </TableBody>
                                </Table>

                                <Paginations></Paginations>
                            </div>
                        </Content>
                    </div>
                </Container>
            </Main>
        </>
    );
};

export default History;
