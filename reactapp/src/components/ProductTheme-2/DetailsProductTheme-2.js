import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
// import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsIncity() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://165.227.11.15:1338/api/apps?populate=*')
            .then((res) => {
                Setdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);

    function imageurl(atttribute) {
        const baseurl = 'http://165.227.11.15:1338';
        const dataurl = atttribute.image11.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function handleSubmit(e) {
        const allStars = document.querySelectorAll('.stars button i');
        allStars.forEach((star) => {
            star.className = 'far fa-star';
        });
        for (let j = 0; j < e.currentTarget.id; j += 1) {
            allStars[j].className = 'fa fa-star';
        }
    }
    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const form = useRef();
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const contact = { review, name, email };
        setReview('');
        setName('');
        setEmail('');
        // important//////////////
        // emailjs.sendForm('service_6o3palp', 'template_58uclcx', form.current, 'pYfziu1Gd30wQSISj')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        // e.target.reset()
        fetch('http://165.227.11.15:1338/api/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: contact }),
        }).then(() => {
            console.log('new review added');
        });
    };

    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-9 col-xs-9 extra-left">
                            <div className="extra-img">
                                {data
                                    ? data.map((x) => (
                                          <img
                                              className="bora"
                                              src={
                                                  x.attributes ? imageurl(x.attributes) : 'hgghtyu'
                                              }
                                              alt=""
                                          />
                                      ))
                                    : 'hgfhgf'}
                            </div>
                            <div className="extra-txt">
                                {data ? data.map((x) => <h3>{x.attributes.theme2}</h3>) : 'hgghtyu'}
                                <p>Lorem Ipsum is simply dummy text </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3 extra-right">
                            <div className="extra-txt-ryt">
                                <h2>$200.00</h2>
                                <p>No ratings yet!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-100 ml-2 mr-2 ancho">
                        <a href="#">Reviews (0)</a>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="review">
                                <h2>REVIEWS</h2>
                                <p>There are no reviews yet.</p>
                                <span className="spanpara">Be the first to review “HUAWEI”</span>
                                <p>
                                    Your email address will not be published. Required fields are
                                    marked *
                                </p>
                                <span>
                                    <strong>Your rating</strong>
                                </span>
                                <p className="stars">
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        id="1"
                                        className="butto"
                                        href="#"
                                    >
                                        <i className="far fa-star"></i>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        id="2"
                                        className="butto"
                                        href="#"
                                    >
                                        <i className="far fa-star"></i>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        id="3"
                                        className="butto"
                                        href="#"
                                    >
                                        <i className="far fa-star"></i>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        id="4"
                                        className="butto"
                                        href="#"
                                    >
                                        <i className="far fa-star"></i>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        id="5"
                                        className="butto"
                                        href="#"
                                    >
                                        <i className="far fa-star"></i>
                                    </button>
                                </p>
                                <form className="ml-2 mr-2" ref={form} onSubmit={handleSubmitForm}>
                                    <div className="row">
                                        <label className="lab" htmlFor="comment">
                                            Your Review
                                        </label>
                                    </div>
                                    <div className="row">
                                        <textarea
                                            cols="250"
                                            rows="10"
                                            name="comment"
                                            required
                                            value={review}
                                            onChange={(e) => setReview(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div className="row">
                                        <label className="lab" htmlFor="name">
                                            Name
                                        </label>
                                    </div>
                                    <div className="row">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        ></input>
                                    </div>
                                    <div className="row">
                                        <label className="lab" htmlFor="email">
                                            Email
                                        </label>
                                    </div>
                                    <div className="row">
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        ></input>
                                    </div>
                                    <div className="row">
                                        <input
                                            className="main-btn1"
                                            type="button"
                                            value="SUBMIT"
                                        ></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-details">
                                <div className="btns">
                                    <a href="#" target="_self" className="btn btn-success">
                                        Purchase Now
                                    </a>
                                </div>
                                <h6>PRODUCT DETAILS</h6>
                                <dl>
                                    <dt>Version:</dt> <dd></dd>
                                    <dt>Size:</dt> <dd></dd>
                                    <dt>Ionic:</dt> <dd></dd>
                                    <dt>Platforms:</dt> <dd></dd>
                                    <dt>Released:</dt> <dd></dd>
                                    <dt>Updated:</dt> <dd></dd>
                                    <dt>Category:</dt>
                                    <dd>
                                        <span className="posted_in">
                                            <a href="#" rel="tag">
                                                Themes
                                            </a>
                                            .
                                        </span>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsIncity;
