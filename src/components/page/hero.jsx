import { useState, useEffect } from "react";
import image1 from "../../assets/colosal/img4.webp";
import image2 from "../../assets/colosal/img5.webp";
// import image3 from "../../assets/colosal/img3.webp";

export const Heros = () => {
  const images = [image1, image2];
  
  // State untuk menyimpan index gambar yang sedang aktif
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [paused, setPaused] = useState(false); 


  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); 

      return () => clearInterval(interval); 
    }
  }, [paused, images.length]);

  const handleMouseEnter = () => {
    setPaused(true);
  };

   const handleMouseLeave = () => {
    setPaused(false);
  };

  return (
    <div className="relative md:pt-16 pt-14 md:pb-10 pb-14 flex content-center items-center justify-center" style={{ minHeight: "75vh" }}>
      <div
        className="absolute top-0 w-full h-full bg-cover bg-center transition-all duration-700 ease-linear z-0"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          animation: "moveImage 20s linear infinite",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10">
        </div>
    </div>
  );
};
