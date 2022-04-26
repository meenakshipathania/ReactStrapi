import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsCompoGreenpal from './DetailsCompoGreenpal';
import HeaderHomeThree from '../HomeThree/HeaderHomeThree';
import HeroCompoGreenpal from './HeroCompoGreenpal';

function CompoGreenpal() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />
            <HeroCompoGreenpal />
            <DetailsCompoGreenpal />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default CompoGreenpal;