import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsService() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://165.227.11.15:1338/api/apps?populate=*')
            .then((res) => {
                Setdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);

    function imageurl(atttribute) {
        const baseurl = 'http://165.227.11.15:1338';
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl1(atttribute) {
        const baseurl = 'http://165.227.11.15:1338';
        const dataurl = atttribute.image1.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl2(atttribute) {
        const baseurl = 'http://165.227.11.15:1338';
        const dataurl = atttribute.image2.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl3(atttribute) {
        const baseurl = 'http://165.227.11.15:1338';
        const dataurl = atttribute.image3.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl4(atttribute) {
        const baseurl = 'http://165.227.11.15:1338';
        const dataurl = atttribute.image4.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl5(atttribute) {
        const baseurl = 'http://165.227.11.15:1338';
        const dataurl = atttribute.image5.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl6(atttribute) {
        const baseurl = 'http://165.227.11.15:1338';
        const dataurl = atttribute.image6.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl7(atttribute) {
        const baseurl = 'http://165.227.11.15:1338';
        const dataurl = atttribute.image7.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl8(atttribute) {
        const baseurl = 'http://165.227.11.15:1338';
        const dataurl = atttribute.image8.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl9(atttribute) {
        const baseurl = 'http://165.227.11.15:1338';
        const dataurl = atttribute.image9.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-details-sidebar mr-50">
                                <div className="service-category-widget">
                                    <ul>
                                        <li>
                                            <i className="fal fa-home"></i>Fast Development
                                        </li>
                                        <li>
                                            <i className="fal fa-tag"></i>App, UX
                                        </li>
                                        <li>
                                            <i className="fal fa-user-friends"></i>20-30 Employees
                                        </li>
                                        <li>
                                            <i className="fal fa-globe"></i>ocodeapps.com
                                        </li>
                                    </ul>
                                </div>
                                <div className="service-download-widget">
                                    <a href="#">
                                        <i className="fal fa-download"></i>
                                        <span>Download docs</span>
                                    </a>
                                </div>
                                <div className="service-download-widget">
                                    <a href="#">
                                        <i className="fal fa-file-pdf"></i>
                                        <span>Characteristics</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <div className="thumb">
                                    {data
                                        ? data.map((x) => (
                                              <img
                                                  src={
                                                      x.attributes
                                                          ? imageurl(x.attributes)
                                                          : 'hgghtyu'
                                                  }
                                                  alt=""
                                              />
                                          ))
                                        : 'hgfhgf'}
                                </div>
                                <div className="content">
                                    <h3 className="title">
                                        <i className="fa fa-briefcase" aria-hidden="true">
                                            &nbsp;
                                        </i>
                                        Business Apps
                                    </h3>
                                    <hr></hr>
                                    <ul className="businesslist">
                                        <li>
                                            <a href="/service/serviceRequest">
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
                                                    ? data.map((x) => <h6 className='padd'>{x.attributes.text1}</h6>)
                                                    : 'hgghtyu'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/service/incity">
                                                {data
                                                    ? data.map((x) => (
                                                          <img
                                                              className="business"
                                                              src={
                                                                  x.attributes
                                                                      ? imageurl2(x.attributes)
                                                                      : 'hgghtyu'
                                                              }
                                                              alt=""
                                                          />
                                                      ))
                                                    : 'hgfhgf'}
                                                {data
                                                    ? data.map((x) => <h6 className='padd'>{x.attributes.text2}</h6>)
                                                    : 'hgghtyu'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/service/greenpal">
                                                {data
                                                    ? data.map((x) => (
                                                          <img
                                                              className="business"
                                                              src={
                                                                  x.attributes
                                                                      ? imageurl3(x.attributes)
                                                                      : 'hgghtyu'
                                                              }
                                                              alt=""
                                                          />
                                                      ))
                                                    : 'hgfhgf'}
                                                {data
                                                    ? data.map((x) => <h6 className='padd'>{x.attributes.text3}</h6>)
                                                    : 'hgghtyu'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/service/gentra">
                                                {data
                                                    ? data.map((x) => (
                                                          <img
                                                              className="business"
                                                              src={
                                                                  x.attributes
                                                                      ? imageurl4(x.attributes)
                                                                      : 'hgghtyu'
                                                              }
                                                              alt=""
                                                          />
                                                      ))
                                                    : 'hgfhgf'}
                                                {data
                                                    ? data.map((x) => <h6 className='padd'>{x.attributes.text4}</h6>)
                                                    : 'hgghtyu'}
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3 className="title">
                                        <i className="fa fa-handshake" aria-hidden="true">
                                            &nbsp;
                                        </i>
                                        Social Apps
                                    </h3>
                                    <hr></hr>
                                    <ul className="businesslist">
                                        <li>
                                            <a href="/service/vlife">
                                                {data
                                                    ? data.map((x) => (
                                                          <img
                                                              className="business"
                                                              src={
                                                                  x.attributes
                                                                      ? imageurl5(x.attributes)
                                                                      : 'hgghtyu'
                                                              }
                                                              alt=""
                                                          />
                                                      ))
                                                    : 'hgfhgf'}
                                                {data
                                                    ? data.map((x) => <h6 className='padd'>{x.attributes.text5}</h6>)
                                                    : 'hgghtyu'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/service/fanzapp">
                                                {data
                                                    ? data.map((x) => (
                                                          <img
                                                              className="business"
                                                              src={
                                                                  x.attributes
                                                                      ? imageurl6(x.attributes)
                                                                      : 'hgghtyu'
                                                              }
                                                              alt=""
                                                          />
                                                      ))
                                                    : 'hgfhgf'}
                                                {data
                                                    ? data.map((x) => <h6 className='padd'>{x.attributes.text6}</h6>)
                                                    : 'hgghtyu'}
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3 className="title">
                                        <i className="fa fa-mobile" aria-hidden="true">
                                            &nbsp;
                                        </i>
                                        Other Apps
                                    </h3>
                                    <hr></hr>
                                    <ul className="businesslist">
                                        <li>
                                            <a href="/service/huawei">
                                                {data
                                                    ? data.map((x) => (
                                                          <img
                                                              className="business"
                                                              src={
                                                                  x.attributes
                                                                      ? imageurl7(x.attributes)
                                                                      : 'hgghtyu'
                                                              }
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
                                            <a href="/service/mehanapp">
                                                {data
                                                    ? data.map((x) => (
                                                          <img
                                                              className="business"
                                                              src={
                                                                  x.attributes
                                                                      ? imageurl8(x.attributes)
                                                                      : 'hgghtyu'
                                                              }
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
                                            <a href="/service/collab">
                                                {data
                                                    ? data.map((x) => (
                                                          <img
                                                              className="business"
                                                              src={
                                                                  x.attributes
                                                                      ? imageurl9(x.attributes)
                                                                      : 'hgghtyu'
                                                              }
                                                              alt=""
                                                          />
                                                      ))
                                                    : 'hgfhgf'}
                                                {data
                                                    ? data.map((x) => <h6 className='padd'>{x.attributes.text9}</h6>)
                                                    : 'hgghtyu'}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsService;
