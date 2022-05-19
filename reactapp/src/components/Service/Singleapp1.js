import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import AppService1 from './Appservice1';
import Header from './Header';
import Hero from './Hero';

function SingleApp1() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <Header action={drawerAction.toggle} />
            <Hero
                title="APPS CONSULTING SERVICES"
                breadcrumb={[
                    { link:'/',title:'home' },
                    { link:'/app-services',title:'Services' },
                    { link:'/app-consulting',title:'App Consulting' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <AppService1 />
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default SingleApp1;
