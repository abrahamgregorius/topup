import Container from "@/components/partials/Container";
import Main from "@/components/partials/Main";
import { SearchIcon } from "lucide-react";
import Content from "@/components/partials/Content";
import Table from "@/components/partials/table/Table";
import TableHead from "@/components/partials/table/TableHead";
import TableBody from "@/components/partials/table/TableBody";
import TableHeader from "@/components/partials/table/TableHeader";
import TableRow from "@/components/partials/table/TableRow";
import TableData from "@/components/partials/table/TableData";
import BadgeNew from "@/components/partials/BadgeNew";
import Paginations from "@/components/partials/Paginations";

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
                                    <Table>
                                        <TableHead>
                                            <TableHeader>Code</TableHeader>
                                            <TableHeader>Item</TableHeader>
                                            <TableHeader>Harga</TableHeader>
                                            <TableHeader>Status</TableHeader>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableData>ML-1692890632-JAI15CJD5Y9Y5OH</TableData>
                                                <TableData>Mobile Legends</TableData>
                                                <TableData>Rp 170.400</TableData>
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
                            </div>
                        </Content>

                    </div>
                </Container>
            </Main>
        </>
    );
};

export default PriceList;
