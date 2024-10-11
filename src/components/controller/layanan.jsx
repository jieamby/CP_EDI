
import { LayananPage } from '../page/layanan';
import { Bagian } from '../utils/footer';
import {ScrollToTopButton} from '../utils/scrollup'

export const Layanan = () => {
    window.scrollTo(0, 0);
    return(
        <>
        <LayananPage/>
        <Bagian/>
        <ScrollToTopButton/>
        </>
    )
}