import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:1337/api/products';
const NewApi = 'http://localhost:1337/api/productimages?populate=*';
function Product() {
    const [heading, Setheading] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(apiUrl, { cancelToken: request.token })
                .then((res) => {
                    Setheading(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });

    const [business, Setbusiness] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(NewApi, { cancelToken: request.token })
                .then((res) => {
                    Setbusiness(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });
    function imageurl1(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image1.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl2(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image2.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl3(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image3.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl4(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image4.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <div className="product-heading">
                {heading ? heading.map((x) => <a>{x.attributes.heading}</a>) : 'hgfhgf'}
            </div>
            <div className="product-tag">
                {heading ? heading.map((x) => <a>{x.attributes.tagline}</a>) : 'hgfhgf'}
            </div>
            <div className="product-form">
                <form
                    role="search"
                    method="get"
                    className="productFormSearch"
                    action="https://www.ocodeapps.com/"
                >
                    <div>
                        <input
                            type="search"
                            placeholder="Search for themes, plugins, and scripts..."
                            title="Searvh for:"
                        />
                        <button type="submit">
                            <span className="icon-search">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="coloumn">
                <div className="First">
                    <a href="#">
                        <h2 className="heading">COMPONENTS</h2>
                    </a>
                </div>
                <div className="second">
                    <a href="#">
                        <h2 className="heading">SCRIPTS</h2>
                    </a>
                </div>
                <div className="third">
                    <a href="#">
                        <h2 className="heading">THEMES</h2>
                    </a>
                </div>
            </div>
            <div className="iconheading">
                <h3 className="title">
                    <i className="fa fa-tachometer" aria-hidden="true">
                        &nbsp;
                    </i>
                    Themes
                </h3>
                <hr></hr>
                <ul className="businesslist listt">
                    <li>
                        <a href="#">
                            {business
                                ? business.map((x) => (
                                      <img
                                          className="business"
                                          src={x.attributes ? imageurl1(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {business
                                ? business.map((x) => <h6>{x.attributes.text1}</h6>)
                                : 'hgghtyu'}
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            {business
                                ? business.map((x) => (
                                      <img
                                          className="business"
                                          src={x.attributes ? imageurl2(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {business
                                ? business.map((x) => <h6>{x.attributes.text2}</h6>)
                                : 'hgghtyu'}
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            {business
                                ? business.map((x) => (
                                      <img
                                          className="business"
                                          src={x.attributes ? imageurl3(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {business
                                ? business.map((x) => <h6>{x.attributes.text3}</h6>)
                                : 'hgghtyu'}
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            {business
                                ? business.map((x) => (
                                      <img
                                          className="business"
                                          src={x.attributes ? imageurl4(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {business
                                ? business.map((x) => <h6>{x.attributes.text4}</h6>)
                                : 'hgghtyu'}
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Product;
