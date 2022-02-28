import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:1337/api/downloads?populate=*';
function DownloadHomeThree({ className }) {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(apiUrl, { cancelToken: request.token })
                .then((res) => {
                    Setdata(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });
    function imageurl(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.images.data[0].attributes.url;
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
                        {data
                            ? data.map((x) => (
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
