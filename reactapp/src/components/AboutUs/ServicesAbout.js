import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:1337/api/services';

function ServicesAbout() {
    const [hedd, SetHead] = useState();
    useEffect(() => {
        axios.get(apiUrl).then((res) => {
            SetHead(res.data.data);
        });
    });
    return (
        <>
            <section className="appie-services-2-area pt-90 pb-55" id="service">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-8">
                            <div className="appie-section-title">
                                <h3 className="appie-title">We’re driven by our values</h3>
                                <p>The appie provides good food and health. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {hedd
                            ? hedd.map((x) => (
                                  <div className="col-lg-4 col-md-6">
                                      <div
                                          className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                          data-wow-duration="2000ms"
                                          data-wow-delay="200ms"
                                      >
                                          <div className="icon">
                                              <i className="fa fa-tv"></i>
                                          </div>
                                          <h4 className="title">{x.attributes.heading}</h4>
                                          <p>{x.attributes.des}</p>
                                      </div>
                                  </div>
                              ))
                            : 'hgfhgf'}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesAbout;
