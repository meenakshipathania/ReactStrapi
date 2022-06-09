import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsCompoPlugin4 from './DetailsCompoPlugin-4';
import HeaderHomeThree from '../HomeThree/HeaderHomeThree';
import HeroCompo from '../CompoGreenpal/HeroCompoGreenpal';

function CompoPlugin4() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />
            <HeroCompo />
            <DetailsCompoPlugin4 />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default CompoPlugin4;
