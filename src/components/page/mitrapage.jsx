import mitra from "../../assets/images/mitra.webp";
import client from "../../assets/mitra/client.webp";

export const MitraAwal = () => {
  return (
    <div className="w-full h-full">
      <div
        className="relative top-0 md:py-40 py-20 bg-top bg-gray-700 bg-opacity-95 bg-cover"
        style={{ backgroundImage: `url(${mitra})` }}
      >
        <h2 className="text-center font-kanit text-5xl text-[#28a745] md:text-7xl">
          Mitra Kami
        </h2>
      </div>
      <div className="mt-5 flex flex-col justify-between gap-4">
        <h3 className="text-center font-kanit font-semibold text-2xl md:text-5xl bg-gradient-to-r from-[#4d7111] to-[#91eaaf] bg-clip-text text-transparent">
          “10 Juta liter minyak jelantah untuk Energi Terbarukan”
        </h3>
        <h4 className="text-center font-kanit text-[#4D7111] font-normal text-lg md:text-xl">
          Bergerak Bersama menyelamatkan kemurnian air tanah dari limbah minyak
          jelantah
        </h4>
        <div className="py-4">
          <div className="relative w-full h-64 md:h-svh md:bg-content bg-cover">
            <img src={client} alt="Rekan Mitra Kami" />
          </div>
        </div>
      </div>
    </div>
  );
};
