/** @format */

import Navbar from "@/components/ui/navbar/navbar";
import VerticalCard from "@/components/ui/VerticalCard";

const Home = () => {
  // https://www.postershoppe.com/cdn/shop/files/valorant_black_framed_1200x1200.jpg?v=1685664393

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
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="popular-games px-20">
        <div className="mt-14">
          <p className="uppercase text-[#D0FD00] text-base">Top up Game</p>
          <h4 className="mt-2 font-bold text-4xl">Game Populer</h4>
        </div>
        <div className="mt-8 flex flex-wrap gap-7">
          {games.map((game) => (
            <VerticalCard data={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
