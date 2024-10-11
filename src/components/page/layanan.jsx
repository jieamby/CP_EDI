import lab from "../../assets/images/UCO.webp";

export const LayananPage = () => {
  return (
    <>
      <div className="w-full h-full">
        <div
          className="relative top-0 bg-black opacity-75 md:py-56 py-28 bg-center bg-cover"
          style={{ backgroundImage: `url(${lab})` }}
        >
          <h2 className="text-center text-[#28a745] font-kanit text-4xl md:text-5xl">
            Layanan
          </h2>
        </div>
        <div className="m-6 mx-8 flex items-center flex-col md:justify-between gap-2 md:gap-4 pt-4">
          <h3 className="font-kanit md:text-3xl font-medium text-[#28a745] text-2xl ">
            PRODUK KAMI
          </h3>
          <p className="font-kanit px-6 md:w-2/3 md:text-lg text-base text-center font-light text-gray-500 ">
            Minyak Goreng Bekas (UCO) bersertifikat ISCC-EU dari campuran asal
            (Kelapa Sawit, Bunga Matahari, Kedelai, dll.) dengan kisaran
            spesifikasi di bawah*
          </p>
          <h1 className="font-kanit px-8 md:text-lg text-base text-center font-light text-gray-500">
            FFA max 5%
          </h1>
          <h1 className="font-kanit px-8 md:text-lg text-base text-center font-light text-gray-500">
            MIU max 2%
          </h1>
          <h1 className="font-kanit px-8 md:text-lg text-base text-center font-light text-gray-500">
            IV <span className="text-gray-500">&gt;</span> 60
          </h1>
          <div className="flex items-start md:flex-row flex-col md:justify-between gap-2 md:gap-2 h-full w-full pt-4">
            <div className="flex flex-col md:w-1/3 px-4 pt-2 gap-2 h-full items-center text-center text-[#4D7111]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.0}
                stroke="currentColor"
                className="size-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
              <span className="text-center text-xl md:text-2xl text-[#28a745] font-kanit font-normal">KUALITAS</span>
              <p className="text-center md:text-lg text-base font-kanit font-light">
                Kami menyediakan minyak goreng bekas berkualitas tinggi
              </p>
            </div>
            <div className="flex flex-col md:w-1/3 px-4 pt-2 gap-2 h-full items-center text-[#4D7111]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.0}
                stroke="currentColor"
                className="size-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                />
              </svg>
              <h1 className="text-center text-xl md:text-2xl text-[#28a745] font-kanit font-normal">KUANTITAS</h1>
              <p className="text-center md:text-lg text-base font-kanit font-light">
                PT. Energi Daurulang Indonesia perlu pangsa pasar yang besar
                untuk lebih kuat
              </p>
            </div>
            <div className="flex flex-col md:w-1/3 px-4 pt-2 gap-2 h-full items-center text-[#4D7111]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.0}
                stroke="currentColor"
                className="size-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <h1 className="text-center text-xl md:text-2xl text-[#28a745] font-kanit font-normal">
                KETEPATAN WAKTU
              </h1>
              <p className="text-center md:text-lg text-base font-kanit font-light">
                ketepatan waktu adalah salah satu kekuatan kami
              </p>
            </div>
            <div className="flex flex-col md:w-1/3 px-4 pt-2 gap-2 h-full items-center text-[#4D7111]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.0}
                stroke="currentColor"
                className="size-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
              <h1 className="text-center text-xl md:text-2xl text-[#28a745] font-kanit font-normal">KEBERLANJUTAN</h1>
              <p className="text-center md:text-lg text-base font-kanit font-light">
                Perusahaan pertama yang menerima sertifikasi ISCC
              </p>
            </div>
            <div className="flex flex-col md:w-1/3 px-4 pt-2 gap-2 h-full items-center text-[#4D7111]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.0}
                stroke="currentColor"
                className="size-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>

              <h1 className="text-center text-xl md:text-2xl text-[#28a745] font-kanit font-normal">AUDITABILITAS</h1>
              <p className="text-center md:text-lg text-base font-kanit font-light">
                UCO terecord asal usulnya hingga titik pengolahan akhir
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
