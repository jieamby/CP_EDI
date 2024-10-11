import { PortoPage } from "../page/portofolio";
import { TentangPage } from "../page/tentang";
import { Bagian } from "../utils/footer";
import { ScrollToTopButton } from "../utils/scrollup";
import {FolioPage} from "../page/folio";


export const Tentang = () => {
    window.scrollTo(0, 0);
    return (
        <>
        <TentangPage/>
        <PortoPage/>
        <FolioPage/>
        <Bagian/>
        <ScrollToTopButton/>
        </>
    )
}