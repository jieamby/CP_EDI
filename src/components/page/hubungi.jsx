import { useState, useEffect } from "react";
import contact from "../../assets/images/contact.webp";
import greep from "../../assets/images/forest.webp";
import emailjs from "emailjs-com";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_USER_ID,
  EMAILJS_TEMPLATE_ID,
} from "../http/fc_contact";

export const Kontak = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    pesan: "",
    captchaInput: "",
  });

  const [errors, setErrors] = useState({});
  const [captchaNumbers, setCaptchaNumbers] = useState({ num1: 0, num2: 0 });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    // Generate random numbers for CAPTCHA when component mounts
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaNumbers({ num1, num2 });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateCaptcha = () => {
    const captchaCorrect =
      parseInt(data.captchaInput) === captchaNumbers.num1 + captchaNumbers.num2;
    if (!captchaCorrect) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        captcha: "Jawaban CAPTCHA salah",
      }));
      return false;
    }
    setErrors((prevErrors) => ({ ...prevErrors, captcha: null }));
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateCaptcha()) {
      return; // Jika CAPTCHA salah, jangan lanjutkan
    }
    setIsSending(true);
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data, EMAILJS_USER_ID)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setData({
            name: "",
            email: "",
            phoneNumber: "",
            pesan: "",
            captchaInput: "",
          });
          setIsSent(true); 
          setIsSending(false);

          setTimeout(() => {
            setIsSent(false);
          }, 1000);
        },
        
        (error) => {
          console.log("Gagal Mengirimkan", error);
        }
      );
  };

  return (
    <>
      <div className="w-full h-full">
        <div
          className="relative top-0 md:py-56 py-28 bg-top bg-gray-700 bg-opacity-95 bg-cover"
          style={{ backgroundImage: `url(${contact})` }}
        ></div>
        <div className="m-6 flex items-start md:flex-row flex-col md:justify-between gap-2 md:gap-4 pt-4">
          <div className="flex flex-col items-center md:w-1/2 w-full md:items-start justify-between m-2 gap-4">
            <h2 className="md:text-3xl text-[#28a745] text-2xl font-medium font-kanit">
              Hubungi Kami
            </h2>
            <div className="flex items-center md:items-start flex-col">
              <h3 className="md:text-2xl text-[#28a745] text-xl font-kanit font-normal">
                JAKARTA
              </h3>
              <div className="flex-col flex items-start">
                <div className="flex flex-row gap-2 items-center text-gray-500 mt-1">
                  <div className="items-center w-auto h-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-start text-pretty">
                    <a
                      href="https://maps.app.goo.gl/n6SovrqidB5LEJGc8"
                      target="_blank"
                      className="text-base hover:underline md:text-lg font-kanit font-normal"
                    >
                      SCBD | 6th Floor | Jl. Jenderal Sudirman No.52-53 | Kota
                      Jakarta Selatan
                    </a>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center text-gray-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                  </svg>

                  <a
                    href="mailto:info@edaurulang.com"
                    className="hover:underline text-left text-base md:text-lg font-kanit font-normal"
                  >
                    info@edaurulang.com
                  </a>
                </div>
                <div className="flex flex-row gap-2 items-center text-gray-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href="tel:+6281311840293"
                    className="hover:underline text-left text-base md:text-lg font-kanit font-normal"
                  >
                    +62-813-1184-0293
                  </a>
                </div>
              </div>
            </div>
            <div
              className="relative w-full bg-cover md:rounded-3xl border-8 md:border-none border-green-100  rounded-3xl bg-bottom px-4 h-80"
              style={{ backgroundImage: `url(${greep})` }}
            ></div>
          </div>
          <div className="flex flex-col items-center md:w-1/2 w-full md:items-start justify-between m-2 gap-4">
            <h2 className="md:text-3xl text-2xl text-[#28a745] font-normal font-kanit">
              Beritahu Kami
            </h2>
            <div className="container m-2">
              <form
                onSubmit={handleSubmit}
                className="mx-auto w-auto h-full flex flex-col"
              >
                <div className="w-auto mb-3 font-kanit font-light">
                  <input
                    type="text"
                    className="md:text-base text-xs appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 h-12 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                    style={{
                      color: "#343a40",
                    }}
                    id="inline-full-name"
                    placeholder="Nama Anda*"
                    value={data.name}
                    onChange={handleChange}
                    name="name"
                    required
                  />
                </div>
                <div className="w-auto mb-3">
                  <input
                    type="email"
                    className="md:text-base text-xs appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 h-12 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                    style={{
                      color: "#343a40",
                    }}
                    id="inline-email"
                    placeholder="Email Anda*"
                    value={data.email}
                    onChange={handleChange}
                    name="email"
                    required
                  />
                </div>
                <div className="w-auto mb-3">
                  <input
                    type="tel"
                    className="md:text-base text-xs appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 h-12 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                    style={{
                      color: "#343a40",
                    }}
                    id="inline-phone-number"
                    placeholder="Nomor Anda*"
                    value={data.phoneNumber}
                    onChange={handleChange}
                    name="phoneNumber"
                    required
                  />
                </div>
                <div className="w-auto mb-3">
                  <textarea
                    className="md:text-base text-xs appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 h-24 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                    style={{ color: "#343a40" }}
                    id="inline-pesan"
                    placeholder="Pesan Anda*"
                    value={data.pesan}
                    onChange={handleChange}
                    name="pesan"
                    required
                  ></textarea>
                </div>
                <div className="w-auto mb-3 flex flex-col">
                  <label className="md:text-lg text-base text-center text-gray-600 font-medium font-kanit appearance-none w-full py-1 px-1 leading-tight">
                    Berapa {captchaNumbers.num1} + {captchaNumbers.num2}?*
                  </label>
                  <input
                    type="text"
                    className="md:text-base text-xs appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 h-12 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                    style={{
                      color: "#343a40",
                    }}
                    placeholder="Masukkan jawaban"
                    value={data.captchaInput}
                    onChange={handleChange}
                    name="captchaInput"
                    required
                  />
                  {errors.captcha && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.captcha}
                    </p>
                  )}
                </div>
                <div className="text-center px-4 py-8">
                  <button
                    type="submit"
                    className={`shadow focus:shadow-outline bg-[#28a745] hover:bg-[#28a745] cursor-pointer w-auto focus:outline-none font-semibold text-base py-3 px-5 ${
                      isSending ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    style={{
                      color: "#d8d8d8",
                      borderRadius: "12px",
                    }}
                    disabled={isSending}
                  >
                    {isSending ? "Mengirim..." : "Kirim" }
                    
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isSent && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center animate-bounce">
            <h2 className="text-xl font-bold text-green-600 mb-4">
              🎉 Pesan Berhasil Dikirim! 🎉
            </h2>
            <p className="text-gray-600">Terima kasih telah menghubungi kami.</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsSent(false)} // Sembunyikan popup jika di-klik
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Oke
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
