import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsHuawei from './DetailsHuawei';
import HeaderHuawei from './HeaderHuawei';
import HeroHuawei from './HeroHuawei';

function Huawei() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHuawei action={drawerAction.toggle} />
            <HeroHuawei />
            <DetailsHuawei />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Huawei;
