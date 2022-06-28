import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
    const [heading, Setheading] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://ocodeapps.com:1338/api/apps?populate=*')
            .then((res) => {
                Setheading(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    function imageurl7(atttribute) {
        const baseurl = 'http://ocodeapps.com:1338';
        const dataurl = atttribute.image7.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl8(atttribute) {
        const baseurl = 'http://ocodeapps.com:1338';
        const dataurl = atttribute.image8.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl1(atttribute) {
        const baseurl = 'http://ocodeapps.com:1338';
        const dataurl = atttribute.image1.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function imageurl10(atttribute) {
        const baseurl = 'http://ocodeapps.com:1338';
        const dataurl = atttribute.image10.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <div className="product-heading">
                {heading ? heading.map((x) => <a>{x.attributes.head}</a>) : 'hgfhgf'}
            </div>
            <div className="product-tag">
                {heading ? heading.map((x) => <a>{x.attributes.tagg}</a>) : 'hgfhgf'}
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
                        <button type="submit" className="sub_but">
                            <span className="icon-search">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="coloumn">
                <div className="First">
                    <a href="/product/components">
                        <h2 className="heading">COMPONENTS</h2>
                    </a>
                </div>
                <div className="second">
                    <a href="/product/script">
                        <h2 className="heading">SCRIPTS</h2>
                    </a>
                </div>
                <div className="third">
                    <a href="product/theme">
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
                        <a href="/huawei">
                            {heading
                                ? heading.map((x) => (
                                      <img
                                          className="business"
                                          src={x.attributes ? imageurl7(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {heading
                                ? heading.map((x) => <h6 className="padd">{x.attributes.text7}</h6>)
                                : 'hgghtyu'}
                        </a>
                    </li>
                    <li>
                        <a href="/mehan">
                            {heading
                                ? heading.map((x) => (
                                      <img
                                          className="business"
                                          src={x.attributes ? imageurl8(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {heading
                                ? heading.map((x) => <h6 className="padd">{x.attributes.text8}</h6>)
                                : 'hgghtyu'}
                        </a>
                    </li>
                    <li>
                        <a href="/service-request">
                            {heading
                                ? heading.map((x) => (
                                      <img
                                          className="business"
                                          src={x.attributes ? imageurl1(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {heading
                                ? heading.map((x) => <h6 className="padd">{x.attributes.text1}</h6>)
                                : 'hgghtyu'}
                        </a>
                    </li>
                    <li>
                        <a href="/theme-product">
                            {heading
                                ? heading.map((x) => (
                                      <img
                                          className="business"
                                          src={x.attributes ? imageurl10(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {heading
                                ? heading.map((x) => (
                                      <h6 className="padd">{x.attributes.text10}</h6>
                                  ))
                                : 'hgghtyu'}
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Product;
