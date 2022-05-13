import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import AppService1 from './Appservice1';
// import BlogSideBar from './BlogSideBar';
import Header from './Header';
import Hero from './Hero';

function SingleApp1() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <Header action={drawerAction.toggle} />
            <Hero
                title="Blog Detail"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/news', title: 'Blogs' },
                    { link: '/news/single-news', title: 'Blog' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <AppService1 />
                        </div>
                        {/* <div className="col-lg-4 col-md-5">
                            <BlogSideBar />
                        </div> */}
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default SingleApp1;
