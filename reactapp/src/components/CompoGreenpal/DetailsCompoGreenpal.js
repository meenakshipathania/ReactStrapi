import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsIncity() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('https://ocodeapps.com:1338/api/apps?populate=*')
            .then((res) => {
                Setdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);

    function imageurl(atttribute) {
        const baseurl = 'https://ocodeapps.com:1338';
        const dataurl = atttribute.image3.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-9 col-xs-9 extra-left">
                            <div className="extra-img">
                                {data
                                    ? data.map((x) => (
                                          <img
                                              src={
                                                  x.attributes ? imageurl(x.attributes) : 'hgghtyu'
                                              }
                                              alt=""
                                          />
                                      ))
                                    : 'hgfhgf'}
                            </div>
                            <div className="extra-txt">
                                {data ? data.map((x) => <h3>{x.attributes.text3}</h3>) : 'hgghtyu'}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3 extra-right">
                            <div className="extra-txt-ryt">
                                <h2>$200.00</h2>
                                <p>No ratings yet!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-100 ml-2 mr-2 ancho">
                        <a href="#">Description &nbsp; &nbsp; Reviews (0)</a>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="review">
                                <h2>DESCRIPTION</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem of type and scrambled it to make a type specimen
                                    book.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="product-details">
                                <div className="btns">
                                    <a href="#" target="_self" className="btn btn-success">
                                        Purchase Now
                                    </a>
                                </div>
                                <h6>PRODUCT DETAILS</h6>
                                <dl>
                                    <dt>Version:</dt> <dd></dd>
                                    <dt>Size:</dt> <dd></dd>
                                    <dt>Ionic:</dt> <dd></dd>
                                    <dt>Platforms:</dt> <dd></dd>
                                    <dt>Released:</dt> <dd></dd>
                                    <dt>Updated:</dt> <dd></dd>
                                    <dt>Category:</dt>
                                    <dd>
                                        <span className="posted_in">
                                            <a href="#" rel="tag">
                                                Components
                                            </a>
                                            .
                                        </span>
                                    </dd>
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
