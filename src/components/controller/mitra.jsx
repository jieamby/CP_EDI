// import { MitraPage } from "../page/mitra";
import { Bagian } from "../utils/footer";
import { ScrollToTopButton } from "../utils/scrollup";
import { MitraAwal } from "../page/mitrapage";

export const MitraControl = () => {
    window.scrollTo(0, 0);
    return (
        <>
        <MitraAwal />
        {/* <MitraPage /> */}
        <Bagian/>
        <ScrollToTopButton/>
        </>
    )
}