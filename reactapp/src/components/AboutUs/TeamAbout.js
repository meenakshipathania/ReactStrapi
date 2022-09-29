import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TeamAbout() {
    const [team, SetTeam] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('https://admin.ocodeapps.com/api/teams?populate=*')
            .then((res) => {
                SetTeam(res.data.data);
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
            <section className="appie-team-area appie-team-about-area team pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Meet our Special Team Members</h3>
                                {/* <p>Different layouts and styles for team sections.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {team
                            ? team.slice(0, 8).map((x) => (
                                  <div className="col-lg-3 col-md-6">
                                      <div
                                          className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                                          data-wow-duration="2000ms"
                                          data-wow-delay="400ms"
                                      >
                                          <div className="thumb">
                                              <img
                                                  src={
                                                      x.attributes
                                                          ? imageurl(x.attributes)
                                                          : 'hgghtyu'
                                                  }
                                                  alt=""
                                              />
                                              <ul>
                                                  <li>
                                                      <a href="#">
                                                          <i className="fab fa-facebook-f"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#">
                                                          <i className="fab fa-twitter"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#">
                                                          <i className="fab fa-pinterest-p"></i>
                                                      </a>
                                                  </li>
                                              </ul>
                                              <div className="content text-left">
                                                  <h5 className="title">{x.attributes.name}</h5>
                                                  <span>{x.attributes.position}</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : 'hgfhgf'}

                        {/* <div className="col-lg-12">
                            <div className="team-btn text-center mt-50">
                                <a className="main-btn" href="#">
                                    View all Members <i className="fal fa-arrow-right"></i>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamAbout;
