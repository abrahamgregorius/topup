import Container from "@/components/partials/Container";
import Content from "@/components/partials/Content";
import Main from "@/components/partials/Main";
import MenuBar from "@/components/partials/MenuBar";
import { Badge, SearchIcon } from "lucide-react";
import React from "react";

const Activity = () => {
    return (
        <>
            <Main>
                <Container>
                    <div className="flex flex-col sm:flex-row">
                        <MenuBar />
                        <Content>
                            {/* Riwayat Deposit */}
                            <div className="flex flex-col">
                                <p className="font-bold text-2xl mb-2">
                                    Aktivitas Akun
                                </p>
                                <p className="text-slate-200 font-light">
                                    Menampilkan data Aktivitas Akun selama
                                    periode yang dipilih.
                                </p>
                            </div>

                            {/* Filter */}
                            <div className="activity-filter mt-3 flex flex-col justify-between sm:flex-row">
                                <div className="hf-item">
                                    <div className="form-control flex items-center gap-2 w-full sm:w-[500px] h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                        <SearchIcon />
                                        <input
                                            type="text"
                                            id="password"
                                            placeholder="Cari aktivitas akun melalui IP..."
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
                                </div>
                            </div>

                            <div className="w-full mt-7 overflow-x-scroll sm:overflow-auto">
                                {/* Table */}
                                <table className="w-full">
                                    <thead className="">
                                        <tr className="bg-[#1D1F21]">
                                            <th className="py-4 px-5 text-lg font-semibold">
                                                Tanggal
                                            </th>
                                            <th className="py-4 px-5 text-lg font-semibold">
                                                Pesan
                                            </th>
                                            <th className="py-4 px-5 text-lg font-semibold">
                                                IP
                                            </th>
                                            <th className="py-4 px-5 text-lg font-semibold">
                                                Device
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-[#151617] border-x-0 border-y-4 border-black">
                                            <td className="mt-3 py-3 px-5">
                                                23 Aug 2023, 16:83:23
                                            </td>
                                            <td className="mt-3 py-3 px-5 text-center">
                                                Top Up Game
                                            </td>
                                            <td className="mt-3 py-3 px-5 text-center">
                                                <p>162.158.162.110</p>
                                                <p>(Singapore SG)</p>
                                            </td>
                                            <td className="mt-3 py-3 px-5 pb-8 text-center flex flex-col gap-1">
                                                <p>
                                                Mozilla/5.0 (linux; Android 10;SM - A750GN
                                                </p>
                                                <p>
                                                AppleWebKit/537.36 (KHTML, like Gecko)
                                                </p>
                                                <p>
                                                Chrome/103.0.0.0 Mobile Safari/537.36
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="bg-[#151617] border-x-0 border-y-4 border-black">
                                            <td className="mt-3 py-3 px-5">
                                                23 Aug 2023, 16:83:23
                                            </td>
                                            <td className="mt-3 py-3 px-5 text-center">
                                                Top Up Game
                                            </td>
                                            <td className="mt-3 py-3 px-5 text-center">
                                                <p>162.158.162.110</p>
                                                <p>(Singapore SG)</p>
                                            </td>
                                            <td className="mt-3 py-3 px-5 pb-8 text-center flex flex-col gap-1">
                                                <p>
                                                Mozilla/5.0 (linux; Android 10;SM - A750GN
                                                </p>
                                                <p>
                                                AppleWebKit/537.36 (KHTML, like Gecko)
                                                </p>
                                                <p>
                                                Chrome/103.0.0.0 Mobile Safari/537.36
                                                </p>
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

export default Activity;
