import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ServicesAbout() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://165.227.11.15:1338/api/abouts')
            .then((res) => {
                Setdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    return (
        <>
            <section className="appie-services-2-area pt-90 pb-55" id="service">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-12 col-md-12">
                            <div className="appie-section-title">
                                <h3 className="appie-title">  {data ? data.map((x) => <span>{x.attributes.heading}</span>) : 'hgfhgf'}</h3>
                                <p> {data ? data.map((x) => <span>{x.attributes.para}</span>) : 'hgfhgf'} </p>
                            </div>
                        </div>
                    </div>
                    <div className="row cen">
                                  <div className="col-lg-4 col-md-6">
                                      <div
                                          className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                          data-wow-duration="2000ms"
                                          data-wow-delay="200ms"
                                      >
                                          <div className="icon">
                                          <i className="fa fa-users"></i>
                                          </div>
                                          <p>{data ? data.map((x) => <span>{x.attributes.text1}</span>) : 'hgfhgf'}</p>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6">
                                      <div
                                          className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                          data-wow-duration="2000ms"
                                          data-wow-delay="200ms"
                                      >
                                          <div className="icon">
                                          <i className="fa fa-cloud-upload"></i>
                                          </div>
                                          <p>{data ? data.map((x) => <span>{x.attributes.text2}</span>) : 'hgfhgf'}</p>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6">
                                      <div
                                          className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                          data-wow-duration="2000ms"
                                          data-wow-delay="200ms"
                                      >
                                          <div className="icon">
                                          <i className="fa fa-cog"></i>
                                          </div>
                                          <p>{data ? data.map((x) => <span>{x.attributes.text3}</span>) : 'hgfhgf'}</p>
                                      </div>
                                  </div>
                    </div>
                    <div className="row cen">
                                  <div className="col-lg-4 col-md-6">
                                      <div
                                          className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                          data-wow-duration="2000ms"
                                          data-wow-delay="200ms"
                                      >
                                          <div className="icon">
                                          <i className="fa fa-tachometer"></i>
                                          </div>
                                          <p>{data ? data.map((x) => <span>{x.attributes.text4}</span>) : 'hgfhgf'}</p>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6">
                                      <div
                                          className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                          data-wow-duration="2000ms"
                                          data-wow-delay="200ms"
                                      >
                                          <div className="icon">
                                          <i className="fa fa-tv"></i>
                                          </div>
                                          <p>{data ? data.map((x) => <span>{x.attributes.text5}</span>) : 'hgfhgf'}</p>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6">
                                      <div
                                          className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                          data-wow-duration="2000ms"
                                          data-wow-delay="200ms"
                                      >
                                          <div className="icon">
                                          <i className="fa fa-gift"></i>
                                          </div>
                                          <p>{data ? data.map((x) => <span>{x.attributes.text6}</span>) : 'hgfhgf'}</p>
                                      </div>
                                  </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesAbout;
