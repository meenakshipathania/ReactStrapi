import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import teamOne from '../../assets/images/team-1.jpg';
// import teamTwo from '../../assets/images/team-2.jpg';
// import teamThree from '../../assets/images/team-3.jpg';
// import teamFour from '../../assets/images/team-4.jpg';

function TeamHomeEight() {
    const [team, SetTeam] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://ocodeapps.com:1338//api/teams?populate=*')
            .then((res) => {
                SetTeam(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);

    function imageurl(atttribute) {
        const baseurl = 'http://ocodeapps.com:1338/';
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section
                className="
        appie-team-area appie-team-about-area appie-team-8-area
        pt-90
        pb-90
      "
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Meet our Team Members</h3>
                                {/* <p>Different layouts and styles for team sections.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {team
                            ? team.map((x) => (
                                  <div className="col-lg-3 col-md-6">
                                      <div
                                          className="
                                        appie-team-item appie-team-item-about appie-team-item-8
                                        mt-30
                                        wow
                                        animated
                                        fadeInUp
                                    "
                                          data-wow-duration="2000ms"
                                          data-wow-delay="200ms"
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
                                          </div>
                                          <div className="content text-left">
                                              <h5 className="title">{x.attributes.name}</h5>
                                              <span>{x.attributes.position}</span>
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : 'hgfhgf'}
                        {/* </div>
                        </div>  */}
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

export default TeamHomeEight;
