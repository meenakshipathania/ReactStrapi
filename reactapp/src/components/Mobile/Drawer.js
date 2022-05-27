import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';

function Drawer({ drawer, action }) {
    const [logo, Setlogo] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://165.227.11.15:1338/api/logos?populate=*')
            .then((res) => {
                Setlogo(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    function imageurl(atttribute) {
        const baseurl = 'http://165.227.11.15:1338';
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    const [itemSize, setSize] = useState('0px');
    const [item, setItem] = useState('home');
    const handler = (e, value) => {
        e.preventDefault();
        const getItems = document.querySelectorAll(`#${value} li`).length;
        if (getItems > 0) {
            setSize(`${43 * getItems}px`);
            setItem(value);
        }
    };
    return (
        <>
            <div
                onClick={(e) => action(e)}
                className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
            ></div>
            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''}`}>
                                <div className="canvas_close">
                                    <a href="#" onClick={(e) => action(e)}>
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                                <div className="offcanvas-brand text-center mb-40 siz">
                                    {logo
                                        ? logo.map((x) => (
                                              <a href="/">
                                                  <img className='loimg'
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
                                <div id="menu" className="text-left ">
                                    <ul className="offcanvas_main_menu">
                                        <li
                                            onClick={(e) => handler(e, 'home')}
                                            id="home"
                                            className="menu-item-has-children active"
                                        >
                                            {/* <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i> 
                                            </span> */}
                                             <Link to="/">Home</Link>
                                            {/* <a href="/">Home</a> */}
                                            {/* <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === 'home' ? itemSize : '0px',
                                                }}
                                            >
                                                <li>
                                                    <Link to="/">Home 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-two">Home 2</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-three">Home 3</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-four">Home 4</Link>
                                                </li>
                                                <li>
                                                    <Link to.head{
  position: fixed;
  right: 30px;
}="/home-five">Home 5</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-six">Home 6</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-seven">Home 7</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-eight">Home 8</Link>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'service')}
                                            id="service"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/services">Services</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'portfolio')}
                                            id="service"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/portfolio">Portfolio</Link>
                                        </li>
                                        {/* <li
                                            onClick={(e) => handler(e, 'pages')}
                                            id="pages"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/product">Products</Link>
                                        </li> */}
                                        <li
                                            onClick={(e) => handler(e, 'about-us')}
                                            id="news"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/about-us">About Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'contact')}
                                            id="contact"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="offcanvas-social">
                                    <ul className="text-center">
                                        {/* <li>
                                            <a href="$">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li> */}
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a href="$">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="footer-widget-info">
                                    <ul>
                                        <li key={'envelop'}>
                                            <a href="#">
                                                <i className="fal fa-envelope"></i>{' '}
                                                {logo
                                                ? logo.map((x) => <span>{x.attributes.email}</span>)
                                                : 'hgfhgf'}
                                            </a>
                                        </li>
                                        <li key={'phone'}>
                                            <a href="#">
                                                <i className="fal fa-phone"></i>
                                                {logo
                                                ? logo.map((x) => <span>{x.attributes.phone1}</span>)
                                                : 'hgfhgf'}
                                                <br></br>
                                            {logo
                                                ? logo.map((x) => <span>{x.attributes.phone2}</span>)
                                                : 'hgfhgf'}
                                            </a>
                                        </li>
                                        <li key={'marker'}>
                                            <a href="#">
                                                <i className="fal fa-map-marker-alt"></i>
                                                {logo
                                                ? logo.map((x) => <span>{x.attributes.location}</span>)
                                                : 'hgfhgf'}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Drawer;
