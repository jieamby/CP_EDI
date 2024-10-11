import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Navbar } from "./components/utils/navbar";
import { KontakPage } from "./components/controller/hubungi";
import { Home } from "./components/controller/home";
import { Layanan } from "./components/controller/layanan";
import { Tentang } from "./components/controller/tentang";
import 'vite/modulepreload-polyfill'
// import { MitraControl } from "./components/controller/mitra";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<KontakPage />} />
        {/* <Route path="/mitra" element={<MitraControl />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
