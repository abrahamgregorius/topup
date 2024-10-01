import { Button } from "@/components/partials/button";
import Container from "@/components/ui/Container";
import Main from "@/components/ui/Main";
import { SearchIcon } from "lucide-react";

const History = () => {
    return (
        <>
            <Main>
                <Container>
                    <div className="flex flex-col sm:flex-row">
                        {/* <div className="history-item w-[350px]"></div> */}
                        <div className="history-item w-full flex flex-col gap-4">
                            <div className="history-head">
                                <h2 className="text-xl font-bold">
                                    Riwayat Transaksi
                                </h2>
                            </div>

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
                        </div>
                    </div>
                </Container>
            </Main>
        </>
    );
};

export default History;
