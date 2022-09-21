import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsIncity() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://ocodeapps.com:1338/api/nested-pages?populate=*')
            .then((res) => {
                Setdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);

    function imageurl(atttribute) {
        const baseurl = 'http://ocodeapps.com:1338';
        const dataurl = atttribute.image8.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* <div className="service-details-sidebar">
                                <div className="service-category-widget"> */}
                            {data
                                ? data.map((x) => (
                                      <img
                                          src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'}
                                          alt=""
                                      />
                                  ))
                                : 'hgfhgf'}
                            {/* </div>
                            </div> */}
                        </div>

                        <div className="col-lg-6 mt-50">
                            {/* <div className="service-details-sidebar">
                                <div className="service-category-widget"> */}
                            <div className="desc">
                                <h4>
                                    <i className="fa fa-laptop" aria-hidden="true"></i> PLATEFORM:
                                </h4>
                                <p>IOS, Android</p>
                            </div>
                            <div className="desc">
                                <h4>
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    STACK:
                                </h4>
                                <p>
                                    AngularJs, Ionic Framework, HTML5, Javascript, Cordova and
                                    MongoDB on AmazonAWS
                                </p>
                            </div>
                            <div className="desc">
                                <h4>
                                    <i className="fa fa-clock-o" aria-hidden="true"></i> TIMELINE:
                                </h4>
                                <p>30 days to build</p>
                            </div>
                            <div className="desc">
                                <h4>
                                    <i className="fa fa-users" aria-hidden="true"></i> TEAM-MEMBER:
                                </h4>
                                <p>Raman Bhasker, Akash Saxena</p>
                            </div>
                            <div className="desc">
                                <h4>
                                    <i className="fa fa-table" aria-hidden="true"></i> DESCRIPTION:
                                </h4>
                                <p>
                                    A Job Portal app for blue collar job recruiters and candidates
                                    in Dubai and UAE.
                                </p>
                                <p>
                                    Mehan Social Recruitment App makes recruitment for small and
                                    medium enterprises viral by offering a “bounty” for candidates
                                    who know people eligible for the job posted. The bounty is money
                                    offered by the business owner to candidates who refer candidates
                                    that have been hired.
                                </p>
                                <p>
                                    <strong>Salient Features:</strong>
                                </p>
                                <p>
                                    Referral System, In App Payments, Push Notifications, Employer /
                                    Job Seeker network, Job Resume Video Recorder
                                </p>
                            </div>
                        </div>
                        {/* </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsIncity;
