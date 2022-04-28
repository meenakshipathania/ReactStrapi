import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectHomeThree({ className }) {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://165.227.11.15:1338/api/logos')
            .then((res) => {
                Setdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
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
                                {data
                                    ? data.map((x) => (
                                          <h1 className="title"> {x.attributes.heading}</h1>
                                      ))
                                    : 'hgfhgf'}
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
