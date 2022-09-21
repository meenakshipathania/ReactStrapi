import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import hero from '../../assets/images/hero-thumb-9.png';
import shapeOne from '../../assets/images/shape/1.png';
import shapeTwo from '../../assets/images/shape/2.png';
import shapeThree from '../../assets/images/shape/3.png';
import shapeFour from '../../assets/images/shape/4.png';

function HeroHomeEight() {
    const [head, Sethead] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://ocodeapps.com:1338//api/descriptions?populate=*')
            .then((res) => {
                Sethead(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    function imageurl(atttribute) {
        const baseurl = 'http://ocodeapps.com:1338/';
        const dataurl = atttribute.imagex.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section className="appie-hero-area appie-hero-8-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-hero-content appie-hero-content-8">
                                <h1 className="appie-title">
                                    {head
                                        ? head.map((x) => <span>{x.attributes.threefirst}</span>)
                                        : 'hgfhgf'}
                                </h1>
                                <p className="parawhite">
                                    {head
                                        ? head.map((x) => <span>{x.attributes.threesecfirst}</span>)
                                        : 'hgfhgf'}
                                </p>
                                <p className="parawhite">
                                    {head
                                        ? head.map((x) => <span>{x.attributes.threesecsec}</span>)
                                        : 'hgfhgf'}
                                </p>
                                <p className="parawhite">
                                    {head
                                        ? head.map((x) => <span>{x.attributes.threesecthree}</span>)
                                        : 'hgfhgf'}
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-google-play" />
                                            <span>Google Play</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="item-2" href="#">
                                            <i className="fab fa-apple" /> <span>App Store</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-hero-thumb-6">
                                <div
                                    className="thumb text-center wow animated fadeInUp"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="600ms"
                                >
                                    {head
                                        ? head.map((x) => (
                                              <img
                                                  src={
                                                      x.attributes
                                                          ? imageurl(x.attributes)
                                                          : 'hgghtyu'
                                                  }
                                                  alt=""
                                              />
                                          ))
                                        : 'hgfhgf'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-8-shape-1">
                    <img src={shapeThree} alt="" />
                </div>
                <div className="home-8-shape-2">
                    <img src={shapeFour} alt="" />
                </div>
                <div className="home-8-shape-3">
                    <img src={shapeOne} alt="" />
                </div>
                <div className="home-8-shape-4">
                    <img src={shapeTwo} alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroHomeEight;
