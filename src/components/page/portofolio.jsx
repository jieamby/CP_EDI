import porto from "../../assets/images/porto.webp";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const stepTime = Math.abs(Math.floor(duration / value));
    let start = 0;
    const timer = setInterval(() => {
      if (start < value) {
        start++;
        setCount(start);
      } else {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-5xl font-light text-[#f5f5f5]">
      {count.toLocaleString()}
    </div>
  );
};
AnimatedNumber.propTypes = {
  value: PropTypes.number.isRequired,
};

export const PortoPage = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${porto})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-full justify-center gap-16 p-10">
          <div className="relative z-10 flex items-center justify-center h-full">
            <h2 className="text-center text-[#f5f5f5] font-kanit flex flex-col text-lg md:text-xl py-2 md:py-8 font-light">
              <AnimatedNumber value={24} />
              KOTA
            </h2>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <h2 className="text-center font-kanit text-[#f5f5f5] flex flex-col text-lg md:text-xl py-2 md:py-8 font-light">
              <AnimatedNumber value={2580} />
              PELANGGAN SENANG
            </h2>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <h2 className="text-center font-kanit text-[#f5f5f5] flex flex-col text-lg md:text-xl py-2 md:py-8 font-light">
              <AnimatedNumber value={2500} />
              MT/BULAN
            </h2>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <h2 className="text-center text-[#f5f5f5] font-kanit flex flex-col text-lg md:text-xl py-2 md:py-8 font-light">
              <AnimatedNumber value={40} />
              MEMBER TIM
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
