import React, { useEffect, useState } from 'react';
import axios from 'axios';
import icon1 from '../../assets/images/icon/1.png';
import icon5 from '../../assets/images/icon/5.svg';
import icon6 from '../../assets/images/icon/6.svg';
import icon7 from '../../assets/images/icon/7.svg';

// const NewApiUrl = 'http://localhost:1337/api/newservice1s?populate=*';
// const NewUrl = 'http://localhost:1337/api/newservice2s?populate=*';
function AboutHomeThree() {
    const [text2, Settext2] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/newservices/1?populate[ser1][populate]=*')
            .then((res) => {
                Settext2(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    function imageurl(data) {
        const baseurl = 'http://localhost:1337';
        const dataurl = data.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    // const [newservice, Setnewservice] = useState([]);
    // useEffect(() => {
    //     const request = axios.CancelToken.source();
    //     setTimeout(() => {
    //         axios
    //             .get(NewApiUrl, { cancelToken: request.token })
    //             .then((res) => {
    //                 Setnewservice(res.data.data);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }, 2000);
    //     return () => request.cancel();
    // });
    // function imageurll(atttribute) {
    //     const baseurl = 'http://localhost:1337';
    //     const dataurl = atttribute.image.data[0].attributes.url;
    //     return baseurl + dataurl;
    // }
    // const [newurl, Setnewurl] = useState([]);
    // useEffect(() => {
    //     const request = axios.CancelToken.source();
    //     setTimeout(() => {
    //         axios
    //             .get(NewUrl, { cancelToken: request.token })
    //             .then((res) => {
    //                 Setnewurl(res.data.data);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }, 2000);
    //     return () => request.cancel();
    // });
    // function imageurlll(atttribute) {
    //     const baseurl = 'http://localhost:1337';
    //     const dataurl = atttribute.image.data[0].attributes.url;
    //     return baseurl + dataurl;
    // }
    return (
        <>
            <section className="appie-about-3-area pt-100 pb-100" id="features">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 wow animated fadeInLeft"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                {text2
                                    ? text2.map((x) => (
                                          <img
                                              src={
                                                  x.attributes ? imageurl(x.attributes) : 'hgghtyu'
                                              }
                                              alt=""
                                          />
                                      ))
                                    : 'hgfhgf'}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h3 className="title">
                                    {text2
                                        ? text2.map((x) => <h3>{x.attributes.heading}</h3>)
                                        : 'hgfhgf'}
                                </h3>
                                {/* <p>
                                    {text2
                                        ? text2.map((x) => <p>{x.attributes.tagline}</p>)
                                        : 'hgfhgf'}
                                </p> */}
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service mb-30">
                                        <div className="icon">
                                            <i className="fas fa-bolt" />
                                        </div>
                                        <h5 className="title">
                                            {text2
                                                ? text2.map((x) => <h5>{x.attributes.tag1}</h5>)
                                                : 'hgfhgf'}
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service item-2 mb-30">
                                        <div className="icon">
                                            <img src={icon1} alt="" />
                                        </div>
                                        <h5 className="title">
                                            {text2
                                                ? text2.map((x) => <h5>{x.attributes.tag2}</h5>)
                                                : 'hgfhgf'}
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service mb-30">
                                        <div className="icon">
                                            <img src={icon5} alt="" />
                                        </div>
                                        <h5 className="title">
                                            {text2
                                                ? text2.map((x) => <h5>{x.attributes.tag3}</h5>)
                                                : 'hgfhgf'}
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="traffic-btn mt-50">
                                        <a className="main-btn" href="#">
                                            Learn More <i className="fal fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-100 flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h3 className="title">
                                    {text2.attributes
                                        ? text2.attributes.ser1.map((x) => (
                                              <h3>{x.attributes.heading}</h3>
                                          ))
                                        : 'hgfhgf'}
                                    {/* {newservice
                                        ? newservice.map((x) => <h3>{x.attributes.heading}</h3>)
                                        : 'hgfhgf'} */}
                                </h3>
                                {/* <p>
                                    {newservice
                                        ? newservice.map((x) => <p>{x.attributes.tagline}</p>)
                                        : 'hgfhgf'}
                                </p> */}
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service mb-30 item-3">
                                        <div className="icon">
                                            <img src={icon6} alt="" />
                                        </div>
                                        <h5 className="title">
                                            {text2
                                                ? text2.map((x) => <h5>{x.attributes.tag1}</h5>)
                                                : 'hgfhgf'}
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service item-2 mb-30 item-4">
                                        <div className="icon">
                                            <i className="fas fa-link" />
                                        </div>
                                        <h5 className="title">
                                            {text2
                                                ? text2.map((x) => <h5>{x.attributes.tag2}</h5>)
                                                : 'hgfhgf'}
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service item-2 mb-30 item-4">
                                        <div className="icon">
                                            <img src={icon7} alt="" />
                                        </div>
                                        <h5 className="title">
                                            {text2
                                                ? text2.map((x) => <h5>{x.attributes.tag3}</h5>)
                                                : 'hgfhgf'}
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service item-2 mb-30 item-4">
                                        <div className="icon">
                                            <i className="fas fa-cog" />
                                        </div>
                                        <h5 className="title">
                                            {text2
                                                ? text2.map((x) => <h5>{x.attributes.tag4}</h5>)
                                                : 'hgfhgf'}
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="traffic-btn mt-50">
                                        <a className="main-btn" href="#">
                                            Learn More <i className="fal fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 text-right wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                {text2
                                    ? text2.map((x) => (
                                          <img
                                              src={
                                                  x.attributes ? imageurl(x.attributes) : 'hgghtyu'
                                              }
                                              alt=""
                                          />
                                      ))
                                    : 'hgfhgf'}
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div
                                    className="appie-about-thumb-3 wow animated fadeInLeft"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="400ms"
                                >
                                    {text2
                                        ? text2.map((x) => (
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
                            </div>
                            <div className="col-lg-6">
                                <div className="appie-traffic-title">
                                    <h3 className="title">
                                        {text2
                                            ? text2.map((x) => <h3>{x.attributes.heading}</h3>)
                                            : 'hgfhgf'}
                                    </h3>
                                    <p>
                                        {text2
                                            ? text2.map((x) => <p>{x.attributes.tagline}</p>)
                                            : 'hgfhgf'}
                                    </p>
                                </div>
                                {/* <div className="row">
                                    <div className="col-sm-6">
                                        <div className="appie-traffic-service mb-30">
                                            <div className="icon">
                                                <i className="fas fa-bolt" />
                                            </div>
                                            <h5 className="title">
                                                {newurl
                                                    ? newurl.map((x) => (
                                                          <h5>{x.attributes.tag1}</h5>
                                                      ))
                                                    : 'hgfhgf'}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="appie-traffic-service item-2 mb-30">
                                            <div className="icon">
                                                <img src={icon1} alt="" />
                                            </div>
                                            <h5 className="title">
                                                {newurl
                                                    ? newurl.map((x) => (
                                                          <h5>{x.attributes.tag2}</h5>
                                                      ))
                                                    : 'hgfhgf'}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="appie-traffic-service mb-30">
                                            <div className="icon">
                                                <img src={icon5} alt="" />
                                            </div>
                                            <h5 className="title">
                                                {newurl
                                                    ? newurl.map((x) => (
                                                          <h5>{x.attributes.tag3}</h5>
                                                      ))
                                                    : 'hgfhgf'}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="traffic-btn mt-50">
                                            <a className="main-btn" href="#">
                                                Learn More <i className="fal fa-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHomeThree;
