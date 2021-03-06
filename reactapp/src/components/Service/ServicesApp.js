import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import blogImg1 from '../../assets/images/blog/1.jpg';
// import blogImg2 from '../../assets/images/blog/2.jpg';
// import blogImg3 from '../../assets/images/blog/3.jpg';
// import blogImg4 from '../../assets/images/blog/4.jpg';
// import blogImg5 from '../../assets/images/blog/5.jpg';
// import blogImg6 from '../../assets/images/blog/6.jpg';
// import blogImg7 from '../../assets/images/blog/7.jpg';
// import blogImg8 from '../../assets/images/blog/8.jpg';

function ServicesApp() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://dev.ocodeapps.com:1338/api/services?populate=*')
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
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    const [head, Sethead] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://dev.ocodeapps.com:1338/api/descriptions?populate=*')
            .then((res) => {
                Sethead(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    return (
        <>
            <div className="container">
                <div className="row mb-20">
                    <div className="col-lg-12">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                                {head
                                    ? head.map((x) => <span>{x.attributes.head7}</span>)
                                    : 'hgfhgf'}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data
                        ? data.slice(0, 6).map((x) => (
                              <div className="col-md-4 col-lg-4">
                                  <div className="post-item-1">
                                      <img
                                          src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                      <div className="b-post-details">
                                          <h3>
                                              <a href={'/' + x.attributes.slug}>
                                                  {x.attributes.text}
                                              </a>
                                          </h3>
                                          <p>{x.attributes.description}</p>
                                          <a className="read-more" href={'/' + x.attributes.slug}>
                                              Read More<i className="fal fa-arrow-right"></i>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          ))
                        : 'hgfhgf'}
                </div>
            </div>
            {/* <div className="row">
                <div className="col-lg-12">
                    <div className="bisylms-pagination">
                        <span className="current">01</span>
                        <a href="#">02</a>
                        <a className="next" href="#">
                            next<i className="fal fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default ServicesApp;
