import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import iconOne from '../../assets/images/icon/1.png';
// import iconTwo from '../../assets/images/icon/2.png';
// import iconThree from '../../assets/images/icon/3.png';
// import iconFour from '../../assets/images/icon/4.png';

const apiUrl = 'http://localhost:1337/api/wants';
const newApiUrl = 'http://localhost:1337/api/welcomeapis?populate=*';
function ServicesHomeThree() {
    const [gettext, Settext] = useState([]);
    const [getdata, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(apiUrl, { cancelToken: request.token })
                .then((res) => {
                    Settext(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(newApiUrl, { cancelToken: request.token })
                .then((resp) => {
                    Setdata(resp.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });

    function imageurl(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
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
                                <p>
                                    {gettext
                                        ? gettext.map((x) => <p>{x.attributes.small_line}</p>)
                                        : 'hgfhgf'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {getdata
                            ? getdata.map((x) => (
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
                                          <div>
                                              <img
                                                  src={
                                                      x.attributes
                                                          ? imageurl(x.attributes)
                                                          : 'hgghtyu'
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                          <h4 className="appie-title">{x.attributes.headline}</h4>
                                          <p>{x.attributes.tagline}</p>
                                          <a href="#">
                                              Read More <i className="fal fa-arrow-right" />
                                          </a>
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

export default ServicesHomeThree;
