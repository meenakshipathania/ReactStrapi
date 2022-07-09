import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CounterUpCom from '../../lib/CounterUpCom';
import PopupVideo from '../PopupVideo';

function FaqHomeEight() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://dev.ocodeapps.com:1338/api/logos')
            .then((res) => {
                Setdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    const [showQuestion, setQuestion] = useState(0);
    const [showVideo, setVideoValue] = useState(false);
    const openQuestion = (e, value) => {
        e.preventDefault();
        setQuestion(value);
    };
    const handleShowVideo = (e) => {
        e.preventDefault();
        setVideoValue(!showVideo);
    };
    return (
        <>
            {showVideo && (
                <PopupVideo
                    videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
                    handler={(e) => handleShowVideo(e)}
                />
            )}
            <div className="appie-faq-8-area pt-100 pb-100" id="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="appie-section-title">
                                <h1 className="appie-title">
                                    {data
                                        ? data.map((x) => (
                                              <span className="title"> {x.attributes.heading}</span>
                                          ))
                                        : 'hgfhgf'}
                                </h1>
                                {/* <p>
                                    He nicked it tickety boo harry the cras bargy chap mush spiffing
                                    spend a penny the full monty burke butty.
                                </p> */}
                            </div>
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp wow fadeIn faq-accrodion"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        className={`accrodion ${
                                            showQuestion === 0 ? 'active' : ''
                                        }`}
                                        onClick={(e) => openQuestion(e, 0)}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>
                                                    {data
                                                        ? data.map((x) => (
                                                              <span> {x.attributes.q1}</span>
                                                          ))
                                                        : 'hgfhgf'}
                                                </h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQuestion === 0 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        {data
                                                            ? data.map((x) => (
                                                                  <span> {x.attributes.a1}</span>
                                                              ))
                                                            : 'hgfhgf'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`accrodion ${
                                            showQuestion === 1 ? 'active' : ''
                                        }`}
                                        onClick={(e) => openQuestion(e, 1)}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>
                                                    {data
                                                        ? data.map((x) => (
                                                              <span> {x.attributes.q2}</span>
                                                          ))
                                                        : 'hgfhgf'}
                                                </h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQuestion === 1 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        {data
                                                            ? data.map((x) => (
                                                                  <span> {x.attributes.a2}</span>
                                                              ))
                                                            : 'hgfhgf'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`accrodion ${
                                            showQuestion === 2 ? 'active' : ''
                                        }`}
                                        onClick={(e) => openQuestion(e, 2)}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>
                                                    {data
                                                        ? data.map((x) => (
                                                              <span> {x.attributes.q3}</span>
                                                          ))
                                                        : 'hgfhgf'}
                                                </h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQuestion === 2 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        {data
                                                            ? data.map((x) => (
                                                                  <span> {x.attributes.a3}</span>
                                                              ))
                                                            : 'hgfhgf'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq-play-box">
                    {/* <div className="play-btn">
                        <a
                            onClick={(e) => handleShowVideo(e)}
                            className="appie-video-popup"
                            href="http://www.youtube.com/watch?v=EE7NqzhMDms"
                        >
                            <i className="fas fa-play" />
                        </a>
                    </div> */}
                    <div className="faq-play-counter">
                        <div className="box-1">
                            <h4 className="title">
                                <CounterUpCom endValue="700" sectionSelect="counter" />
                                <span>k</span>
                            </h4>
                            <span>App Downloads</span>
                        </div>
                        <div className="box-1 box-2">
                            <h4 className="title">
                                <CounterUpCom endValue="545" sectionSelect="counter" />
                                <span>k</span>
                            </h4>
                            <span>App Downloads</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FaqHomeEight;
