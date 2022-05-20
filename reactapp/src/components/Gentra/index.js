import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsGentra from './DetailsGentra';
import HeaderGentra from './HeaderGentra';
import HeroGentra from './HeroGentra';

function Gentra() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderGentra action={drawerAction.toggle} />
            <HeroGentra />
            <DetailsGentra />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Gentra;
