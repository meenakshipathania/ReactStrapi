import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:1337/api/restaurants';
const apiUrl1 = 'http://localhost:1337/api/descriptions';
function HeroAbout() {
    const [category, SetCategory] = useState();
    const [desc, SetDesc] = useState();
    useEffect(() => {
        axios.get(apiUrl).then((res) => {
            SetCategory(res.data.data);
        });
    });
    useEffect(() => {
        axios.get(apiUrl1).then((resp) => {
            SetDesc(resp.data.data);
        });
    });
    return (
        <>
            <div className="appie-about-top-title-area">
                <div className="container">
                    {category ? category.map((x) => <li>{x.attributes.name}</li>) : 'hgfhgf'}
                    {category ? category.map((x) => <p>{x.attributes.description}</p>) : 'hgfhgf'}
                    {category ? category.map((x) => <p>{x.attributes.contact}</p>) : 'hgfhgf'}
                    {category ? category.map((x) => <p>{x.attributes.email_id}</p>) : 'hgfhgf'}
                    {category ? category.map((x) => <p>{x.attributes.Address}</p>) : 'hgfhgf'}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="appie-about-top-title">
                                <h2 className="title">The leading people Management platform</h2>
                                <p>We offer you a varity of taste and food options.</p>
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
                                <h3 className="title">
                                    {desc ? desc.map((x) => <p>{x.attributes.desc}</p>) : 'hgfhgf'}
                                </h3>
                                <p>
                                    {desc
                                        ? desc.map((x) => <p>{x.attributes.detail}</p>)
                                        : 'hgfhgf'}
                                </p>
                                <a href="#">
                                    View all Members <i className="fal fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroAbout;
