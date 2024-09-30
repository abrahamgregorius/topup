/** @format */

import Footer from "@/components/partials/footer";
import Navbar from "@/components/partials/navbar/navbar";
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
      company: "Moontoon",
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

  const vouchers = [
    {
      name: "Google Play",
      company: "Playstore",
      // logo: "https://freelogopng.com/images/all_img/1664302216valorant-logo-png.png",
      background:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s",
    },
    {
      name: "Google Play",
      company: "Playstore",
      // logo: "https://freelogopng.com/images/all_img/1664302216valorant-logo-png.png",
      background:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s",
    },
    {
      name: "Google Play",
      company: "Playstore",
      // logo: "https://freelogopng.com/images/all_img/1664302216valorant-logo-png.png",
      background:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s",
    },
    {
      name: "Google Play",
      company: "Playstore",
      // logo: "https://freelogopng.com/images/all_img/1664302216valorant-logo-png.png",
      background:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s",
    },
    {
      name: "Google Play",
      company: "Playstore",
      // logo: "https://freelogopng.com/images/all_img/1664302216valorant-logo-png.png",
      background:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1450px] mx-auto my-0">
        <div className="popular-games px-20 ">
          <div className="mt-14">
            <p className="uppercase text-[#D0FD00] text-base">Top up Game</p>
            <h4 className="mt-2 font-bold text-4xl">Game Populer</h4>
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            {games.map((game) => (
              <VerticalCard data={game} />
            ))}
          </div>
          <div className="mt-10">
            <h4 className="text-[1.75rem]">Game Lainnya</h4>
            <div className="mt-8 flex flex-wrap gap-6">
              {games.map((game) => (
                <VerticalCard data={game} />
              ))}
            </div>
          </div>
        </div>
        <div className="popular-games px-20">
          <div className="mt-14">
            <p className="uppercase text-[#D0FD00] text-base">Top up Voucher</p>
            <h4 className="mt-2 font-bold text-4xl">Voucher Game</h4>
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            {vouchers.map((voucher) => (
              <VerticalCard data={voucher} isGame={false} />
            ))}
          </div>
        </div>
      </div>
      <div className="popular-games px-20">
        <div className="mt-14">
          <p className="uppercase text-[#D0FD00] text-base">Top up Voucher</p>
          <h4 className="mt-2 font-bold text-4xl">Voucher Game</h4>
        </div>
        <div className="mt-8 flex flex-wrap gap-6">
          {vouchers.map((voucher) => (
            <VerticalCard data={voucher} isGame={false} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
