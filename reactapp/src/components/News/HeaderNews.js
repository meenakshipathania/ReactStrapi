import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import logo from '../../assets/images/logo-7.png';
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation';

const apiUrl = 'http://localhost:1337/api/logos?populate=*';
function HeaderNews({ action }) {
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
    useEffect(() => {
        StickyMenu();
    });
    return (
        <>
            <header className="appie-header-area appie-header-page-area appie-sticky">
                <div className="container">
                    <div className="header-nav-box header-nav-box-3 header-nav-box-inner-page">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                                <div className="appie-logo-box">
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
                            </div>
                            <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                                <div className="appie-header-main-menu">
                                    <Navigation />
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                                <div className="appie-btn-box text-right">
                                    {/* <a className="login-btn" href="#">
                                        <i className="fal fa-user"></i>
                                        {logo
                                            ? logo.map((x) => <a>{x.attributes.login}</a>)
                                            : 'hgfhgf'}
                                    </a> */}
                                    <a className="main-btn ml-30" href="#">
                                        {logo
                                            ? logo.map((x) => <a>{x.attributes.getstart}</a>)
                                            : 'hgfhgf'}
                                    </a>
                                    <div
                                        onClick={(e) => action(e)}
                                        className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                                    >
                                        <i className="fa fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderNews;
