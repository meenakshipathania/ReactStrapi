import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsIncity from './DetailsIncity';
import HeaderIncity from './HeaderIncity';
import HeroIncity from './HeroIncity';

function ServiceRequest() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderIncity action={drawerAction.toggle} />
            <HeroIncity />
            <DetailsIncity />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default ServiceRequest;
