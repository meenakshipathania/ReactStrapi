import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ServicesAbout() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/abouts')
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
                        <div className="col-lg-12 col-md-8">
                            <div className="appie-section-title">
                                <h3 className="appie-title">  {data ? data.map((x) => <h3>{x.attributes.heading}</h3>) : 'hgfhgf'}</h3>
                                <p>  {data ? data.map((x) => <p>{x.attributes.para}</p>) : 'hgfhgf'} </p>
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
                                          <i class="fa fa-users"></i>
                                          </div>
                                          <p>{data ? data.map((x) => <p>{x.attributes.text1}</p>) : 'hgfhgf'}</p>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6">
                                      <div
                                          className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                          data-wow-duration="2000ms"
                                          data-wow-delay="200ms"
                                      >
                                          <div className="icon">
                                          <i class="fa fa-cloud-upload"></i>
                                          </div>
                                          <p>{data ? data.map((x) => <p>{x.attributes.text2}</p>) : 'hgfhgf'}</p>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6">
                                      <div
                                          className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                          data-wow-duration="2000ms"
                                          data-wow-delay="200ms"
                                      >
                                          <div className="icon">
                                          <i class="fa fa-cog"></i>
                                          </div>
                                          <p>{data ? data.map((x) => <p>{x.attributes.text3}</p>) : 'hgfhgf'}</p>
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
                                          <i class="fa fa-tachometer"></i>
                                          </div>
                                          <p>{data ? data.map((x) => <p>{x.attributes.text4}</p>) : 'hgfhgf'}</p>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6">
                                      <div
                                          className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                          data-wow-duration="2000ms"
                                          data-wow-delay="200ms"
                                      >
                                          <div className="icon">
                                          <i class="fa fa-tv"></i>
                                          </div>
                                          <p>{data ? data.map((x) => <p>{x.attributes.text5}</p>) : 'hgfhgf'}</p>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6">
                                      <div
                                          className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                          data-wow-duration="2000ms"
                                          data-wow-delay="200ms"
                                      >
                                          <div className="icon">
                                          <i class="fa fa-gift"></i>
                                          </div>
                                          <p>{data ? data.map((x) => <p>{x.attributes.text6}</p>) : 'hgfhgf'}</p>
                                      </div>
                                  </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesAbout;
