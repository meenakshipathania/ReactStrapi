import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import DetailsProductMehan from './DetailsProductMehan';
import HeaderHomeThree from '../HomeThree/HeaderHomeThree';
import HeroCompo from '../CompoGreenpal/HeroCompoGreenpal';

function ProductMehan() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />
            <HeroCompo />
            <DetailsProductMehan />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default ProductMehan;
