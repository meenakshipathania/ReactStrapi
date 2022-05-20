import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsMehanapp from './DetailsMehanapp';
import HeaderMehanapp from './HeaderMehanapp';
import HeroMehanapp from './HeroMehanapp';

function Mehanapp() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderMehanapp action={drawerAction.toggle} />
            <HeroMehanapp />
            <DetailsMehanapp />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Mehanapp;
