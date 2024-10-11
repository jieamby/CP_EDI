import 'react';
import { Beranda } from '../page/home';
import { Bagian } from '../utils/footer';
import { Heros } from '../page/hero';
import {ScrollToTopButton} from '../utils/scrollup'


export const Home = () => {
    window.scrollTo(0, 0);
    return (
        <> 
        <Heros/>           
        <Beranda/>
        <Bagian/>
        <ScrollToTopButton/>
        </>
    )
}