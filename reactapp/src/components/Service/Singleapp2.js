import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import AppService2 from './Appservice2';
import Header from './Header';
import Hero from './Hero';

function SingleApp2() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <Header action={drawerAction.toggle} />
            <Hero
                title="APP UI/UX DESIGN SERVICES"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/app-services', title: 'Services' },
                    { link: '/app-design', title: 'App UI/UX design' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <AppService2 />
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default SingleApp2;
