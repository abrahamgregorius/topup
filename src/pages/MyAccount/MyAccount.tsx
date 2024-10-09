/** @format */

import {
    CheckIcon,
    ClockIcon,
    MailIcon,
    MessageSquareWarningIcon,
    PhoneIcon,
    SettingsIcon,
    ShoppingCartIcon,
    WalletIcon,
    XIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Main from "@/components/partials/Main";
import Container from "@/components/partials/Container";
import MenuBar from "@/components/partials/MenuBar";
import Content from "@/components/partials/Content";

const MyAccount = () => {
    return (
        <Main>
            <Container>
                <div className="flex flex-col sm:flex-row">
                    <MenuBar />
                    <Content>
                        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-7">
                            {/* Card Left */}
                            <div className="rounded-3xl bg-[#151617]">
                                <div className="flex justify-between p-7">
                                    <div className="flex gap-5 items-center">
                                        <div className="rounded-full h-14 w-14 bg-[#D0FD00]"></div>
                                        <div className="flex flex-col items-start gap-2">
                                            <p>
                                                <span className="font-semibold">
                                                    John Doe
                                                </span>{" "}
                                                <span className="text-[#D0FD00]">
                                                    |
                                                </span>{" "}
                                                <span className="text-[#D4D4D4]">
                                                    John Doe
                                                </span>
                                            </p>
                                            <div className="w-auto rounded-full text-xs text-[#D0FD00] bg-[#191E00] py-[2px] px-2">
                                                Member
                                            </div>
                                        </div>
                                    </div>
                                    <SettingsIcon />
                                </div>
                                <div className="border-t border-[#202328] w-full"></div>
                                <div className="flex flex-col sm:flex-row gap-5 p-7">
                                    <p className="flex gap-2">
                                        <PhoneIcon />
                                        082688117634
                                    </p>
                                    <p className="flex gap-2">
                                        <MailIcon />
                                        082688117634
                                    </p>
                                </div>
                            </div>
                            {/* Card Right */}
                            <div className="flex flex-col gap-4 sm:gap-0 justify-between rounded-3xl p-7 bg-[#151617]">
                                <div className="flex flex-col gap-2">
                                    <p className="text-3xl text-[#D0FD00] font-bold">
                                        Rp 273.000
                                    </p>
                                    <p className="flex gap-2 text-base">
                                        <WalletIcon /> Saldo Anda
                                    </p>
                                </div>
                                <div className="flex items-center justify-end gap-3">
                                    <ClockIcon />
                                    <Button className=" bg-[#D0FD00] text-[#0C0D0D] hover:text-[#D0FD00] rounded-full font-semibold text-base">
                                        Masuk
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-7">
                            <p className="font-bold text-2xl mb-5">
                                Total Transaksi
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-7 h-auto sm:h-[182px]">
                                <div className="p-6 bg-[#D0FD00] text-[#151617] rounded-3xl flex flex-col justify-between">
                                    <ShoppingCartIcon className="self-end " />
                                    <div>
                                        <p className="font-bold text-3xl">54</p>
                                        <p>Seluruh Transaksi</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-[#151617] rounded-3xl text-[#D4D4D4] flex flex-col justify-between">
                                    <XIcon className="self-end" />
                                    <div>
                                        <p className="font-bold text-3xl">54</p>
                                        <p>Kemarin</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-[#151617] rounded-3xl text-[#D4D4D4] flex flex-col justify-between">
                                    <CheckIcon className="self-end" />
                                    <div>
                                        <p className="font-bold text-3xl">54</p>
                                        <p>Hari ini</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-[#151617] rounded-3xl text-[#D4D4D4] flex flex-col justify-between">
                                    <MessageSquareWarningIcon className="self-end" />
                                    <div>
                                        <p className="font-bold text-3xl">54</p>
                                        <p>Bulan ini</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-7">
                            <p className="font-bold text-2xl mb-5">
                                Riwayat Transaksi Hari Ini
                            </p>
                        </div>
                    </Content>
                </div>
            </Container>
        </Main>
    );
};

export default MyAccount;
