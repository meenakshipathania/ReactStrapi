import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import AppService5 from './Appservice5';
import Header from './Header';
import Hero from './Hero';

function SingleApp5() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <Header action={drawerAction.toggle} />
            <Hero
                title="APPS MAINTAINENCE AND SUPPORT SERVICES"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/app-services', title: 'Services' },
                    { link: '/app-Maintenance-support', title: 'App Maintaince and support' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <AppService5 />
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default SingleApp5;
