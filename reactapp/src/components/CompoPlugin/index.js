import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsCompoPlugin from './DetailsCompoPlugin';
import HeaderHomeThree from '../HomeThree';
import HeroCompo from '../CompoGreenpal/HeroCompoGreenpal';

function CompoPlugin() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />
            <HeroCompo />
            <DetailsCompoPlugin />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default CompoPlugin;