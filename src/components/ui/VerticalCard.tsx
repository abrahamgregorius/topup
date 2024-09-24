/** @format */

import { ArrowRight } from "lucide-react";

const VerticalCard = ({ data, isGame = true }) => {
  return (
    <div className="group rounded-[24px] h-[240px] w-[190px] overflow-hidden relative">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-sm"
        src={data.background}
        alt="background"
      />
      {/* Logo Image */}
      {isGame && (
        <img
          className="max-w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-50 group-hover:opacity-0"
          src={data.logo}
          alt="logo"
        />
      )}
      {/* Bottom content */}
      <div className="flex flex-col justify-between absolute bottom-0 h-1/2 left-0 w-full p-3 transition-transform duration-300 transform translate-x-[-100%] group-hover:translate-x-0">
        <div>
          <p className="font-bold text-base text-white">{data.name}</p>
          <p className="mt-2 uppercase text-xs text-white border-l-2 border-[#D0FD00] pl-2">
            {data.company}
          </p>
        </div>
        <p className="flex gap-1 text-[14px] font-semibold text-[#D0FD00] items-center mt-2">
          Top Up <ArrowRight />
        </p>
      </div>
    </div>
  );
};

export default VerticalCard;
