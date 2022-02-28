import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:1337/api/orders';
function ProjectHomeThree({ className }) {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(apiUrl, { cancelToken: request.token })
                .then((res) => {
                    Setdata(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });
    return (
        <>
            <section className={`appie-project-3-area ${className} `}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="
                appie-project-3-box
                d-block d-md-flex
                justify-content-between
                align-items-center
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <h1 className="title">
                                    {data
                                        ? data.map((x) => <h1>{x.attributes.heading}</h1>)
                                        : 'hgfhgf'}
                                </h1>
                                <a className="main-btn" href="#">
                                    {data ? data.map((x) => <a>{x.attributes.text}</a>) : 'hgfhgf'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHomeThree;
