import { Button } from "@/components/partials/button";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/Container";
import Main from "@/components/ui/Main";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SearchIcon } from "lucide-react";

const History = () => {
    return (
        <>
            <Main>
                <Container>
                    <div className="flex flex-col sm:flex-row">

                        {/* Left history item */}
                        <div className="history-item "></div>
                        
                        {/* Right history item */}
                        <div className="history-item w-full flex flex-col gap-4">

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
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nomor Pesanan</TableHead>
                                        <TableHead>Game</TableHead>
                                        <TableHead>Item</TableHead>
                                        <TableHead>Harga</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>ML-1692890632-JAI15CJD5Y9Y5OH</TableCell>
                                        <TableCell>Mobile Legend</TableCell>
                                        <TableCell>706 Diamonds</TableCell>
                                        <TableCell>Rp 170.400</TableCell>
                                        <TableCell>
                                            <Badge className="bg-[#8CF9011F] text-[#D0FD00]">Sukses</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>ML-1692890632-JAI15CJD5Y9Y5OH</TableCell>
                                        <TableCell>Mobile Legend</TableCell>
                                        <TableCell>706 Diamonds</TableCell>
                                        <TableCell>Rp 170.400</TableCell>
                                        <TableCell>
                                            <Badge className="bg-[#8CF9011F] text-[#D0FD00]">Sukses</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>ML-1692890632-JAI15CJD5Y9Y5OH</TableCell>
                                        <TableCell>Mobile Legend</TableCell>
                                        <TableCell>706 Diamonds</TableCell>
                                        <TableCell>Rp 170.400</TableCell>
                                        <TableCell>
                                            <Badge className="bg-[#8CF9011F] text-[#D0FD00]">Sukses</Badge>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            </div>
                        
                        </div>
                    </div>
                </Container>
            </Main>
        </>
    );
};

export default History;
