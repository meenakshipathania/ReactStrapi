import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsFanzapp from './DetailsFanzapp';
import HeaderFanzapp from './HeaderFanzapp';
import HeroFanzapp from './HeroFanzapp';

function Fanzapp() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderFanzapp action={drawerAction.toggle} />
            <HeroFanzapp />
            <DetailsFanzapp />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Fanzapp;
