import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
import Blogs from './Blogs';
import BlogSideBar from './BlogSideBar';
import HeaderBlog from './HeaderBlog';
// import Product from './Product';
import HeroBlog from './HeroBlog';

function Blogsa() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderBlog action={drawerAction.toggle} />
             <HeroBlog
                title="Blogs"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/blogs', title: 'Blogs' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <Blogs />
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <BlogSideBar />
                        </div>
                    </div>
                </div>
            </section>
            {/*<Product /> */}
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Blogsa;
