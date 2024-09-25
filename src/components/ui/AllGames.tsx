/** @format */

import { useState } from "react";

import { SearchIcon } from "lucide-react";

import { Button } from "../partials/button";
import VerticalCard from "./VerticalCard";

const games = [
  {
    name: "Valorant",
    company: "Riot Games",
    logo: "https://freelogopng.com/images/all_img/1664302216valorant-logo-png.png",
    background:
      "https://m.media-amazon.com/images/I/61dx4voVL5L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Mobile Legends",
    company: "Moontod",
    logo: "https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-Mobile-Legends-PNG.png",
    background:
      "https://yt3.googleusercontent.com/KV6U9V0H9cn4nGQ1M4BgYtv0So7Cyuz3PLdE6js7kc5FsoUrL-tnUdsVEYyDX6Itjb5CZnOq-g=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Valorant",
    company: "Riot Games",
    logo: "https://freelogopng.com/images/all_img/1664302216valorant-logo-png.png",
    background:
      "https://m.media-amazon.com/images/I/61dx4voVL5L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Valorant",
    company: "Riot Games",
    logo: "https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-Mobile-Legends-PNG.png",
    background:
      "https://yt3.googleusercontent.com/KV6U9V0H9cn4nGQ1M4BgYtv0So7Cyuz3PLdE6js7kc5FsoUrL-tnUdsVEYyDX6Itjb5CZnOq-g=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Valorant",
    company: "Riot Games",
    logo: "https://freelogopng.com/images/all_img/1664302216valorant-logo-png.png",
    background:
      "https://m.media-amazon.com/images/I/61dx4voVL5L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Valorant",
    company: "Riot Games",
    logo: "https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-Mobile-Legends-PNG.png",
    background:
      "https://yt3.googleusercontent.com/KV6U9V0H9cn4nGQ1M4BgYtv0So7Cyuz3PLdE6js7kc5FsoUrL-tnUdsVEYyDX6Itjb5CZnOq-g=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Valorant",
    company: "Riot Games",
    logo: "https://freelogopng.com/images/all_img/1664302216valorant-logo-png.png",
    background:
      "https://m.media-amazon.com/images/I/61dx4voVL5L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Mobile Legends",
    company: "Moontod",
    logo: "https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-Mobile-Legends-PNG.png",
    background:
      "https://yt3.googleusercontent.com/KV6U9V0H9cn4nGQ1M4BgYtv0So7Cyuz3PLdE6js7kc5FsoUrL-tnUdsVEYyDX6Itjb5CZnOq-g=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Valorant",
    company: "Riot Games",
    logo: "https://freelogopng.com/images/all_img/1664302216valorant-logo-png.png",
    background:
      "https://m.media-amazon.com/images/I/61dx4voVL5L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Valorant",
    company: "Riot Games",
    logo: "https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-Mobile-Legends-PNG.png",
    background:
      "https://yt3.googleusercontent.com/KV6U9V0H9cn4nGQ1M4BgYtv0So7Cyuz3PLdE6js7kc5FsoUrL-tnUdsVEYyDX6Itjb5CZnOq-g=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Valorant",
    company: "Riot Games",
    logo: "https://freelogopng.com/images/all_img/1664302216valorant-logo-png.png",
    background:
      "https://m.media-amazon.com/images/I/61dx4voVL5L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Valorant",
    company: "Riot Games",
    logo: "https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-Mobile-Legends-PNG.png",
    background:
      "https://yt3.googleusercontent.com/KV6U9V0H9cn4nGQ1M4BgYtv0So7Cyuz3PLdE6js7kc5FsoUrL-tnUdsVEYyDX6Itjb5CZnOq-g=s900-c-k-c0x00ffffff-no-rj",
  },
];

const chips = [
  {
    id: "all",
    text: "Semua Produk",
  },
  {
    id: "game",
    text: "Game",
  },
  {
    id: "voucher",
    text: "Voucher",
  },
];

const AllGames = () => {
  const [selectedChip, setSelectedChip] = useState(chips[0]);

  return (
    <section className="mt-8 px-20">
      <div>
        <h4 className="mb-1 font-bold text-xl">Semua Produk</h4>
        <p>Ini adalah halaman atau daftar produk yang kami jual.</p>
      </div>
      <div className="mt-8  flex justify-between items-center">
        <div className="form-control flex items-center gap-2 w-[340px] h-10 px-5 rounded-full bg-[#1D1F21]">
          {/* Search icon kyknya harus jadi partials component deh */}
          {/* INI JUGA SEARCH ICON SEMENTARA */}
          <SearchIcon />
          <input
            type="text"
            id="password"
            placeholder="Cari game atau voucher..."
            className="bg-[#1D1F21] w-full h-full outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          {chips.map((chip, idx) => (
            <Button
              onClick={() => setSelectedChip(chip)}
              id={idx.toString()}
              className={`h-[42px] px-6 rounded-full ${
                selectedChip.id === chip.id
                  ? "text-[#D0FD00] bg-[#191E00] font-semibold"
                  : ""
              }`}>
              {chip.text}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-6">
        {games.map((game) => (
          <VerticalCard data={game} />
        ))}
      </div>
    </section>
  );
};

export default AllGames;
