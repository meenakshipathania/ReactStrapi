import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsIncity() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('https://admin.ocodeapps.com/api/apps?populate=*')
            .then((res) => {
                Setdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);

    function imageurl(atttribute) {
        const baseurl = 'https://admin.ocodeapps.com';
        const dataurl = atttribute.image10.data[0].attributes.url;
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
                                    <Link to="/product/script/demopaid">
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
                                                  <h6 className="padd">{x.attributes.demopaid}</h6>
                                              ))
                                            : 'hgghtyu'}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/product/script/script-product-2">
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
                                                  <h6 className="padd">{x.attributes.script2}</h6>
                                              ))
                                            : 'hgghtyu'}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/product/script/script-product-3">
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
                                                  <h6 className="padd">{x.attributes.script3}</h6>
                                              ))
                                            : 'hgghtyu'}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/product/script/script-product-4">
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
                                                  <h6 className="padd">{x.attributes.script4}</h6>
                                              ))
                                            : 'hgghtyu'}
                                    </Link>
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
