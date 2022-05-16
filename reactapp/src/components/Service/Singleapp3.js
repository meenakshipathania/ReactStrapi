import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import AppService3 from './Appservice3';
import Header from './Header';
import Hero from './Hero';

function SingleApp3() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <Header action={drawerAction.toggle} />
            <Hero
                title="MOBILE APP DEVELOPMENT"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/app-services', title: 'Services' },
                    { link: '/mobile-app-development', title: 'Mobile App Development' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <AppService3 />
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default SingleApp3;
