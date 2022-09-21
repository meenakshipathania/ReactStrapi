import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import heroThumb from '../../assets/images/hero-thumb-4.png';
import PopupVideo from '../PopupVideo';

function HeroHomeThree() {
    const [showVideo, setVideoValue] = useState(false);
    const [head, Sethead] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://ocodeapps.com:1338//api/descriptions?populate=*')
            .then((res) => {
                Sethead(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    function imageurl(atttribute) {
        const baseurl = 'http://ocodeapps.com:1338/';
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    const [text2, Settext2] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://ocodeapps.com:1338//api/services/1?populate[nested][populate]=*')
            .then((res) => {
                Settext2(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
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
            <section className="appie-hero-area appie-hero-3-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="appie-hero-content text-center">
                                <h1 className="appie-title">
                                {text2['attributes'] ? text2['attributes']['nested'].map((x) => <span>{x.head}</span>) : 'Home'}
                                </h1>
                                <p>
                                    {head
                                        ? head.map((x) => <span>{x.attributes.threesecfirst}</span>)
                                        : 'hgfhgf'}
                                </p>
                                <p>
                                    {head
                                        ? head.map((x) => <span>{x.attributes.threesecsec}</span>)
                                        : 'hgfhgf'}
                                </p>
                                <p>
                                    {head
                                        ? head.map((x) => <span>{x.attributes.threesecthree}</span>)
                                        : 'hgfhgf'}
                                </p>
                                <div className="hero-btns">
                                    <a className="main-btn" href="/contact">
                                        Get a Quote
                                    </a>
                                    <a
                                        onClick={(e) => handleShowVideo(e)}
                                        className="appie-video-popup"
                                        href="http://www.youtube.com/watch?v=EE7NqzhMDms"
                                    >
                                        <i className="fas fa-play" /> Play Video
                                    </a>
                                </div>
                                <div
                                    className="thumb mt-100 wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="400ms"
                                >
                                    {head
                                        ? head.map((x) => (
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroHomeThree;
