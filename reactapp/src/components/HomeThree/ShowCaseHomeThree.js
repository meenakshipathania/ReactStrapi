import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import shape12 from '../../assets/images/shape/shape-12.png';
// import shape13 from '../../assets/images/shape/shape-13.png';
// import shape14 from '../../assets/images/shape/shape-14.png';
// import shape15 from '../../assets/images/shape/shape-15.png';
// import showCaseOne from '../../assets/images/showcase-1.png';
// import showCaseTwo from '../../assets/images/showcase-2.png';
// import showCaseThree from '../../assets/images/showcase-3.png';
// import showCaseFour from '../../assets/images/showcase-4.png';
// import showCaseFive from '../../assets/images/showcase-5.png';

const apiUrl = 'http://localhost:1337/api/sliders?populate=*';
function ShowCaseHomeThree() {
    const [img, Setimg] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(apiUrl, { cancelToken: request.token })
                .then((res) => {
                    Setimg(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });

    function imageurl(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    const sliderRef = useRef();
    // const sliderNext = () => {
    //     sliderRef.current.slickNext();
    // };
    // const sliderPrev = () => {
    //     sliderRef.current.slickPrev();
    // };
    const settings = {
        autoplay: false,
        arrows: false,
        dots: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className="appie-showcase-area">
                <SimpleReactLightbox>
                    <SRLWrapper>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="appie-section-title text-center">
                                        <h3 className="appie-title">Creative Food Showcase</h3>
                                        <p>The Appie provides good taste and texture of food.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row appie-showcase-slider">
                                <div className="col-lg-12">
                                    <Slider ref={sliderRef} {...settings}>
                                        {img
                                            ? img.map((x) => (
                                                  <div>
                                                      <div className="appie-showcase-item mt-30">
                                                          <a className="appie-image-popup">
                                                              <img
                                                                  src={
                                                                      x.attributes
                                                                          ? imageurl(x.attributes)
                                                                          : 'hgghtyu'
                                                                  }
                                                                  alt=""
                                                              />
                                                          </a>
                                                      </div>
                                                  </div>
                                              ))
                                            : 'hgfhgf'}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        {/* <div className="showcase-shape-1">
                            <img src={shape14} alt="" />
                        </div>
                        <div className="showcase-shape-2">
                            <img src={shape13} alt="" />
                        </div>
                        <div className="showcase-shape-3">
                            <img src={shape12} alt="" />
                        </div>
                        <div className="showcase-shape-4">
                            <img src={shape15} alt="" />
                        </div> */}
                    </SRLWrapper>
                </SimpleReactLightbox>
            </section>
        </>
    );
}

export default ShowCaseHomeThree;
