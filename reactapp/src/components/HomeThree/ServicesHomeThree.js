import React, { useEffect, useState } from 'react';
import axios from 'axios';
import iconOne from '../../assets/images/icon/1.png';
import iconTwo from '../../assets/images/icon/2.png';
import iconThree from '../../assets/images/icon/3.png';
import iconFour from '../../assets/images/icon/4.png';

function ServicesHomeThree() {
    const [gettext, Settext] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://165.227.11.15:1338/api/descriptions')
            .then((res) => {
                Settext(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    return (
        <>
            <section className="appie-service-area appie-service-3-area pt-195 pb-100" id="service">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">
                                    {gettext
                                        ? gettext.map((x) => <a>{x.attributes.youwant}</a>)
                                        : 'hgfhgf'}
                                </h3>
                                {/* <p>
                                    {gettext
                                        ? gettext.map((x) => <p>{x.attributes.small_line}</p>)
                                        : 'hgfhgf'}
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-2
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={iconOne} alt="" />
                                </div>
                                <h4 className="appie-title">
                                    {gettext
                                        ? gettext.map((x) => <span>{x.attributes.tag1}</span>)
                                        : 'hgfhgf'}
                                </h4>
                                {/* <p>
                                    {gettext
                                        ? gettext.map((x) => <p>{x.attributes.tagline}</p>)
                                        : 'hgfhgf'}
                                </p> */}
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-2
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={iconTwo} alt="" />
                                </div>
                                <h4 className="appie-title">
                                    {gettext
                                        ? gettext.map((x) => <span>{x.attributes.tag2}</span>)
                                        : 'hgfhgf'}
                                </h4>
                                {/* <p>
                                    {gettext
                                        ? gettext.map((x) => <p>{x.attributes.tagline}</p>)
                                        : 'hgfhgf'}
                                </p> */}
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-2
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={iconThree} alt="" />
                                </div>
                                <h4 className="appie-title">
                                    {gettext
                                        ? gettext.map((x) => <span>{x.attributes.tag3}</span>)
                                        : 'hgfhgf'}
                                </h4>
                                {/* <p>
                                    {gettext
                                        ? gettext.map((x) => <p>{x.attributes.tagline}</p>)
                                        : 'hgfhgf'}
                                </p> */}
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-2
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={iconFour} alt="" />
                                </div>
                                <h4 className="appie-title">
                                    {gettext
                                        ? gettext.map((x) => <span>{x.attributes.tag4}</span>)
                                        : 'hgfhgf'}
                                </h4>
                                {/* <p>
                                    {gettext
                                        ? gettext.map((x) => <p>{x.attributes.tagline}</p>)
                                        : 'hgfhgf'}
                                </p> */}
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesHomeThree;
