import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DownloadHomeThree({ className }) {
    const [text2, Settext2] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://dev.ocodeapps.com:1338/api/downloads?populate=*')
            .then((res) => {
                Settext2(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    function imageurl(data) {
        const baseurl = 'http://dev.ocodeapps.com:1338';
        const dataurl = data.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section className={`appie-download-3-area pt-100 ${className || ''}`} id="download">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Download app today!</h3>
                                <p>Download app for Andraoid today — it's free.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {text2
                            ? text2.map((x) => (
                                  <div className="col-lg-6">
                                      <div
                                          className="appie-download-3-box mt-30 mr-20 wow animated fadeInLeft"
                                          data-wow-duration="2000ms"
                                          data-wow-delay="200ms"
                                      >
                                          <div className="content">
                                              <h4 className="title">{x.attributes.heading}</h4>
                                              <p>{x.attributes.tagline}</p>
                                              <a className="main-btn  main-btn-2" href="#">
                                                  <i className="fab fa-google-play" />
                                                  {x.attributes.text}
                                              </a>
                                          </div>
                                          <div className="thumb text-center">
                                              <img
                                                  src={
                                                      x.attributes
                                                          ? imageurl(x.attributes)
                                                          : 'hgghtyu'
                                                  }
                                                  alt=""
                                              />
                                          </div>
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

export default DownloadHomeThree;
