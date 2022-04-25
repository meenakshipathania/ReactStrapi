import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Error from './components/Error';
import Loader from './components/Helper/Loader';
import ScrollToTop from './components/Helper/ScrollToTop';
import HomeEight from './components/HomeEight';
import HomeFive from './components/HomeFive';
import HomeFour from './components/HomeFour';
// import HomeOne from './components/HomeOne';
import HomeSeven from './components/HomeSeven';
import HomeSix from './components/HomeSix';
import HomeThree from './components/HomeThree';
// import Hometwo from './components/HomeTwo';
import News from './components/News';
import SingleNews from './components/News/SingleNews';
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
                            <Route exact path="/home-four" component={HomeFour} />
                            <Route exact path="/home-five" component={HomeFive} />
                            <Route exact path="/home-six" component={HomeSix} />
                            <Route exact path="/home-seven" component={HomeSeven} />
                            <Route exact path="/home-eight" component={HomeEight} />
                            <Route exact path="/news" component={News} />
                            <Route exact path="/news/single-news" component={SingleNews} />
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
