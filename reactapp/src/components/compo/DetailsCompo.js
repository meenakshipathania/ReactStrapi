import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsIncity() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://dev.ocodeapps.com:1338/api/apps?populate=*')
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
        const dataurl = atttribute.image10.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl1(atttribute) {
        const baseurl = 'http://dev.ocodeapps.com:1338';
        const dataurl = atttribute.image3.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="businesslist listt">
                                <li>
                                    <a href="/product/components/freedemo">
                                        {data
                                            ? data.map((x) => (
                                                  <img
                                                      className="business"
                                                      src={
                                                          x.attributes
                                                              ? imageurl(x.attributes)
                                                              : 'hgghtyu'
                                                      }
                                                      alt=""
                                                  />
                                              ))
                                            : 'hgfhgf'}
                                        {data
                                            ? data.map((x) => (
                                                  <h6 className="padd">{x.attributes.demo}</h6>
                                              ))
                                            : 'hgghtyu'}
                                    </a>
                                </li>
                                <li>
                                    <a href="/product/components/greenpal">
                                        {data
                                            ? data.map((x) => (
                                                  <img
                                                      className="business"
                                                      src={
                                                          x.attributes
                                                              ? imageurl1(x.attributes)
                                                              : 'hgghtyu'
                                                      }
                                                      alt=""
                                                  />
                                              ))
                                            : 'hgfhgf'}
                                        {data
                                            ? data.map((x) => (
                                                  <h6 className="padd">{x.attributes.text3}</h6>
                                              ))
                                            : 'hgghtyu'}
                                    </a>
                                </li>
                                <li>
                                    <a href="/product/components/plugin-product">
                                        {data
                                            ? data.map((x) => (
                                                  <img
                                                      className="business"
                                                      src={
                                                          x.attributes
                                                              ? imageurl(x.attributes)
                                                              : 'hgghtyu'
                                                      }
                                                      alt=""
                                                  />
                                              ))
                                            : 'hgfhgf'}
                                        {data
                                            ? data.map((x) => (
                                                  <h6 className="padd">{x.attributes.plugin}</h6>
                                              ))
                                            : 'hgghtyu'}
                                    </a>
                                </li>
                                <li>
                                    <a href="/product/components/plugin-product-3">
                                        {data
                                            ? data.map((x) => (
                                                  <img
                                                      className="business"
                                                      src={
                                                          x.attributes
                                                              ? imageurl(x.attributes)
                                                              : 'hgghtyu'
                                                      }
                                                      alt=""
                                                  />
                                              ))
                                            : 'hgfhgf'}
                                        {data
                                            ? data.map((x) => (
                                                  <h6 className="padd">{x.attributes.plugin3}</h6>
                                              ))
                                            : 'hgghtyu'}
                                    </a>
                                </li>
                                <li>
                                    <a href="/product/components/plugin-product-4">
                                        {data
                                            ? data.map((x) => (
                                                  <img
                                                      className="business limar"
                                                      src={
                                                          x.attributes
                                                              ? imageurl(x.attributes)
                                                              : 'hgghtyu'
                                                      }
                                                      alt=""
                                                  />
                                              ))
                                            : 'hgfhgf'}
                                        {data
                                            ? data.map((x) => (
                                                  <h6 className="padd">{x.attributes.plugin4}</h6>
                                              ))
                                            : 'hgghtyu'}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsIncity;
