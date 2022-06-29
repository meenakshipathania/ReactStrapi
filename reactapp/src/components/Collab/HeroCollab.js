import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HeroIncity() {
    const [data1, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://ocodeapps.com:1338/api/nested-pages')
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
            <div className="appie-page-title-area title-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-page-title-item">
                                {data1
                                    ? data1.map((x) => (
                                          <h1 className="title">{x.attributes.collab}</h1>
                                      ))
                                    : 'hgfhgf'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroIncity;
