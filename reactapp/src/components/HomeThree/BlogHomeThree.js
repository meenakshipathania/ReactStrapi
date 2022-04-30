import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BlogHomeThree() {
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://165.227.11.15:1338/api/blogposts?populate=*')
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
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section className="appie-blog-3-area pt-90 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Latest blog posts</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {data
                            ? data.slice(0,4).map((x) => (
                                  <div className="col-lg-6">
                                      <div className="appie-blog-item-3 mt-30">
                                          <div className="thumb">
                                              <img
                                                  src={
                                                      x.attributes
                                                          ? imageurl(x.attributes)
                                                          : 'hgghtyu'
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                          <div className="content">
                                              <h5 className="title">
                                                  <a href={'/'+x.attributes.slug}>{x.attributes.tag}</a>
                                              </h5>
                                              <div className="meta-item">
                                                  <ul>
                                                      <li>
                                                          <i className="fal fa-clock" /> June 14,
                                                          2021
                                                      </li>
                                                      <li>
                                                          <i className="fal fa-comments" /> June 20,
                                                          2021
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : 'hgfhgf'}
                        <div className="col-lg-12">
                            <div className="blog-btn text-center mt-60">
                                <Link className="main-btn" to="/blog">
                                    View All Posts <i className="fal fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogHomeThree;
