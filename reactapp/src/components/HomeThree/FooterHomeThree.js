import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo-4.png';

function FooterHomeThree({ className }) {
    const [logo, Setlogo] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('https://admin.ocodeapps.com/api/logos?populate=*')
            .then((res) => {
                Setlogo(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);

    function imageurl(atttribute) {
        const baseurl = 'https://admin.ocodeapps.com';
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section className={`appie-footer-area appie-footer-3-area ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget footer-about-widget-3">
                                <div className="siz">
                                    {logo
                                        ? logo.map((x) => (
                                              <a href="/">
                                                  <img
                                                      src={
                                                          x.attributes
                                                              ? imageurl(x.attributes)
                                                              : 'hgghtyu'
                                                      }
                                                      alt=""
                                                  />
                                              </a>
                                          ))
                                        : 'hgfhgf'}
                                </div>
                                <p>
                                    {logo
                                        ? logo.map((x) => <span>{x.attributes.des}</span>)
                                        : 'hgfhgf'}
                                </p>
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                                <div className="social mt-30">
                                    <ul>
                                        {/* <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li> */}
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation footer-navigation-3">
                                <h4 className="title">
                                    {logo
                                        ? logo.map((x) => <span>{x.attributes.head1}</span>)
                                        : 'hgfhgf'}
                                </h4>
                                <ul>
                                    <li>
                                        <Link to="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/portfolio">Portfolio</Link>
                                    </li>
                                    <li>
                                        <Link to="/product">Product</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navigation footer-navigation-3">
                                <h4 className="title">
                                    {logo
                                        ? logo.map((x) => <span>{x.attributes.head2}</span>)
                                        : 'hgfhgf'}
                                </h4>
                                <ul>
                                    <li>
                                        <Link to="/about-us">Community</Link>
                                    </li>
                                    {/* <li>
                                        <a href="#">Resources</a>
                                    </li> */}
                                    <li>
                                        <a href="#">Faqs</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Careers</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                                <h4 className="title">
                                    {logo
                                        ? logo.map((x) => <span>{x.attributes.head3}</span>)
                                        : 'hgfhgf'}
                                </h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-envelope" />
                                            {logo
                                                ? logo.map((x) => <span>{x.attributes.email}</span>)
                                                : 'hgfhgf'}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-phone" />
                                            {logo
                                                ? logo.map((x) => (
                                                      <span>{x.attributes.phone1}</span>
                                                  ))
                                                : 'hgfhgf'}
                                            <br></br>
                                            {logo
                                                ? logo.map((x) => (
                                                      <span>{x.attributes.phone2}</span>
                                                  ))
                                                : 'hgfhgf'}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-map-marker-alt" />
                                            {logo
                                                ? logo.map((x) => (
                                                      <span>{x.attributes.location}</span>
                                                  ))
                                                : 'hgfhgf'}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="
                footer-copyright
                d-flex
                align-items-center
                justify-content-between
                pt-35
              "
                            >
                                {/* <div className="apps-download-btn">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-apple" /> Download for iOS
                                            </a>
                                        </li>
                                        <li>
                                            <a className="item-2" href="#">
                                                <i className="fab fa-google-play" /> Download for
                                                Android
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                                <div className="copyright-text">
                                    <p>© 2022 ocodewire. All rights are reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeThree;
