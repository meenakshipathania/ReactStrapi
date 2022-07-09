import React, { useState, useEffect } from 'react';
import axios from 'axios';
import signupThumb from '../../assets/images/signup-thumb.png';

function SponserHomeEight({ className }) {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://dev.ocodeapps.com:1338/api/abouts')
            .then((res) => {
                Setdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    return (
        <>
            <div className={`appie-signup-area ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        {data
                            ? data.map((x) => (
                                  <div className="col-lg-12">
                                      <div className="appie-signup-box">
                                          <span>{x.attributes.sign1}</span>
                                          <h3 className="title">{x.attributes.sign2}</h3>
                                          <form action="#">
                                              <div className="input-box">
                                                  <input
                                                      type="text"
                                                      placeholder="Enter your name"
                                                  />
                                              </div>
                                              <div className="input-box">
                                                  <input
                                                      type="email"
                                                      placeholder="Enter your email"
                                                  />
                                              </div>
                                              <div className="input-box">
                                                  <button type="submit">
                                                      {x.attributes.sign3}
                                                  </button>
                                              </div>
                                              <div className="appie_checkbox_common checkbox_style2">
                                                  <div>
                                                      <input
                                                          type="checkbox"
                                                          name="checkbox2"
                                                          id="checkbox4"
                                                      />
                                                      <label htmlFor="checkbox4">
                                                          <span></span>
                                                          {x.attributes.sign4}
                                                          <a href="#">{x.attributes.sign5}</a>
                                                      </label>
                                                  </div>
                                              </div>
                                          </form>
                                          <div className="thumb">
                                              <img src={signupThumb} alt="" />
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : 'hgfhgf'}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SponserHomeEight;
