import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:1337/api/logos';
function Forms() {
    const [logo, Setlogo] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(apiUrl, { cancelToken: request.token })
                .then((res) => {
                    Setlogo(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });
    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact--info-area">
                                <h3>Get in touch</h3>
                                <p>Looking for help? Fill the form and start a new adventure.</p>
                                <div className="single-info">
                                    <h5>Headquaters</h5>
                                    <p>
                                        <i className="fal fa-home"></i>
                                        {logo
                                            ? logo.map((x) => <a>{x.attributes.location}</a>)
                                            : 'hgfhgf'}
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5>Phone</h5>
                                    <p>
                                        <i className="fal fa-phone"></i>
                                        {logo
                                            ? logo.map((x) => <a>{x.attributes.phone1}</a>)
                                            : 'hgfhgf'}
                                        <br />
                                        {logo
                                            ? logo.map((x) => <a>{x.attributes.phone2}</a>)
                                            : 'hgfhgf'}
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5>Support</h5>
                                    <p>
                                        <i className="fal fa-envelope"></i>
                                        {logo
                                            ? logo.map((x) => <a>{x.attributes.email}</a>)
                                            : 'hgfhgf'}
                                    </p>
                                </div>
                                <div className="ab-social">
                                    <h5>Follow Us</h5>
                                    <a className="fac" href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="twi" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="you" href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a className="lin" href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <h3>Let’s Connect</h3>
                                <p>
                                    Do you have any query? Enter your detail below. We will be
                                    contact with you.
                                </p>
                                <form action="#" method="post" className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="f-name" placeholder="Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="l-name" placeholder="Email" />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" name="phone" placeholder="Telephone" />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" name="suject" placeholder="Country" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="condition-check">
                                            <input id="terms-conditions" type="checkbox" />
                                            <label htmlFor="terms-conditions">
                                                I agree to the <a href="#">Terms & Conditions</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <input type="submit" name="submit" value="Send Message" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bisylms-map">
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13721.681812082987!2d76.69135252866072!3d30.70657828169255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef3c91ffdd4d%3A0xe85acda7984ecef8!2soCode%20Technologies!5e0!3m2!1sen!2sin!4v1646379416727!5m2!1sen!2sin"
                    width="600"
                    height="450"
                ></iframe>
                {/* <iframe
                    title="map"
                    src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=39.966528,-75.158284&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed"
                ></iframe> */}
            </div>
        </>
    );
}

export default Forms;
