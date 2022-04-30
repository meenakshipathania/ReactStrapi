import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Error from './components/Error';
import Loader from './components/Helper/Loader';
import ScrollToTop from './components/Helper/ScrollToTop';
// import HomeEight from './components/HomeEight';
// import HomeFive from './components/HomeFive';
// import HomeFour from './components/HomeFour';
// import HomeOne from './components/HomeOne';
// import HomeSeven from './components/HomeSeven';
// import HomeSix from './components/HomeSix';
import HomeThree from './components/HomeThree';
// import Hometwo from './components/HomeTwo';
import News from './components/News';
import Blogsa from './components/Blogs';
// import SingleNews from './components/Blogs/SingleBlog';
import Service from './components/Service';
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
                <Router>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={HomeThree} />
                            {/* <Route exact path="/home-two" component={Hometwo} />
                            <Route exact path="/home-three" component={HomeThree} /> */}
                            {/* <Route exact path="/home-four" component={HomeFour} />
                            <Route exact path="/home-five" component={HomeFive} />
                            <Route exact path="/home-six" component={HomeSix} />
                            <Route exact path="/home-seven" component={HomeSeven} />
                            <Route exact path="/home-eight" component={HomeEight} /> */}
                            <Route exact path="/news" component={News} />
                            <Route exact path="/blog1" component={SingleBlog1} />
                            <Route exact path="/blog2" component={SingleBlog2} />
                            <Route exact path="/blog3" component={SingleBlog3} />
                            <Route exact path="/blog4" component={SingleBlog4} />
                            <Route exact path="/blog5" component={SingleBlog5} />
                            <Route exact path="/blog6" component={SingleBlog6} />
                            <Route exact path="/blog" component={Blogsa} />
                            <Route exact path="/service" component={Service} />
                            <Route exact path="/service/serviceRequest" component={ServiceRequest} />
                            <Route exact path="/service/incity" component={Incity} />
                            <Route exact path="/service/greenpal" component={Greenpal} />
                            <Route exact path="/service/gentra" component={Gentra} />
                            <Route exact path="/service/vlife" component={Vlife} />
                            <Route exact path="/service/fanzapp" component={Fanzapp} />
                            <Route exact path="/service/huawei" component={Huawei} />
                            <Route exact path="/service/mehanapp" component={Mehanapp} />
                            <Route exact path="/service/collab" component={Collab} />
                            <Route exact path="/compo" component={Compo} />
                            <Route exact path="/script" component={Script} />
                            <Route exact path="/theme" component={Theme} />
                            <Route exact path="/product/huawei" component={ProductHuawei} />
                            <Route exact path="/product/mehan" component={ProductMehan} />
                            <Route exact path="/product/service-request" component={ProductService} />
                            <Route exact path="/product/theme-product" component={ProductTheme} />
                            <Route exact path="/product/theme-product-2" component={ProductTheme2} />
                            <Route exact path="/product/theme-product-3" component={ProductTheme3} />
                            <Route exact path="/compo/compofreedemo" component={CompoFreeDemo} />
                            <Route exact path="/compo/greenpal" component={CompoGreenpal} />
                            <Route exact path="/compo/plugin-product" component={CompoPlugin} />
                            <Route exact path="/compo/plugin-product-3" component={CompoPlugin3} />
                            <Route exact path="/compo/plugin-product-4" component={CompoPlugin4} />
                            <Route exact path="/script/scriptdemopaid" component={ScriptDemoPaid} />
                            <Route exact path="/script/script-product-2" component={ScriptProduct2} />
                            <Route exact path="/script/script-product-3" component={ScriptProduct3} />
                            <Route exact path="/script/script-product-4" component={ScriptProduct4} />
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
