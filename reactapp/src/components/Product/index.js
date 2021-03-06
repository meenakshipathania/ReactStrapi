import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import Drawer from '../Mobile/Drawer';
// import Blogs from './Blogs';
// import BlogSideBar from './BlogSideBar';
import HeaderNews from './HeaderNews';
import Products from './Product';
import HeroNews from './HeroNews';

function Product() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews action={drawerAction.toggle} />
            <HeroNews
                title="PRODUCTS"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/news', title: 'Products' },
                ]}
            />
            {/* <section className="blogpage-section">
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
            </section> */}
            <Products />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Product;
