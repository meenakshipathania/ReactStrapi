import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';
import Forms from './Forms';

function Contact() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="CONTACT"
                breadcrumb={[
                    { link: '/home-three', title: 'home' },
                    { link: '/service', title: 'Portfolio' },
                ]}
            />
            <Forms />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Contact;
