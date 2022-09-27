import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Error from './components/Error';
import Loader from './components/Helper/Loader';
import ScrollToTop from './components/Helper/ScrollToTop';
import HomeEight from './components/HomeEight';
// import HomeFive from './components/HomeFive';
// import HomeFour from './components/HomeFour';
// import HomeOne from './components/HomeOne';
// import HomeSeven from './components/HomeSeven';
// import HomeSix from './components/HomeSix';
import HomeThree from './components/HomeThree';
// import Hometwo from './components/HomeTwo';
import Product from './components/Product';
import Blogsa from './components/Blogs';
// import SingleNews from './components/Blogs/SingleBlog';
import Portfolio from './components/Portfolio';
import ServiceRequest from './components/ServiceRequest';
import Incity from './components/incity';
import Greenpal from './components/Greenpal';
import Gentra from './components/Gentra';
import Vlife from './components/Vlife';
import Fanzapp from './components/Fanzapp';
import Huawei from './components/Huawei';
import Mehanapp from './components/Mehanapp';
import Collab from './components/Collab';
import Compo from './components/compo';
import Script from './components/Scripts';
import Theme from './components/Themes';
import ProductHuawei from './components/ProductHuawei';
import ProductMehan from './components/ProductMehan';
import ProductService from './components/ProductService';
import ProductTheme from './components/ProductTheme';
import CompoFreeDemo from './components/CompoFreeDemo';
import CompoGreenpal from './components/CompoGreenpal';
import CompoPlugin from './components/CompoPlugin';
import CompoPlugin3 from './components/CompoPlugin-3';
import CompoPlugin4 from './components/CompoPlugin-4';
import ScriptDemoPaid from './components/ScriptDemoPaid';
import ScriptProduct2 from './components/ScriptProduct-2';
import ScriptProduct3 from './components/ScriptProduct-3';
import ScriptProduct4 from './components/ScriptProduct-4';
import ProductTheme2 from './components/ProductTheme-2';
import ProductTheme3 from './components/ProductTheme-3';
import SingleBlog1 from './components/Blogs/SingleBlog1';
import SingleBlog2 from './components/Blogs/SingleBlog2';
import SingleBlog3 from './components/Blogs/SingleBlog3';
import SingleBlog4 from './components/Blogs/SingleBlog4';
import SingleBlog5 from './components/Blogs/SingleBlog5';
import SingleBlog6 from './components/Blogs/SingleBlog6';
import Service from './components/Service';
import ServiceUI from './components/ServiceUI';
import ServiceAppConsulting from './components/ServiceAppConsulting';
import ServiceQA from './components/ServiceQA';
import ServicePWA from './components/ServiceProgressive';
import ServiceMaintain from './components/ServiceMaintain';

function Routes() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });
    return (
        <>
            {loading && (
                <div className={`appie-loader ${loading ? 'active' : ''}`}>
                    <Loader />
                </div>
            )}
            <div className={`appie-visible ${loading === false ? 'active' : ''}`}>
                <Router basename="/">
                    <ScrollToTop>
                        <Switch>
                            {/* <Route exact path="/ho" component={HomeThree} /> */}
                            {/* <Route exact path="/home-two" component={Hometwo} />
                            <Route exact path="/home-three" component={HomeThree} /> */}
                            {/* <Route exact path="/home-four" component={HomeFour} />
                            <Route exact path="/home-five" component={HomeFive} />
                            <Route exact path="/home-six" component={HomeSix} />
                            <Route exact path="/home-seven" component={HomeSeven} /> */}
                            <Route exact path="/" component={HomeEight} />
                            <Route exact path="/product" component={Product} />
                            <Route exact path="/education/blog1" component={SingleBlog1} />
                            <Route exact path="/education/blog2" component={SingleBlog2} />
                            <Route exact path="/education/blog3" component={SingleBlog3} />
                            <Route exact path="/education/blog4" component={SingleBlog4} />
                            <Route exact path="/education/blog5" component={SingleBlog5} />
                            <Route exact path="/education/blog6" component={SingleBlog6} />
                            <Route exact path="/blog" component={Blogsa} />
                            <Route exact path="/portfolio" component={Portfolio} />
                            <Route
                                exact
                                path="/portfolio/serviceRequest"
                                component={ServiceRequest}
                            />
                            <Route exact path="/portfolio/incity" component={Incity} />
                            <Route exact path="/portfolio/greenpal" component={Greenpal} />
                            <Route exact path="/portfolio/gentra" component={Gentra} />
                            <Route exact path="/portfolio/vlife" component={Vlife} />
                            <Route exact path="/portfolio/fanzapp" component={Fanzapp} />
                            <Route exact path="/portfolio/huawei" component={Huawei} />
                            <Route exact path="/portfolio/mehanapp" component={Mehanapp} />
                            <Route exact path="/portfolio/collab" component={Collab} />
                            <Route exact path="/product/components" component={Compo} />
                            <Route exact path="/product/script" component={Script} />
                            <Route exact path="/product/theme" component={Theme} />
                            <Route exact path="/huawei" component={ProductHuawei} />
                            <Route exact path="/mehan" component={ProductMehan} />
                            <Route exact path="/service-request" component={ProductService} />
                            <Route exact path="/theme-product" component={ProductTheme} />
                            <Route exact path="/theme-product-2" component={ProductTheme2} />
                            <Route exact path="/theme-product-3" component={ProductTheme3} />
                            <Route
                                exact
                                path="/product/components/freedemo"
                                component={CompoFreeDemo}
                            />
                            <Route
                                exact
                                path="/product/components/greenpal"
                                component={CompoGreenpal}
                            />
                            <Route
                                exact
                                path="/product/components/plugin-product"
                                component={CompoPlugin}
                            />
                            <Route
                                exact
                                path="/product/components/plugin-product-3"
                                component={CompoPlugin3}
                            />
                            <Route
                                exact
                                path="/product/components/plugin-product-4"
                                component={CompoPlugin4}
                            />
                            <Route
                                exact
                                path="/product/script/demopaid"
                                component={ScriptDemoPaid}
                            />
                            <Route
                                exact
                                path="/product/script/script-product-2"
                                component={ScriptProduct2}
                            />
                            <Route
                                exact
                                path="/product/script/script-product-3"
                                component={ScriptProduct3}
                            />
                            <Route
                                exact
                                path="/product/script/script-product-4"
                                component={ScriptProduct4}
                            />
                            <Route exact path="/services" component={Service} />
                            <Route
                                exact
                                path="/services/app-consulting"
                                component={ServiceAppConsulting}
                            />
                            <Route exact path="/services/app-design" component={ServiceUI} />
                            <Route
                                exact
                                path="/services/mobile-app-development"
                                component={HomeThree}
                            />
                            <Route
                                exact
                                path="/services/progressive-web-apps"
                                component={ServicePWA}
                            />
                            <Route
                                exact
                                path="/services/app-Maintenance-support"
                                component={ServiceMaintain}
                            />
                            <Route exact path="/services/app-analytics" component={ServiceQA} />
                            <Route exact path="/about-us" component={AboutUs} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/error" component={Error} />
                            <Route component={Error} />
                        </Switch>
                    </ScrollToTop>
                </Router>
            </div>
        </>
    );
}

export default Routes;
