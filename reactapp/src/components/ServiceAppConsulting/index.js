import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Drawer from '../Mobile/Drawer';
import AboutHomeThree from './AboutHomeThree';
// import BlogHomeThree from './BlogHomeThree';
// import GetTouch from './getintouch';
// import DownloadHomeThree from './DownloadHomeThree';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import FunFactHomeThree from './FunFactHomeThree';
import HeaderHomeThree from '../HomeThree/HeaderHomeThree';
import HeroHomeThree from './HeroHomeThree';
import ProjectHomeThree from '../HomeThree/ProjectHomeThree';
import ServicesHomeThree from './ServiceHomeThree';
// import ShowCaseHomeThree from './ShowCaseHomeThree';

function ServiceAppConsulting() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />
            <HeroHomeThree />
            <ServicesHomeThree />
            <FunFactHomeThree />
            <AboutHomeThree />
            {/* <ShowCaseHomeThree /> */}
            {/* <GetTouch /> */}
            {/* <DownloadHomeThree /> */}
            {/* <BlogHomeThree /> */}
            <ProjectHomeThree />
            <FooterHomeThree />
            <BackToTop className="back-to-top-3" />
        </>
    );
}

export default ServiceAppConsulting;
