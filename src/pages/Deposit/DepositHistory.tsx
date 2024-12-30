import Container from "@/components/partials/Container";
import Content from "@/components/partials/Content";
import Main from "@/components/partials/Main";
import MenuBar from "@/components/partials/MenuBar";
import Paginations from "@/components/partials/Paginations";
import Table from "@/components/partials/table/Table";
import TableBody from "@/components/partials/table/TableBody";
import TableData from "@/components/partials/table/TableData";
import TableHead from "@/components/partials/table/TableHead";
import TableHeader from "@/components/partials/table/TableHeader";
import TableRow from "@/components/partials/table/TableRow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClockIcon, SearchIcon, WalletIcon } from "lucide-react";
import React from "react";

const DepositHistory = () => {
    return (
        <>
            <Main>
                <Container>
                    <div className="flex flex-col sm:flex-row">
                        <MenuBar />
                        <Content>
                            {/* Card Saldo */}
                            <div className="flex flex-row gap-4 sm:gap-0 justify-between rounded-3xl p-7 bg-[#151617]">
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
                            </div>

                            <div className="deposit-content">
                                {/* Riwayat Deposit */}
                                <div className="mt-7 flex flex-col">
                                    <p className="font-bold text-2xl mb-2">
                                        Riwayat Deposit
                                    </p>
                                    <p className="text-slate-200 font-light">
                                        Menampilkan data riwayat deposit yang
                                        telah Anda lakukan selama periode yang
                                        dipilih.
                                    </p>
                                </div>

                                {/* Filter */}
                                <div className="history-filter mt-7 flex flex-col justify-between sm:flex-row">
                                    <div className="hf-item">
                                        <div className="form-control flex items-center gap-2 w-full sm:w-[500px] h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                            <SearchIcon />
                                            <input
                                                type="text"
                                                id="password"
                                                placeholder="Cari pesanan lewat Nomor Pesanan..."
                                                className="bg-[#1D1F21] w-full h-full outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="hf-item flex flex-col items-start sm:items-center sm:flex-row gap-3 my-7 sm:my-0">
                                        <label htmlFor="">Waktu</label>
                                        <div className="form-control flex flex-col gap-2 w-[200px] h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                            <select
                                                id="password"
                                                className="bg-[#1D1F21] w-full h-full outline-none"
                                            >
                                                <option value="">
                                                    7 Hari Terakhir
                                                </option>
                                            </select>
                                        </div>
                                        <label htmlFor="">Status</label>
                                        <div className="form-control flex flex-col gap-2 w-[200px] h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                            <select
                                                id="password"
                                                className="bg-[#1D1F21] w-full h-full outline-none"
                                            >
                                                <option value="">Semua</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Table */}
                                <Table>
                                    <TableHead>
                                        <TableHeader>Nomor Pesanan</TableHeader>
                                        <TableHeader>Saldo</TableHeader>
                                        <TableHeader>Metode Pembayaran</TableHeader>
                                        <TableHeader>Status</TableHeader>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableData>SL-2139481234</TableData>
                                            <TableData className="text-[#D0FD00]">+ Rp. 200.000</TableData>
                                            <TableData>Bank BRI</TableData>
                                            <TableData>Dibayar</TableData>
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

export default DepositHistory;
