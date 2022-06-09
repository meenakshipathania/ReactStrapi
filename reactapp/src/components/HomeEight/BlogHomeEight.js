import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import blog4 from '../../assets/images/blog-4.jpg';
// import blog5 from '../../assets/images/blog-5.jpg';
// import blog6 from '../../assets/images/blog-6.jpg';
// import blog7 from '../../assets/images/blog-7.jpg';
import shape5 from '../../assets/images/shape/5.png';
import shape12 from '../../assets/images/shape/shape-12.png';

function BlogHomeEight() {
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
            <section className="appie-blog-3-area appie-blog-8-area pt-90 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Latest blog posts</h3>
                                <p>The app provides design and digital marketing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {data
                            ? data.slice(0, 4).map((x) => (
                                  <div className="col-lg-6">
                                      <div className="appie-blog-item-3 appie-blog-item-8 mt-30">
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
                                                  <a href={'/' + x.attributes.slug}>
                                                      {x.attributes.tag}
                                                  </a>
                                              </h5>
                                              <div className="meta-item">
                                                  <ul>
                                                      <li>
                                                          <i className="fal fa-clock"></i> July 14,
                                                          2022
                                                      </li>
                                                      <li>
                                                          <i className="fal fa-comments"></i> July
                                                          14, 2022
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
                                <a className="main-btn" href="/blog">
                                    View All Posts <i className="fal fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="appie-blog-8-shape-1">
                    <img src={shape5} alt="" />
                </div>
                <div className="appie-blog-8-shape-2">
                    <img src={shape12} alt="" />
                </div>
            </section>
        </>
    );
}

export default BlogHomeEight;
