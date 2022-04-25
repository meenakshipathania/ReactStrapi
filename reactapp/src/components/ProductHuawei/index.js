import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsProductHuawei from './DetailsProductHuawei';
import HeaderProductHuawei from './HeaderProductHuawei';
import HeroProductHuawei from './HeroProductHuawei';

function ProductHuawei() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderProductHuawei action={drawerAction.toggle} />
            <HeroProductHuawei />
            <DetailsProductHuawei />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default ProductHuawei;