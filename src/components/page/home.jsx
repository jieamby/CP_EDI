import { useState, useEffect } from "react";
import img from "../../assets/images/images.webp";
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
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
      cutout: "95%",
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
      cutout: "95%",
    },
  ],
};
const ketepatanData = {
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
      cutout: "95%",
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
    const end = parseInt(centerText); // Mengubah teks menjadi angka
    if (start === end) return; // Jika sudah sama, tidak perlu animasi

    const duration = 2000; // Durasi animasi 2 detik
    const incrementTime = 30; // Update angka setiap 30ms
    const step = (end - start) / (duration / incrementTime); // Menghitung langkah setiap interval

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer); // Menghentikan animasi ketika mencapai angka akhir
        start = end;
      }
      setAnimatedText(Math.round(start)); // Update state dengan angka yang sudah di-round
    }, incrementTime);

    return () => clearInterval(timer); // Bersihkan interval saat komponen di-unmount
  }, [centerText]);

  return (
    <div className="relative w-72 h-72 flex items-center justify-center">
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
  data: PropTypes.object.isRequired, // Chart data should be an object
  centerText: PropTypes.string.isRequired, // Center text should be a string
};

export const Beranda = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col content-center items-center justify-between">
        <div className="m-6 flex items-start md:flex-row flex-col md:justify-between gap-2 md:gap-4 pt-4">
          <div className="flex flex-col items-center md:w-1/2 w-full md:items-start justify-between m-2 gap-4">
            <div className="m-4 flex text-center md:align-middle md:items-start flex-col md:justify-between gap-2 md:gap-4 pt-4">
              <h2 className="md:text-3xl text-[#28a745] text-2xl md:text-left text-center font-kanit font-medium">
                PENGELOLA LIMBAH BERNILAI TINGGI
              </h2>
              <p className="md:text-lg text-base text-center md:text-left font-kanit font-light text-gray-500">
                PT. Energi Daurulang Indonesia adalah perusahaan pengumpulan dan
                daur ulang UCO (Minyak Goreng Bekas) terkemuka, yang berkomitmen
                pada praktik berkelanjutan di seluruh prosesnya. Kami adalah
                perusahaan yang bersertifikat ISCC, yang mempelopori solusi
                inovatif pengumpulan dan penyimpanan untuk UCO.
              </p>
            </div>
            <div className="m-4 flex text-center md:align-middle md:items-start flex-col md:justify-between gap-2 md:gap-4 pt-4">
              <h2 className="md:text-3xl text-[#28a745] text-2xl text-center md:text-left font-kanit font-medium">
                PENGUMPUL DAN PENGELOLA UCO YANG BERPENGALAMAN DAN EFISIEN
              </h2>
              <p className="md:text-lg text-base text-center md:text-left font-kanit font-light text-gray-500">
                Dengan pengalaman yang mumpuni, PT. Energi Daurulang Indonesia
                memiliki tim pengumpul UCO yang terlatih dan lengkap. Jaringan
                kami mencakup pekerja lepas yang setia dan personel internal,
                memastikan layanan yang handal dan efisien di seluruh pasar
                operasi kami. Kami terus melakukan ekspansi untuk melayani
                wilayah-wilayah baru.
              </p>
            </div>
            <div className="m-4 flex text-center md:align-middle md:items-start flex-col md:justify-between gap-2 md:gap-4 pt-4">
              <h2 className="md:text-3xl text-2xl text-[#28a745] text-center md:text-left font-kanit font-medium">
                MENDAUR ULANG UCO UNTUK MASA DEPAN YANG LEBIH HIJAU
              </h2>
              <p className="md:text-lg text-base text-center md:text-left font-kanit font-light text-gray-500">
                UCO yang kami kumpulkan didaur ulang dan digunakan kembali
                menjadi biofuel yang ramah lingkungan. Hal ini tidak hanya
                mengurangi limbah, tetapi juga memerangi perubahan iklim. PT
                Energi Daurulang Indonesia secara konsisten menangani volume
                pengumpulan UCO yang besar setiap bulan, yang merupakan bukti
                dedikasi kami terhadap keberlanjutan dan keunggulan operasional.
              </p>
            </div>
            <div className="m-4 flex text-center md:align-middle md:items-start flex-col md:justify-between gap-2 md:gap-4 pt-4">
              <h2 className="md:text-3xl text-[#28a745] text-2xl text-center md:text-left font-kanit font-medium">
                MEMILIH PT. ENERGI DAURULANG INDONESIA UNTUK PENGELOLAAN UCO
                BERKELANJUTAN
              </h2>
              <p className="md:text-lg text-base text-center md:text-left font-kanit font-light text-gray-500">
                Bermitralah dengan PT Energi Daurulang Indonesia dan rasakan
                perbedaan yang dihasilkan dengan komitmen terhadap
                keberlanjutan. Kami menawarkan pengumpulan UCO yang lebih
                efisien, daur ulang yang bertanggung jawab, dan jalan menuju
                masa depan yang lebih hijau
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:w-1/2 w-full m-2 gap-8">
            <img
              loading="lazy"
              src={img}
              alt="Optimized"
              className="md:w-4/5 w-3/4 aspect-auto"
            />
            <div className="flex flex-col items-center font-kanit text-lg justify-center gap-4">
              <PieChartWithCenterText data={marketShareData} centerText="65" />
              <h2 className="text-[#28a745] text-lg font-kanit mt-4 uppercase">
                Pasar
              </h2>
            </div>
            <div className="flex flex-col items-center font-kanit text-xl justify-center gap-4">
              <PieChartWithCenterText data={loyalitasData} centerText="100" />
              <h2 className="text-[#28a745] text-lg font-kanit mt-4 uppercase">
                Loyalitas
              </h2>
            </div>
            <div className="flex flex-col items-center font-kanit text-xl justify-center gap-4">
              <PieChartWithCenterText data={ketepatanData} centerText="100" />
              <h2 className="text-[#28a745] text-lg font-kanit mt-4 uppercase">
                Ketepatan Waktu
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
