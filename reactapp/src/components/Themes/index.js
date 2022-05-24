import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsTheme from './DetailsTheme';
import HeaderTheme from './HeaderTheme';
import HeroTheme from './HeroTheme';

function Theme() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderTheme action={drawerAction.toggle} />
            <HeroTheme />
            <DetailsTheme />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Theme;