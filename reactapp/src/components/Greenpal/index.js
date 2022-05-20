import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsGreenpal from './DetailsGreenpal';
import HeaderGreenpal from './HeaderGreenpal';
import HeroGreenpal from './HeroGreenpal';

function Greenpal() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderGreenpal action={drawerAction.toggle} />
            <HeroGreenpal />
            <DetailsGreenpal />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Greenpal;
