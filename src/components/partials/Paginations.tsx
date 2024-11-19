import React from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

const Paginations = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between w-full mt-5">
                <div className="hf-item flex flex-row items-center gap-3">
                    <div className="form-control flex flex-col gap-2 w-[100px] h-[48px] px-5 rounded-full bg-[#1D1F21]">
                        <select
                            id="password"
                            className="bg-[#1D1F21] text-[#D0FD00] w-full h-full outline-none"
                        >
                            <option value="">10</option>
                        </select>
                    </div>
                    <div className="">
                        <span>
                            Menampilkan 10 dari{" "}
                            <span className="text-[#D0FD00]">142</span>{" "}
                            transaksi
                        </span>
                    </div>
                </div>

                <div className="flex flex-end">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </>
    );
};

export default Paginations;
