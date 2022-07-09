import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import serviceThumb from '../../assets/images/service-thumb-1.png';

function ServicesHomeEight() {
    const [text2, Settext2] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://dev.ocodeapps.com:1338/api/descriptions?populate=*')
            .then((res) => {
                Settext2(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    function imageurl(atttribute) {
        const baseurl = 'http://dev.ocodeapps.com:1338';
        const dataurl = atttribute.image1.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section
                className="appie-services-2-area appie-services-8-area pt-90 pb-55"
                id="service"
            >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-8">
                            <div className="appie-section-title">
                                <h3 className="appie-title">
                                    {text2
                                        ? text2.map((x) => <h3>{x.attributes.heading}</h3>)
                                        : 'hgfhgf'}
                                </h3>
                                {/* <p>The app provides design and digital marketing.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="
                    appie-single-service-2 appie-single-service-about
                    mt-30
                    wow
                    animated
                    fadeInUp
                  "
                                        data-wow-duration="2000ms"
                                        data-wow-delay="200ms"
                                    >
                                        <div className="icon">
                                            <i className="fal fa-tv" />
                                        </div>
                                        <h4 className="title">
                                            {text2
                                                ? text2.map((x) => (
                                                      <span>{x.attributes.text1}</span>
                                                  ))
                                                : 'hgfhgf'}
                                        </h4>
                                        {/* <p>
                                            He lost his bottle loo don't get shirty with me ruddy.
                                        </p> */}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="
                    appie-single-service-2 appie-single-service-about
                    item-2
                    mt-30
                    wow
                    animated
                    fadeInUp
                  "
                                        data-wow-duration="2000ms"
                                        data-wow-delay="400ms"
                                    >
                                        <div className="icon">
                                            <i className="fal fa-code" />
                                        </div>
                                        <h4 className="title">
                                            {text2
                                                ? text2.map((x) => (
                                                      <span>{x.attributes.text2}</span>
                                                  ))
                                                : 'hgfhgf'}
                                        </h4>
                                        {/* <p>
                                            He lost his bottle loo don't get shirty with me ruddy.
                                        </p> */}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="
                    appie-single-service-2 appie-single-service-about
                    item-3
                    mt-30
                    wow
                    animated
                    fadeInUp
                  "
                                        data-wow-duration="2000ms"
                                        data-wow-delay="600ms"
                                    >
                                        <div className="icon">
                                            <i className="fal fa-user-friends" />
                                        </div>
                                        <h4 className="title">
                                            {text2
                                                ? text2.map((x) => (
                                                      <span>{x.attributes.text3}</span>
                                                  ))
                                                : 'hgfhgf'}
                                        </h4>
                                        {/* <p>
                                            He lost his bottle loo don't get shirty with me ruddy.
                                        </p> */}
                                    </div>
                                </div>
                                {/* <div className="col-lg-6 col-md-6">
                                    <div
                                        className="
                    appie-single-service-2 appie-single-service-about
                    item-4
                    mt-30
                    wow
                    animated
                    fadeInUp
                  "
                                        data-wow-duration="2000ms"
                                        data-wow-delay="200ms"
                                    >
                                        <div className="icon">
                                            <i className="fal fa-mobile" />
                                        </div>
                                        <h4 className="title">Choose a App</h4>
                                        <p>
                                            He lost his bottle loo don't get shirty with me ruddy.
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="service-thumb">
                                {text2
                                    ? text2.map((x) => (
                                          <img
                                              src={
                                                  x.attributes ? imageurl(x.attributes) : 'hgghtyu'
                                              }
                                              alt=""
                                          />
                                      ))
                                    : 'hgfhgf'}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesHomeEight;
