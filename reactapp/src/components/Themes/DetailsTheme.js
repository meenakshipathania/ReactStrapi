import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsIncity() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/apps?populate=*')
            .then((res) => {
                Setdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);

    function imageurl7(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image7.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl8(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image8.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl1(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image1.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl10(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image10.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl11(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image11.data[0].attributes.url;
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
                        <a href="/product/huawei">
                            {data
                                ? data.map((x) => (
                                      <img
                                          className="business"
                                          src={x.attributes ? imageurl7(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {data
                                ? data.map((x) => <h6 className='padd'>{x.attributes.text7}</h6>)
                                : 'hgghtyu'}
                        </a>
                    </li>
                    <li>
                        <a href="/product/mehan">
                            {data
                                ? data.map((x) => (
                                      <img
                                          className="business"
                                          src={x.attributes ? imageurl8(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {data
                                ? data.map((x) => <h6 className='padd'>{x.attributes.text8}</h6>)
                                : 'hgghtyu'}
                        </a>
                    </li>
                    <li>
                        <a href="/product/service-request">
                            {data
                                ? data.map((x) => (
                                      <img
                                          className="business"
                                          src={x.attributes ? imageurl1(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {data
                                ? data.map((x) => <h6 className='padd'>{x.attributes.text1}</h6>)
                                : 'hgghtyu'}
                        </a>
                    </li>
                    <li>
                        <a href="/product/theme-product">
                            {data
                                ? data.map((x) => (
                                      <img
                                          className="business"
                                          src={x.attributes ? imageurl10(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {data
                                ? data.map((x) => <h6 className='padd'>{x.attributes.text10}</h6>)
                                : 'hgghtyu'}
                        </a>
                    </li>
                    <li>
                        <a href="/product/theme-product-2">
                            {data
                                ? data.map((x) => (
                                      <img
                                          className="business limar"
                                          src={x.attributes ? imageurl11(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {data
                                ? data.map((x) => <h6 className='padd'>{x.attributes.theme2}</h6>)
                                : 'hgghtyu'}
                        </a>
                    </li>
                    <li>
                        <a href="/product/theme-product-3">
                            {data
                                ? data.map((x) => (
                                      <img
                                          className="business limar"
                                          src={x.attributes ? imageurl10(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {data
                                ? data.map((x) => <h6 className='padd'>{x.attributes.theme3}</h6>)
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
