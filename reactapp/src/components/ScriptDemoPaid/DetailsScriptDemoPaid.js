import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsIncity() {
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
        const dataurl = atttribute.image10.data[0].attributes.url;
        return baseurl + dataurl;
    }


    const [img, Setimg] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://165.227.11.15:1338/api/free-demos?populate=*')
            .then((res) => {
                Setimg(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);

    function imageurl1(atttribute) {
        const baseurl = 'http://165.227.11.15:1338';
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
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-9 col-xs-9 extra-left">
                            <div className="extra-img">
                                {data
                                    ? data.map((x) => (
                                        <img className='bora'
                                            src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'}
                                            alt=""
                                        />
                                    ))
                                    : 'hgfhgf'}
                            </div>
                            <div className="extra-txt">
                                {data
                                    ? data.map((x) => <h3>{x.attributes.demopaid}</h3>)
                                    : 'hgghtyu'}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3 extra-right">
                            <div className="extra-txt-ryt">
                                <h2>Free!</h2>
                                <p>No ratings yet!</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='row mt-30'> */}
                        <section className="appie-showcase-area bg-white">
                            <SimpleReactLightbox>
                                <SRLWrapper>
                                    <div className="container">
                                        <div className="row appie-showcase-slider">
                                            <div className="col-lg-12">
                                                <Slider ref={sliderRef} {...settings}>
                                                    {img
                                                        ? img.slice(4, 9).map((x) => (
                                                            <div>
                                                                <div className="appie-showcase-item mt-30">
                                                                    <a className="appie-image-popup">
                                                                            <img
                                                                                src={x.attributes ? imageurl1(x.attributes) : 'hgghtyu'}
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
                                </SRLWrapper>
                            </SimpleReactLightbox>
                        </section>

                    {/* </div> */}

                    <div className='row mt-100 ml-2 mr-2 ancho'>
                        <a href="#">Description &nbsp; &nbsp; Reviews (0)</a>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className='review'>
                                <h2>DESCRIPTION</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem of type and scrambled it to make a type specimen book.</p>

                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='product-details'>
                                <div class="btns">
                                    <a href="#" target="_self" class="btn btn-success">
                                        Purchase Now
                                    </a>
                                </div>
                                <h6>PRODUCT DETAILS</h6>
                                <dl>
                                    <dt className='wid'>Version:</dt><dd>1</dd>
                                    <dt className='wid'>Size:</dt><dd>1mb</dd>
                                    <dt className='wid'>Ionic:</dt><dd>1</dd>
                                    <dt className='wid'>Platforms:</dt><dd>all</dd>
                                    <dt className='wid'>Released:</dt><dd>October 24, 2017</dd>
                                    <dt className='wid'>Updated:</dt><dd>October 24, 2017</dd>
                                    <dt className='wid'>Category:</dt><dd><span class="posted_in"> <a href="#" rel="tag">Components</a>.</span></dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsIncity;
