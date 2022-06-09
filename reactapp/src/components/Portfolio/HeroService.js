import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import thumb from '../../assets/images/fun-fact-thumb.png';

function HeroService() {
    const [data1, Setdata] = useState([]);
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
        const dataurl = atttribute.imagehead.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <div className="appie-page-title-area appie-page-service-title-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-page-title-item">
                                <span>
                                    {data1
                                        ? data1.map((x) => <span>{x.attributes.heading}</span>)
                                        : 'hgfhgf'}
                                </span>
                                {data1
                                    ? data1.map((x) => (
                                          <h1 className="title">{x.attributes.tag}</h1>
                                      ))
                                    : 'hgfhgf'}
                                <div className="thumb">
                                    {data1
                                        ? data1.map((x) => (
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
