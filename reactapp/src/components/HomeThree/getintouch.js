import React from 'react';
// import axios from 'axios';

function GetTouch() {
    return (
        <>
            <div className="roww">
                <div className="col-md-8 offset-2">
                    <div className="contact-form">
                        <h4>GET IN TOUCH</h4>
                        <form action="#" method="post" className="row">
                            <div className="col-md-6">
                                <input type="text" name="f-name" placeholder="Name" />
                            </div>
                            <div className="col-md-6">
                                <input type="text" name="l-name" placeholder="Email" />
                            </div>
                            <div className="col-md-6">
                                <input type="email" name="email" placeholder="Telephone" />
                            </div>
                            <div className="col-md-6">
                                <input type="number" name="phone" placeholder="Country" />
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
        </>
    );
}

export default GetTouch;
