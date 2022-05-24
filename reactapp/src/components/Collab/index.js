import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsCollab from './DetailsCollab';
import HeaderCollab from './HeaderCollab';
import HeroCollab from './HeroCollab';

function Collab() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderCollab action={drawerAction.toggle} />
            <HeroCollab />
            <DetailsCollab />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Collab;
