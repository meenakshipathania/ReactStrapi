import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsCompo from './DetailsCompo';
import HeaderCompo from './HeaderCompo';
import HeroCompo from './HeroCompo';

function Compo() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderCompo action={drawerAction.toggle} />
            <HeroCompo />
            <DetailsCompo />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Compo;