import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsIncity() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/apps?populate=*')
            .then((res) => {
                Setdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);

    function imageurl(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image10.data[0].attributes.url;
        return baseurl + dataurl;
    }
    function handleSubmit(e) {
        const allStars =   document.querySelectorAll('.stars button i') ;
        allStars.forEach( (star) => {
            star.className = "far fa-star";
        })
        for(let j=0; j < e.currentTarget.id ; j++) {
            allStars[j].className = "fa fa-star";
        }
      }

    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-9 col-xs-9 extra-left">
                            <div className="extra-img">
                                {data
                                    ? data.map((x) => (
                                        <img className='bora'
                                            src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'}
                                            alt=""
                                        />
                                    ))
                                    : 'hgfhgf'}
                            </div>
                            <div className="extra-txt">
                                {data
                                    ? data.map((x) => <h3>{x.attributes.theme3}</h3>)
                                    : 'hgghtyu'}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3 extra-right">
                            <div className="extra-txt-ryt">
                                <h2>$200.00</h2>
                                <p>No ratings yet!</p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-100 ml-2 mr-2 ancho'>
                        <a href="#">Reviews (0)</a>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='review'>
                                <h2>REVIEWS</h2>
                                <p>There are no reviews yet.</p>
                                <span className='spanpara'>Be the first to review “HUAWEI”</span>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <span><strong>Your rating</strong></span>
                                <p className='stars'>
                                        <button onClick={handleSubmit} id="1" className="butto" href="#"><i class="far fa-star"></i></button>
                                        <button onClick={handleSubmit} id="2" className="butto" href="#"><i class="far fa-star"></i></button>
                                        <button onClick={handleSubmit} id="3" className="butto" href="#"><i class="far fa-star"></i></button>
                                        <button onClick={handleSubmit} id="4"className="butto" href="#"><i class="far fa-star"></i></button>
                                        <button onClick={handleSubmit} id="5" className="butto" href="#"><i class="far fa-star"></i></button>
                                </p>
                                <form className='ml-2 mr-2'>
                                    <div className='row'>
                                        <label className='lab' for='comment'>Your Review</label>
                                    </div>
                                    <div className='row'>
                                        <textarea cols='250' rows='10' name='comment' required></textarea>
                                    </div>
                                    <div className='row'>
                                        <label className='lab' for='name'>Name</label>
                                    </div>
                                    <div className='row'>
                                        <input className='form-control' type='text' name="name" required></input>
                                    </div>
                                    <div className='row'>
                                        <label className='lab' for='email'>Email</label>
                                    </div>
                                    <div className='row'>
                                        <input className='form-control' type='email' name="email" required></input>
                                    </div>
                                    <div className='row'>
                                    <input className="main-btn1" type='button' value='SUBMIT'></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='product-details'>
                                <div class="btns">
                                    <a href="#" target="_self" class="btn btn-success">
                                        Purchase Now
                                    </a>
                                </div>
                                <h6>PRODUCT DETAILS</h6>
                                <dl>
                                    <dt>Version:</dt><dd></dd>
                                    <dt>Size:</dt><dd></dd>
                                    <dt>Ionic:</dt><dd></dd>
                                    <dt>Platforms:</dt><dd></dd>
                                    <dt>Released:</dt><dd></dd>
                                    <dt>Updated:</dt><dd></dd>
                                    <dt>Category:</dt><dd><span class="posted_in"> <a href="#" rel="tag">Themes</a>.</span></dd>
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
