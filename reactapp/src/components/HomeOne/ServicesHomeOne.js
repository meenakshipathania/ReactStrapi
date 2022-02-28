import React from 'react';
import IconOne from '../../assets/images/welcome.jpg';
import IconTwo from '../../assets/images/order.jpg';
import IconThree from '../../assets/images/foodmaking.jpg';
import IconFour from '../../assets/images/foodserving.jpg';

function ServicesHomeOne({ className }) {
    return (
        <section className={`appie-service-area pt-90 pb-100 ${className}`} id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                                Serve With <br /> Love and Care.
                            </h3>
                            <p>The full monty spiffing good time no biggie cack grub fantastic. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div>
                                <img src={IconOne} alt="" />
                            </div>
                            <h4 className="appie-title">Welcome to the Appie.</h4>
                            <p>Very Warm Welcome</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div>
                                <img src={IconTwo} alt="" />
                            </div>
                            <h4 className="appie-title">Order by your choice</h4>
                            <p>Take an order by your choice</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div>
                                <img src={IconThree} alt="" />
                            </div>
                            <h4 className="appie-title">Make a Food</h4>
                            <p>Make a food with care.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div>
                                <img src={IconFour} alt="" />
                            </div>
                            <h4 className="appie-title">Serving Food</h4>
                            <p>Serve Food with Love.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeOne;
