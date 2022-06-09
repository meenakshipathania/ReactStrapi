import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsScript from './DetailsScript';
import HeaderScript from './HeaderScript';
import HeroScript from './HeroScript';

function Script() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderScript action={drawerAction.toggle} />
            <HeroScript />
            <DetailsScript />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Script;
