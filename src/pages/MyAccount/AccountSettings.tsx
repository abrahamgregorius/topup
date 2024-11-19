import Container from "@/components/partials/Container";
import Content from "@/components/partials/Content";
import Main from "@/components/partials/Main";
import MenuBar from "@/components/partials/MenuBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TriangleAlert } from "lucide-react";

const AccountSettings = () => {
    return (
        <Main>
            <Container>
                <div className="flex flex-col sm:flex-row">
                    <MenuBar></MenuBar>
                    <Content>
                        <div className="settings-content">
                            {/* Form */}
                            <div>
                                {/* Pengaturan Profil */}
                                <div>
                                    {/* Settings head */}
                                    <div className="flex flex-col">
                                        <p className="font-bold text-2xl mb-2">
                                            Pengaturan Profil
                                        </p>
                                        <p className="text-slate-200 font-light">
                                            Informasi ini bersifat rahasia, jadi
                                            berhati-hatilah dengan apa yang Anda
                                            bagikan.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-7">
                                        <div className="input flex flex-col gap-3">
                                            <label
                                                className="font-semibold"
                                                htmlFor=""
                                            >
                                                Nama Anda
                                            </label>
                                            <div className="form-control flex items-center gap-2 px-5 py-3 rounded-full bg-[#1D1F21]">
                                                <input
                                                    className="bg-[#1D1F21]  rounded-full w-full h-full outline-none"
                                                    name=""
                                                    id=""
                                                    placeholder="Masukkan nama anda"
                                                />
                                            </div>
                                        </div>
                                        <div className="input flex flex-col gap-3">
                                            <label
                                                className="font-semibold"
                                                htmlFor=""
                                            >
                                                Username
                                            </label>
                                            <div className="form-control flex items-center gap-2 w-full h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                                <input
                                                    type="text"
                                                    id="password"
                                                    placeholder="Masukkan username anda"
                                                    className="bg-[#1D1F21] w-full h-full outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-9 mt-7">
                                        <div className="input flex flex-col gap-3">
                                            <label
                                                className="font-semibold"
                                                htmlFor=""
                                            >
                                                Alamat Email
                                            </label>
                                            <div className="form-control flex items-center gap-2 w-full h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                                <input
                                                    type="text"
                                                    placeholder="Masukkan Email Anda"
                                                    className="bg-[#1D1F21] w-full h-full outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-9 mt-7">
                                        <div className="input flex flex-col gap-3">
                                            <label
                                                className="font-semibold"
                                                htmlFor=""
                                            >
                                                Nomor Handphone
                                            </label>
                                            <div className="form-control flex items-center gap-2 w-full h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                                <input
                                                    type="text"
                                                    placeholder="Masukkan nomor handphone"
                                                    className="bg-[#1D1F21] w-full h-full outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* PIN Section */}
                                    <div className="flex flex-row w-full items-end justify-between">
                                        <div className="flex flex-col mt-7">
                                            <div className="flex gap-3 items-center">
                                                <span className="font-bold text-2xl mb-2">
                                                    PIN
                                                </span>
                                                <Badge className="text-[#D0FD00] px-2 py-1 bg-[#8CF9011F] rounded-xl">
                                                    ON
                                                </Badge>
                                            </div>
                                            <p className="text-slate-200 font-light">
                                                Dibutuhkan untuk melakukan
                                                transaksi pembelian menggunakan
                                                Saldo Wallet
                                            </p>
                                        </div>
                                        <div className="flex flex-row h-[100px] gap-4 justify-center items-end">
                                            <Button
                                                className="bg-zinc-800 rounded-lg"
                                                variant={"default"}
                                            >
                                                Reset PIN
                                            </Button>
                                            <Button
                                                className=""
                                                variant={"ghost"}
                                            >
                                                Nonaktifkan
                                            </Button>
                                        </div>
                                    </div>

                                    <button className="mt-7 h-[48px] text-lg font-bold px-5 rounded-full bg-[#D0FD00] hover:bg-[#1D1F21] text-[#1D1F21] hover:text-[#D0FD00] transition duration-300">
                                        Simpan Profil
                                    </button>
                                </div>

                                {/* API key */}
                                <div className="mt-7">
                                    {/* API key head */}
                                    <div className="flex flex-col">
                                        <p className="font-bold text-2xl mb-2">
                                            Kunci API
                                        </p>
                                        <p className="text-slate-200 font-light">
                                            Informasi ini bersifat rahasia, jadi
                                            berhati-hatilah dengan apa yang Anda
                                            bagikan.
                                        </p>
                                    </div>

                                    {/* API key alert */}
                                    <Alert className="mt-7 bg-[#FDB6001F] border-0 p-6 flex flex-col justify-center text-[#FDB600]">
                                        <AlertDescription className="flex gap-3 items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#FDB600"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-triangle-alert"
                                            >
                                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                                                <path d="M12 9v4" />
                                                <path d="M12 17h.01" />
                                            </svg>
                                            <p>
                                                Jika Anda kehilangan atau lupa
                                                Kunci API ini, Anda dapat
                                                menghasilkannya kembali, tetapi
                                                perhatikan bahwa semua skrip
                                                atau aplikasi yang menggunakan
                                                Kunci API ini akan perlu
                                                diperbarui.
                                            </p>
                                        </AlertDescription>
                                    </Alert>

                                    {/* API key button */}
                                    <div className="btn">
                                        <button className="mt-7 h-[48px] text-lg font-bold px-5 rounded-full bg-[#D0FD00] hover:bg-[#1D1F21] text-[#1D1F21] hover:text-[#D0FD00] transition duration-300">
                                            Buat Ulang Kunci API
                                        </button>
                                    </div>
                                </div>

                                {/* Ubah Kata Sandi */}
                                <div className="mt-7">
                                    {/* Settings head */}
                                    <div className="flex flex-col">
                                        <p className="font-bold text-2xl mb-2">
                                            Ubah Kata Sandi
                                        </p>
                                        <p className="text-slate-200 font-light">
                                            Informasi ini bersifat rahasia, jadi
                                            berhati-hatilah dengan apa yang Anda
                                            bagikan.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-9 mt-7">
                                        <div className="input flex flex-col gap-3">
                                            <label
                                                className="font-semibold"
                                                htmlFor=""
                                            >
                                                Kata Sandi Saat Ini
                                            </label>
                                            <div className="form-control flex items-center gap-2 w-full h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                                <input
                                                    type="text"
                                                    placeholder="Masukkan kata sandi saat ini"
                                                    className="bg-[#1D1F21] w-full h-full outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-7">
                                        <div className="input flex flex-col gap-3">
                                            <label
                                                className="font-semibold"
                                                htmlFor=""
                                            >
                                                Kata Sandi Baru
                                            </label>
                                            <div className="form-control flex items-center gap-2 px-5 py-3 rounded-full bg-[#1D1F21]">
                                                <input
                                                    className="bg-[#1D1F21]  rounded-full w-full h-full outline-none"
                                                    name=""
                                                    id=""
                                                    placeholder="Masukkan Kata Sandi Baru"
                                                />
                                            </div>
                                        </div>
                                        <div className="input flex flex-col gap-3">
                                            <label
                                                className="font-semibold"
                                                htmlFor=""
                                            >
                                                Konfirmasi Kata Sandi Baru
                                            </label>
                                            <div className="form-control flex items-center gap-2 w-full h-[48px] px-5 rounded-full bg-[#1D1F21]">
                                                <input
                                                    type="text"
                                                    id="password"
                                                    placeholder="Konfirmasi Kata Sandi Baru"
                                                    className="bg-[#1D1F21] w-full h-full outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <button className="mt-7 h-[48px] text-lg font-bold px-5 rounded-full bg-[#D0FD00] hover:bg-[#1D1F21] text-[#1D1F21] hover:text-[#D0FD00] transition duration-300">
                                        Ubah Kata Sandi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Content>
                </div>
            </Container>
        </Main>
    );
};

export default AccountSettings;
