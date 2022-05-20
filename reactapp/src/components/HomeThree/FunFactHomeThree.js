import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FunFactThumb from '../../assets/images/fun-fact-thumb.png';
import CounterUpCom from '../../lib/CounterUpCom';
import PopupVideo from '../PopupVideo';

// const apiUrl = 'http://165.227.11.15:1338/api/funsections';
function FunFactHomeThree() {
    const [showVideo, setVideoValue] = useState(false);
    const handleShowVideo = (e) => {
        e.preventDefault();
        setVideoValue(!showVideo);
    };
    // const [gettext, Settext] = useState([]);
    // useEffect(() => {
    //     const request = axios.CancelToken.source();
    //     setTimeout(() => {
    //         axios
    //             .get(apiUrl, { cancelToken: request.token })
    //             .then((res) => {
    //                 Settext(res.data.data);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }, 2000);
    //     return () => request.cancel();
    // });
    return (
        <>
            {showVideo && (
                <PopupVideo
                    videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
                    handler={(e) => handleShowVideo(e)}
                />
            )}
            <section className="appie-fun-fact-area" id="fun-fact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-fun-fact-box wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="appie-fun-fact-content">
                                            <h2 className="title">Get Started with Mobile Apps Devlopment</h2>
                                            {/* <p>
                                                {gettext
                                                    ? gettext.map((x) => (
                                                          <p>{x.attributes.tagline}</p>
                                                      ))
                                                    : 'hgfhgf'}
                                            </p> */}
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="appie-fun-fact-item">
                                                        <h4 className="title">
                                                            <CounterUpCom
                                                                endValue="700"
                                                                sectionSelect="fun-fact-area"
                                                            />
                                                            k
                                                        </h4>
                                                        <span>
                                                            {/* {gettext
                                                                ? gettext.map((x) => (
                                                                      <p>{x.attributes.tag1}</p>
                                                                  ))
                                                                : 'hgfhgf'} */}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="appie-fun-fact-item">
                                                        <h4 className="title">
                                                            <CounterUpCom
                                                                endValue="476"
                                                                sectionSelect="fun-fact-area"
                                                            />
                                                            +
                                                        </h4>
                                                        <span>
                                                            {/* {gettext
                                                                ? gettext.map((x) => (
                                                                      <p>{x.attributes.tag2}</p>
                                                                  ))
                                                                : 'hgfhgf'} */}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="appie-fun-fact-item">
                                                        <h4 className="title">
                                                            <CounterUpCom
                                                                endValue="30"
                                                                sectionSelect="fun-fact-area"
                                                            />
                                                            M
                                                        </h4>
                                                        <span>
                                                            {/* {gettext
                                                                ? gettext.map((x) => (
                                                                      <p>{x.attributes.tag3}</p>
                                                                  ))
                                                                : 'hgfhgf'} */}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="appie-fun-fact-play">
                                            <a
                                                onClick={(e) => handleShowVideo(e)}
                                                className="appie-video-popup"
                                                href="https://www.youtube.com/watch?v=EE7NqzhMDms"
                                            >
                                                <i className="fas fa-play" />
                                            </a>
                                            <img src={FunFactThumb} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FunFactHomeThree;
