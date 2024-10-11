import 'react'
import { Kontak } from '../page/hubungi'
import { Bagian } from '../utils/footer';
import { ScrollToTopButton } from '../utils/scrollup';

export const KontakPage = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Kontak />
            <Bagian/>
            <ScrollToTopButton/>
        </>
    )
}