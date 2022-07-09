import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import workThumb from '../../assets/images/how-it-work-thumb.png';

function WorkPartHomeEight() {
    const [text2, Settext2] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://dev.ocodeapps.com:1338/api/descriptions?populate=*')
            .then((res) => {
                Settext2(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    function imageurl(atttribute) {
        const baseurl = 'http://dev.ocodeapps.com:1338';
        const dataurl = atttribute.image11.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <div className="appie-how-it-work-area pt-10 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="how-it-work-thumb text-center">
                                {text2
                                    ? text2.map((x) => (
                                          <img
                                              src={
                                                  x.attributes ? imageurl(x.attributes) : 'hgghtyu'
                                              }
                                              alt=""
                                          />
                                      ))
                                    : 'hgfhgf'}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-how-it-work-content">
                                <h2 className="title">
                                    {text2
                                        ? text2.map((x) => <h3>{x.attributes.heading1}</h3>)
                                        : 'hgfhgf'}
                                </h2>
                                {/* <p>
                                    The little rotter harry butty lurgy spend a peny spiffing skive
                                    off golly gosh baking cakes.
                                </p> */}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>1</span>
                                            <h5 className="title">
                                                {text2
                                                    ? text2.map((x) => (
                                                          <h5>{x.attributes.text11}</h5>
                                                      ))
                                                    : 'hgfhgf'}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>2</span>
                                            <h5 className="title">
                                                {text2
                                                    ? text2.map((x) => (
                                                          <h5>{x.attributes.text12}</h5>
                                                      ))
                                                    : 'hgfhgf'}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>3</span>
                                            <h5 className="title">
                                                {text2
                                                    ? text2.map((x) => (
                                                          <h5>{x.attributes.text13}</h5>
                                                      ))
                                                    : 'hgfhgf'}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>4</span>
                                            <h5 className="title">
                                                {text2
                                                    ? text2.map((x) => (
                                                          <h5>{x.attributes.text14}</h5>
                                                      ))
                                                    : 'hgfhgf'}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="appie-how-it-work-area pt-10 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="how-it-work-thumb text-center">
                                <img src={workThumb} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-how-it-work-content">
                                <h2 className="title">How It works</h2>
                                <p>
                                    The little rotter harry butty lurgy spend a peny spiffing skive
                                    off golly gosh baking cakes.
                                </p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>1</span>
                                            <h5 className="title">
                                                Download <br />
                                                the app
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>2</span>
                                            <h5 className="title">
                                                Create a <br />
                                                free account
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>3</span>
                                            <h5 className="title">
                                                Sync across <br />
                                                All devices
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>4</span>
                                            <h5 className="title">
                                                Monthly & <br />
                                                weekly reports
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default WorkPartHomeEight;
