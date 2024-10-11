import { useState, useEffect } from "react";
import logo from "../../assets/images/LOGO.png";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [navbarBuka, setNavbarBuka] = useState(false);
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 1 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full flex left-0 top-0 z-50 transition-all duration-300 ${
        sticky ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex-row flex justify-between items-center w-full px-10 py-4">
        <div className="w-16 h-16">
          <Link to="/">
            <img src={logo} alt="PT. Energi Daurulang Indonesia" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-6 font-kanit font-normal">
          <ul className="flex space-x-4 lg:text-lg">
            <li>
              <Link
                to="/"
                className={`transition-colors duration-300 ${
                  sticky ? "text-gray-500" : "text-white"
                }`}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/layanan"
                className={`transition-colors duration-300 ${
                  sticky ? "text-gray-500" : "text-white"
                }`}
              >
                Layanan
              </Link>
            </li>
            {/* <li>
              <Link
                to="/mitra"
                className={`transition-colors duration-300 ${
                  sticky ? "text-gray-500" : "text-white"
                }`}
              >
                Mitra
              </Link>
            </li> */}
            <li>
              <Link
                to="/tentang"
                className={`transition-colors duration-300 ${
                  sticky ? "text-gray-500" : "text-white"
                }`}
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/kontak"
                className={`transition-colors duration-300 ${
                  sticky ? "text-gray-500" : "text-white"
                }`}
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>
        <button
          className={`lg:hidden text-3xl ${
            sticky ? "text-gray-500" : "text-white"
          }`}
          onClick={() => setNavbarBuka(!navbarBuka)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              className={navbarBuka ? "hidden" : "block"}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div
          className={`lg:hidden absolute w-full h-screen bg-gray-800 bg-opacity-90 top-0 left-0 transform ${
            navbarBuka ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-1000 ease-in-out`}
        >
          <button
            className="absolute top-8 right-10 text-white text-3xl lg:hidden"
            onClick={() => setNavbarBuka(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            {[
              { name: "Beranda", path: "/" },
              { name: "Layanan", path: "/layanan" },
              // { name: "Mitra", path: "/mitra" },
              { name: "Tentang Kami", path: "/tentang" },
              { name: "Hubungi Kami", path: "/kontak" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-xl ${
                  isActive(item.path) ? "text-[#28a745]" : "text-white"
                }`}
                onClick={() => setNavbarBuka(false)} // Tutup dropdown saat item diklik
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
