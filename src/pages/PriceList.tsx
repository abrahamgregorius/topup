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
import Content from "@/components/partials/Content";

const PriceList = () => {
    return (
        <>
            <Main>
                <Container>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Content>
                            <div className="plist-item w-full flex flex-col gap-4">
                                <div className="plist-head">
                                    <h2 className="text-xl font-bold">
                                        Daftar Harga
                                    </h2>
                                </div>

                                {/* Filter */}
                                <div className="plist-filter flex justify-between flex-col sm:flex-row">
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
                                        <div className="form-control flex items-center gap-2 w-[200px] h-[48px] px-5 rounded-full bg-[#1D1F21]">
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
                                <div className="plist-body">
                                    <table className="w-full border-collapse">
                                        <thead className="">
                                            <tr className="bg-[#1D1F21]">
                                                <td className="py-4 px-5 text-lg font-semibold">Code</td>
                                                <td className="py-4 px-5 text-lg font-semibold">Item</td>
                                                <td className="py-4 px-5 text-lg font-semibold">Harga</td>
                                                <td className="py-4 px-5 text-lg font-semibold">Status</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-[#151617] hover:bg-neutral-500 transition duration-200">
                                                <td className="mt-3 py-3 px-5" >ML-1692890632-JAI15CJD5Y9Y5OH</td>
                                                <td className="mt-3 py-3 px-5 " >Mobile Legends</td>
                                                <td className="mt-3 py-3 px-5 " >Rp 170.400</td>
                                                <td className="mt-3 py-3 px-5 " >
                                                    <Badge className="bg-[#8CF9011F] text-[#D0FD00]">
                                                        Sukses
                                                    </Badge>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </Content>

                    </div>
                </Container>
            </Main>
        </>
    );
};

export default PriceList;
