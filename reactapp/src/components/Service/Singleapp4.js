import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import AppService4 from './Appservice4';
import Header from './Header';
import Hero from './Hero';

function SingleApp4() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <Header action={drawerAction.toggle} />
            <Hero
                title="PROGRESSIVE WEB APP SERVICES"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/app-services', title: 'Services' },
                    { link: '/progressive-web-apps', title: 'Progressive Web Apps' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <AppService4 />
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default SingleApp4;
