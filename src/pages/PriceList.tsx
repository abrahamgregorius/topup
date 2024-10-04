import { Button } from "@/components/ui/button";
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
import { PersonIcon } from "@radix-ui/react-icons";
import { SearchIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import MenuBar from "@/components/partials/MenuBar";

const PriceList = () => {
    return (
        <>
            <Main>
                <Container>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        {/* Right history item */}
                        <div className="history-item w-full flex flex-col gap-4">
                            {/* Head */}
                            <div className="history-head">
                                <h2 className="text-xl font-bold">
                                    Daftar Harga
                                </h2>
                            </div>

                            {/* Filter */}
                            <div className="history-filter flex justify-between flex-col sm:flex-row">
                                <div className="hf-item flex flex-row gap-3">
                                    <div className="form-control hidden sm:flex items-center gap-2 w-[300px] h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                        <SearchIcon />
                                        <input
                                            type="text"
                                            id="password"
                                            placeholder="Cari item..."
                                            className="bg-[#1D1F21] w-full h-full outline-none"
                                        />
                                    </div>

                                    <div className="form-control hidden sm:flex items-center gap-2 w-[200px] h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                        <input
                                            type="text"
                                            id="password"
                                            placeholder="Pilih Produk"
                                            className="bg-[#1D1F21] w-full h-full outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="hf-item flex flex-row items-center gap-3">
                                    
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
                                            <TableHead>Code</TableHead>
                                            <TableHead>Item</TableHead>
                                            <TableHead>Harga</TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                ML-1692890632-JAI15CJD5Y9Y5OH
                                            </TableCell>
                                            <TableCell>Mobile Legend</TableCell>
                                            <TableCell>Rp 170.400</TableCell>
                                            <TableCell>
                                                <Badge className="bg-[#8CF9011F] text-[#D0FD00]">
                                                    Sukses
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                ML-1692890632-JAI15CJD5Y9Y5OH
                                            </TableCell>
                                            <TableCell>Mobile Legend</TableCell>
                                            <TableCell>Rp 170.400</TableCell>
                                            <TableCell>
                                                <Badge className="bg-[#8CF9011F] text-[#D0FD00]">
                                                    Sukses
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                ML-1692890632-JAI15CJD5Y9Y5OH
                                            </TableCell>
                                            <TableCell>Mobile Legend</TableCell>
                                            <TableCell>Rp 170.400</TableCell>
                                            <TableCell>
                                                <Badge className="bg-[#8CF9011F] text-[#D0FD00]">
                                                    Sukses
                                                </Badge>
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

export default PriceList;
