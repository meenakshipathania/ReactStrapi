import React from 'react';
// import axios from 'axios';

function HeroAbout() {
    return (
        <>
            <div className="appie-about-top-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-8">
                            <div className="appie-about-top-title">
                                <h2 className="title">ABOUT US</h2>
                                {/* <p>We offer you a varity of taste and food options.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="appie-about-page-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="appie-about-page-content">
                                {/* <a href="#">
                                    View all Members <i className="fal fa-arrow-right"></i>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroAbout;
