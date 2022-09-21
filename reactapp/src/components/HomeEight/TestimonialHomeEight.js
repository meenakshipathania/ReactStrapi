import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import user from '../../assets/images/testimonial-user-1.png';

function TestimonialHomeEight() {
    const [img, Setimg] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://ocodeapps.com:1338//api/testimonials?populate=*')
            .then((res) => {
                Setimg(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    function imageurl(data) {
        const baseurl = 'http://ocodeapps.com:1338/';
        const dataurl = data.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    const articleCarosel = useRef();
    const peopleCarosel = useRef();
    const sliderNext = () => {
        articleCarosel.current.slickNext();
        peopleCarosel.current.slickNext();
    };
    const sliderPrev = () => {
        articleCarosel.current.slickPrev();
        peopleCarosel.current.slickPrev();
    };
    const settingsForArticle = {
        autoplay: false,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const settingsForPeople = {
        centerMode: true,
        centerPadding: '0px',
        autoplay: false,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="appie-testimonial-about-area pb-45">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">What clients say about us</h3>
                                <p>The app provides design and digital marketing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div
                                className="testimonial-about-slider-active"
                                style={{ position: 'relative' }}
                            >
                                <span
                                    onClick={sliderPrev}
                                    className="prev slick-arrow"
                                    style={{ display: 'block' }}
                                >
                                    <i className="fal fa-arrow-left"></i>
                                </span>
                                <Slider {...settingsForArticle} ref={articleCarosel}>
                                    {img
                                        ? img.map((x) => (
                                              <div className="testimonial-parent-item">
                                                  <div className="testimonial-box">
                                                      <div className="icon">
                                                          <i className="fas fa-quote-left"></i>
                                                      </div>
                                                      <div className="ratings-icon">
                                                          <ul>
                                                              <li>
                                                                  <i className="fas fa-star"></i>
                                                              </li>
                                                              <li>
                                                                  <i className="fas fa-star"></i>
                                                              </li>
                                                              <li>
                                                                  <i className="fas fa-star"></i>
                                                              </li>
                                                              <li>
                                                                  <i className="fas fa-star"></i>
                                                              </li>
                                                              <li>
                                                                  <i className="fas fa-star"></i>
                                                              </li>
                                                          </ul>
                                                      </div>
                                                      <p>{x.attributes.text}</p>
                                                  </div>
                                              </div>
                                          ))
                                        : 'hgfhgf'}
                                </Slider>
                                <span
                                    onClick={sliderNext}
                                    className="next slick-arrow"
                                    style={{ display: 'block' }}
                                >
                                    <i className="fal fa-arrow-right"></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <div className="testimonial-box-about-slider-small-active">
                                <Slider {...settingsForPeople} ref={peopleCarosel}>
                                    {img
                                        ? img.map((x) => (
                                              <div className="item">
                                                  <div className="thumb">
                                                      <img
                                                          src={
                                                              x.attributes
                                                                  ? imageurl(x.attributes)
                                                                  : 'hgghtyu'
                                                          }
                                                          alt=""
                                                      />
                                                  </div>
                                                  <div className="content text-center">
                                                      <h5 className="title">{x.attributes.name}</h5>
                                                      <span>{x.attributes.position}</span>
                                                  </div>
                                              </div>
                                          ))
                                        : 'hgfhgf'}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialHomeEight;
