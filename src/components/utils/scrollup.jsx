import { useState, useEffect } from "react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true); 
    } else {
      setIsVisible(false); 
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility); // Hapus event listener saat komponen di-unmount
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 w-10 h-10 items-center bg-green-400 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          ^
        </button>
      )}
    </div>
  );
};
