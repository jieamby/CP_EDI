import oil from "../../assets/images/oil.webp";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const marketShareData = {
  labels: ["65%", "35%"],
  datasets: [
    {
      data: [65, 35],
      backgroundColor: [
        "rgba(100,163,67, 1)", // Hijau yang lebih cerah
        "rgba(128, 128, 128, 0.3)",
      ], // Abu-abu lebih terang
      //   borderColor: [
      //     "rgba(100,163,67, 0.6)", // Lebih gelap untuk transisi
      //     "rgba(127, 127, 127, 8)",
      //   ],
      borderWidth: 1,
      cutout: "94%",
    },
  ],
};
const loyalitasData = {
  labels: ["100%", "0%"],
  datasets: [
    {
      data: [100, 0],
      backgroundColor: [
        "rgba(100,163,67, 1)", // Hijau yang lebih cerah
        "rgba(128, 128, 128, 0.3)",
      ], // Abu-abu lebih terang
      //   borderColor: [
      //     "rgba(100,163,67, 0.6)", // Lebih gelap untuk transisi
      //     "rgba(127, 127, 127, 8)",
      //   ],
      borderWidth: 1,
      cutout: "94%",
    },
  ],
};
const ketepatanData = {
  labels: ["100%", "0"],
  datasets: [
    {
      data: [100, 0],
      backgroundColor: [
        "rgba(100,163,67, 1)", // Hijau yang lebih cerah
        "rgba(128, 128, 128, 0.3)",
      ], // Abu-abu lebih terang
      //   borderColor: [
      //     "rgba(100,163,67, 0.6)", // Lebih gelap untuk transisi
      //     "rgba(127, 127, 127, 8)",
      //   ],
      borderWidth: 1,
      cutout: "94%",
    },
  ],
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Menyembunyikan legend
    },
    tooltip: {
      enabled: false, // Menyembunyikan tooltip
    },
  },
  elements: {
    arc: {
      borderRadius: 1, // Membuat arc dengan sudut membulat
    },
  },
  animation: {
    duration: 2000, // Duration of the animation in milliseconds
    animateRotate: true, // Enable rotation animation
    animateScale: true, // Enable scale animation
  },
};

const PieChartWithCenterText = ({ data, centerText }) => {
  const [animatedText, setAnimatedText] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(centerText);
    if (start === end) return;

    const duration = 2000;
    const incrementTime = 30;
    const step = (end - start) / (duration / incrementTime);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setAnimatedText(Math.round(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [centerText]);

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <Pie data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-semibold text-gray-700">
          {animatedText}%
        </span>
      </div>
    </div>
  );
};

PieChartWithCenterText.propTypes = {
  data: PropTypes.object.isRequired,
  centerText: PropTypes.string.isRequired,
};

export const TentangPage = () => {
  return (
    <>
      <div className="w-full h-full">
        <div
          className="relative top-0 bg-black opacity-75 md:py-56 py-28 bg-center bg-cover"
          style={{ backgroundImage: `url(${oil})` }}
        >
          <h2 className="text-center text-[#28a745] font-kanit text-5xl md:text-7xl">
            Tentang Kami
          </h2>
        </div>
        <div className="mx-6 my-4 flex md:flex-row flex-col md:justify-between gap-2 md:gap-2 pt-4">
          <div className="flex items-center md:items-start flex-col md:justify-between gap-2 md:w-1/2">
            <h3
              className="font-kanit text-center text-[#28a745] md:text-2xl text-xl "
              
            >
              TENTANG PT.ENERGI DAURULANG INDONESIA
            </h3>
            <p className="font-kanit w-full md:text-lg text-base text-center md:text-left font-light text-gray-500 ">
              PT. Energi Daurulang Indonesia adalah perusahaan bersertifikasi
              ISCC yang terdepan dalam pengumpulan UCO (Minyak Goreng Bekas)
              berkelanjutan. Kami memimpin dalam merintis proses berkelanjutan
              dalam pengumpulan dan penyimpanan UCO untuk didaur ulang dan
              digunakan kembali guna menghasilkan biofuel yang ramah lingkungan.
            </p>
            <p className="font-kanit md:w-full md:text-lg text-base text-center md:text-left font-light text-gray-500 ">
              Dengan pengalaman mengelola pasar yang luas, tim logistik kami
              terdiri dari armada pengumpul UCO yang lengkap dan terlatih. Team
              ini terdiri dari pekerja yang memiliki minat kuat terhadap ekonomi
              daur ulang dan ekonomi hijau.
            </p>
            <p className="font-kanit md:w-full md:text-lg text-base text-center md:text-left font-light text-gray-500 ">
              Pada dasarnya, pengalaman kami yang luas, tim yang kompeten, dan
              komitmen teguh terhadap kepuasan klien menjadikan kami menonjol
              sebagai pemain terkemuka di industri dan pemimpin di kawasan.
            </p>
            <p className="font-kanit md:w-full md:text-lg text-base text-center md:text-left font-light text-gray-500 ">
              PT. Energi Daurulang Indonesia memiliki kantor cabang di berbagai
              lokasi, serta memiliki pangkalan penampungan UCO (minyak Goreng
              Bekas) di berbagai tempat serta menjalin partnership dengan
              berbagai perusahaan dan organisasi yang memiliki misi yang sama
              dalam menjaga Bumi.
            </p>
          </div>
          <div className="flex items-center pt-4 md:pt-2 flex-row w-full md:items-start h-full md:justify-between md:gap-2 gap-4 md:w-1/2">
            <div className="flex flex-col items-center w-full h-full font-kanit text-base justify-center gap-2">
              <PieChartWithCenterText data={marketShareData} centerText="65" />
              <h2 className="text-[#28a745] text-base font-kanit mt-4 uppercase">
                Pasar
              </h2>
            </div>
            <div className="flex flex-col items-center w-full h-full font-kanit text-base justify-center gap-2">
              <PieChartWithCenterText data={loyalitasData} centerText="100" />
              <h2 className="text-[#28a745] text-base font-kanit mt-4 uppercase">
                Loyalitas
              </h2>
            </div>
            <div className="flex flex-col items-center w-full h-full font-kanit text-base justify-center gap-2">
              <PieChartWithCenterText data={ketepatanData} centerText="100" />
              <h2 className="text-[#28a745] text-base font-kanit mt-4 uppercase">
                Ketepatan Waktu
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
