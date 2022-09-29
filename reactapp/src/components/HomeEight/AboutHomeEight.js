import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import thumb4 from '../../assets/images/about-thumb-4.png';
// import thumb5 from '../../assets/images/about-thumb-5.png';

function AboutHomeEight() {
    const [img, Setimg] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('https://admin.ocodeapps.com/api/testimonials?populate=*')
            .then((res) => {
                Setimg(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    function imageurl(data) {
        const baseurl = 'https://admin.ocodeapps.com';
        const dataurl = data.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section className="appie-about-8-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title mb-30">
                                <h3 className="appie-title">
                                    We bring everything <br />
                                    that's required to build apps
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {img
                            ? img.slice(3, 6).map((x) => (
                                  <div className="col-lg-6">
                                      <div className="appie-about-8-box">
                                          <h3 className="title">{x.attributes.text}</h3>
                                          <p>
                                              {x.attributes.name} <br />
                                              {x.attributes.position}
                                          </p>
                                          <a className="main-btn" href="#">
                                              Learn More <i className="fal fa-arrow-right" />
                                          </a>
                                          <div className="thumb">
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

export default AboutHomeEight;
