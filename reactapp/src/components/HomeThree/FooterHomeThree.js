import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo-4.png';

const apiUrl = 'http://localhost:1337/api/logos?populate=*';
const ApiUrl = 'http://localhost:1337/api/footers';
const NewUrl = 'http://localhost:1337/api/infos';
function FooterHomeThree({ className }) {
    const [logo, Setlogo] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(apiUrl, { cancelToken: request.token })
                .then((res) => {
                    Setlogo(res.data.data);
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
    const [header, Setheader] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(ApiUrl, { cancelToken: request.token })
                .then((res) => {
                    Setheader(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });
    const [footer, Setfooter] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(NewUrl, { cancelToken: request.token })
                .then((res) => {
                    Setfooter(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });
    return (
        <>
            <section className={`appie-footer-area appie-footer-3-area ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget footer-about-widget-3">
                                <div className="logo">
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
                                    {logo ? logo.map((x) => <p>{x.attributes.des}</p>) : 'hgfhgf'}
                                </p>
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation footer-navigation-3">
                                <h4 className="title">
                                    {header
                                        ? header.map((x) => <h4>{x.attributes.head1}</h4>)
                                        : 'hgfhgf'}
                                </h4>
                                <ul>
                                    <li>
                                        <Link to="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/Service">Portfolio</Link>
                                    </li>
                                    <li>
                                        <Link to="/news">Product</Link>
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
                                    {header
                                        ? header.map((x) => <h4>{x.attributes.head2}</h4>)
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
                                    {header
                                        ? header.map((x) => <h4>{x.attributes.head3}</h4>)
                                        : 'hgfhgf'}
                                </h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-envelope" />
                                            {footer
                                                ? footer.map((x) => <a>{x.attributes.email}</a>)
                                                : 'hgfhgf'}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-phone" />
                                            {footer
                                                ? footer.map((x) => <a>{x.attributes.phone1}</a>)
                                                : 'hgfhgf'}
                                            <br></br>
                                            {footer
                                                ? footer.map((x) => <a>{x.attributes.phone2}</a>)
                                                : 'hgfhgf'}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-map-marker-alt" />
                                            {footer
                                                ? footer.map((x) => <a>{x.attributes.location}</a>)
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
                                <div className="apps-download-btn">
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
                                </div>
                                <div className="copyright-text">
                                    <p>© 2018 ocodewire. All right reserved.</p>
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
