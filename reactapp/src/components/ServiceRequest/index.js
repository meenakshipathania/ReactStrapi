import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree';
// import ProjectHomeOne from '../HomeOne/ProjectHomeOne';
import Drawer from '../Mobile/Drawer';
import DetailsServiceRequest from './DetailsServiceRequest';
import HeaderServiceRequest from './HeaderServiceRequest';
import HeroServiceRequest from './HeroServiceRequest';

function Incity() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderServiceRequest action={drawerAction.toggle} />
            <HeroServiceRequest />
            <DetailsServiceRequest />
            {/* <ProjectHomeOne />  */}
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Incity;
