import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import thumb from '../../assets/images/service-details-thumb.jpg';

const apiUrl = 'http://localhost:1337/api/portheaders?populate=*';
const NewApi = 'http://localhost:1337/api/businessapps?populate=*';
const NewUrl = 'http://localhost:1337/api/socialapps?populate=*';
const ApiUrl = 'http://localhost:1337/api/otherapps?populate=*';
function DetailsService() {
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
        const dataurl = atttribute.image2.data[0].attributes.url;
        return baseurl + dataurl;
    }

    const [business, Setbusiness] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(NewApi, { cancelToken: request.token })
                .then((res) => {
                    Setbusiness(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });
    function imageurl1(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image1.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl2(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image2.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl3(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image3.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl4(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image4.data[0].attributes.url;
        return baseurl + dataurl;
    }

    const [social, Setsocial] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(NewUrl, { cancelToken: request.token })
                .then((res) => {
                    Setsocial(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });
    function imageurl11(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image1.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl22(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image2.data[0].attributes.url;
        return baseurl + dataurl;
    }

    const [other, Setother] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(ApiUrl, { cancelToken: request.token })
                .then((res) => {
                    Setother(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });
    function imageurl111(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image1.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl222(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image2.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl333(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image3.data[0].attributes.url;
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
                                            <i className="fal fa-bookmark"></i>Appie Template
                                        </li>
                                        <li>
                                            <i className="fal fa-globe"></i>quomodosoft.com/appie
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
                                            <a href="#">
                                                {business
                                                    ? business.map((x) => (
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
                                                {business
                                                    ? business.map((x) => (
                                                          <h6>{x.attributes.text1}</h6>
                                                      ))
                                                    : 'hgghtyu'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {business
                                                    ? business.map((x) => (
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
                                                {business
                                                    ? business.map((x) => (
                                                          <h6>{x.attributes.text2}</h6>
                                                      ))
                                                    : 'hgghtyu'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {business
                                                    ? business.map((x) => (
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
                                                {business
                                                    ? business.map((x) => (
                                                          <h6>{x.attributes.text3}</h6>
                                                      ))
                                                    : 'hgghtyu'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {business
                                                    ? business.map((x) => (
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
                                                {business
                                                    ? business.map((x) => (
                                                          <h6>{x.attributes.text4}</h6>
                                                      ))
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
                                            <a href="#">
                                                {social
                                                    ? social.map((x) => (
                                                          <img
                                                              className="business"
                                                              src={
                                                                  x.attributes
                                                                      ? imageurl11(x.attributes)
                                                                      : 'hgghtyu'
                                                              }
                                                              alt=""
                                                          />
                                                      ))
                                                    : 'hgfhgf'}
                                                {social
                                                    ? social.map((x) => (
                                                          <h6>{x.attributes.text1}</h6>
                                                      ))
                                                    : 'hgghtyu'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {social
                                                    ? social.map((x) => (
                                                          <img
                                                              className="business"
                                                              src={
                                                                  x.attributes
                                                                      ? imageurl22(x.attributes)
                                                                      : 'hgghtyu'
                                                              }
                                                              alt=""
                                                          />
                                                      ))
                                                    : 'hgfhgf'}
                                                {social
                                                    ? social.map((x) => (
                                                          <h6>{x.attributes.text2}</h6>
                                                      ))
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
                                            <a href="#">
                                                {other
                                                    ? other.map((x) => (
                                                          <img
                                                              className="business"
                                                              src={
                                                                  x.attributes
                                                                      ? imageurl111(x.attributes)
                                                                      : 'hgghtyu'
                                                              }
                                                              alt=""
                                                          />
                                                      ))
                                                    : 'hgfhgf'}
                                                {other
                                                    ? other.map((x) => (
                                                          <h6>{x.attributes.text1}</h6>
                                                      ))
                                                    : 'hgghtyu'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {other
                                                    ? other.map((x) => (
                                                          <img
                                                              className="business"
                                                              src={
                                                                  x.attributes
                                                                      ? imageurl222(x.attributes)
                                                                      : 'hgghtyu'
                                                              }
                                                              alt=""
                                                          />
                                                      ))
                                                    : 'hgfhgf'}
                                                {other
                                                    ? other.map((x) => (
                                                          <h6>{x.attributes.text2}</h6>
                                                      ))
                                                    : 'hgghtyu'}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {other
                                                    ? other.map((x) => (
                                                          <img
                                                              className="business"
                                                              src={
                                                                  x.attributes
                                                                      ? imageurl333(x.attributes)
                                                                      : 'hgghtyu'
                                                              }
                                                              alt=""
                                                          />
                                                      ))
                                                    : 'hgfhgf'}
                                                {other
                                                    ? other.map((x) => (
                                                          <h6>{x.attributes.text3}</h6>
                                                      ))
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
