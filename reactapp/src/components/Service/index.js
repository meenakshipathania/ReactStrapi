import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import ServicesApp from './ServicesApp';
// import BlogSideBar from './BlogSideBar';
import Header from './Header';
// import Product from './Product';
import Hero from './Hero';

function Service() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <Header action={drawerAction.toggle} />
             <Hero
                title="SERVICES"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/app-services', title: 'Services' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-7">
                            <ServicesApp />
                        </div>
                        {/* <div className="col-lg-4 col-md-5">
                            <BlogSideBar />
                        </div> */}
                    </div>
                </div>
            </section>
            {/*<Product /> */}
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Service;
