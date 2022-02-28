import React from 'react';
import thumb from '../../assets/images/third.jpg';

function TrafficHomeOne() {
    return (
        <section className="appie-traffic-area pt-140 pb-180">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="appie-traffic-title">
                            <h3 className="title">Our New Menus</h3>
                            <p>
                                Appie is proud to collaborate with Chef Oliver, one of the wonderful
                                chef. Enjoy the unique taste and texture of Oliver's dishes.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">BURRATA</h5>
                                    <p>Maldera Burrata with fresh vegetables.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-2 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">BABY GEM CAESAR</h5>
                                    <p>Home made Caesar Dressing, with Cured Tomato</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-3">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Grilled Vegetables</h5>
                                    <p>Selection of Grilled Vegetables with Grilled breads.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-4">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">PASTA</h5>
                                    <p>
                                        Fresh Egg Yolk Pasta with Chesse, Brown Buttter and Olives.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="traffic-btn mt-50">
                                    <a className="main-btn" href="#">
                                        Learn More <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="traffic-thumb ">
                <img
                    className="wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                    src={thumb}
                    alt=""
                />
            </div>
        </section>
    );
}

export default TrafficHomeOne;
