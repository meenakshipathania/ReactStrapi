import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsScriptDemoPaid from './DetailsScriptDemoPaid';
import HeaderHomeThree from '../HomeThree';
import HeroCompo from '../CompoGreenpal/HeroCompoGreenpal';

function ScriptDemoPaid() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />
            <HeroCompo />
            <DetailsScriptDemoPaid />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default ScriptDemoPaid;