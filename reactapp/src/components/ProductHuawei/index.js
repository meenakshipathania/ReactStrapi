import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsProductHuawei from './DetailsProductHuawei';
import HeaderHomeThree from '../HomeThree';
import HeroCompo from '../CompoGreenpal/HeroCompoGreenpal';

function ProductHuawei() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />
            <HeroCompo />
            <DetailsProductHuawei />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default ProductHuawei;