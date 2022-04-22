import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
// import ProjectHomeOne from '../HomeOne/ProjectHomeOne';
import Drawer from '../Mobile/Drawer';
import DetailsVlife from './DetailsVlife';
import HeaderVlife from './HeaderVlife';
import HeroVlife from './HeroVlife';

function Vlife() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderVlife action={drawerAction.toggle} />
            <HeroVlife />
            <DetailsVlife />
            {/* <ProjectHomeOne />  */}
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Vlife;
