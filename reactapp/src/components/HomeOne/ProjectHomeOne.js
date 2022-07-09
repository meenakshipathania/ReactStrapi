import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectHomeOne() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://dev.ocodeapps.com:1338/api/logos?populate=*')
            .then((res) => {
                Setdata(res.data.data);
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
            <section className="appie-project-area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-project-box wow animated slideInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms" // const NewUrl = 'http://dev.ocodeapps.com:1338/api/socialapps?populate=*';
                                // const ApiUrl = 'http://dev.ocodeapps.com:1338/api/otherapps?populate=*';
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="appie-project-content">
                                            {data
                                                ? data.map((x) => (
                                                      <h1 className="title">
                                                          {x.attributes.heading}
                                                      </h1>
                                                  ))
                                                : 'hgfhgf'}
                                            <form action="#">
                                                <div className="input-box mt-30">
                                                    <input type="text" placeholder="Your email" />
                                                    <button type="button">Subscribe</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        {/* <div className="appie-project-thumb"> */}
                                        {data
                                            ? data.map((x) => (
                                                  <img
                                                      className="mar"
                                                      src={
                                                          x.attributes
                                                              ? imageurl(x.attributes)
                                                              : 'hgghtyu'
                                                      }
                                                      alt=""
                                                  />
                                              ))
                                            : 'hgfhgf'}
                                        {/* </div> */}
                                    </div>
                                </div>
                                {/* <div className="appie-project-thumb">
                                    <img src="assets/images/order.png" alt="" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHomeOne;
