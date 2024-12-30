import Container from "@/components/partials/Container";
import Content from "@/components/partials/Content";
import Main from "@/components/partials/Main";
import MenuBar from "@/components/partials/MenuBar";
import { SearchIcon, WalletIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Table from "@/components/partials/table/Table";
import TableHeader from "@/components/partials/table/TableHeader";
import TableHead from "@/components/partials/table/TableHead";
import TableBody from "@/components/partials/table/TableBody";
import TableRow from "@/components/partials/table/TableRow";
import TableData from "@/components/partials/table/TableData";
import Paginations from "@/components/partials/Paginations";

const DepositMutasi = () => {
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
                                        Mutasi Saldo
                                    </p>
                                    <p className="text-slate-200 font-light">
                                        Menampilkan data mutasi saldo yang telah
                                        Anda lakukan selama periode yang
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

                                <Table>
                                    <TableHead>
                                        <TableHeader>Mutasi</TableHeader>
                                        <TableHeader>Jenis</TableHeader>
                                        <TableHeader>Saldo</TableHeader>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableData leftTable={false}>
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-lg">
                                                        SL-1692890632-JAI15CJD5Y9Y5OH
                                                    </span>
                                                    <span className="text-md">
                                                        23 Aug 2023, 16:83:23
                                                    </span>
                                                </div>
                                            </TableData>
                                            <TableData>Top Up Game</TableData>
                                            <TableData className="text-[#F63030]">
                                                - Rp 140.700
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

export default DepositMutasi;
