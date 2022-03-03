import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import thumb from '../../assets/images/fun-fact-thumb.png';

const apiUrl = 'http://localhost:1337/api/portheaders?populate=*';
function HeroService() {
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
    function imageurl(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <div className="appie-page-title-area appie-page-service-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-page-title-item">
                                <span>
                                    {data
                                        ? data.map((x) => <span>{x.attributes.heading}</span>)
                                        : 'hgfhgf'}
                                </span>
                                {data
                                    ? data.map((x) => <h1 className="title">{x.attributes.tag}</h1>)
                                    : 'hgfhgf'}
                                <div className="thumb">
                                    {data
                                        ? data.map((x) => (
                                              <img
                                                  src={
                                                      x.attributes
                                                          ? imageurl(x.attributes)
                                                          : 'hgghtyu'
                                                  }
                                                  alt=""
                                              />
                                          ))
                                        : 'hgfhgf'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroService;
