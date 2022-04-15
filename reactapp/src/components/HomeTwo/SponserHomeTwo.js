import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import Sponser1 from '../../assets/images/sponser-1.png';
import Sponser10 from '../../assets/images/sponser-10.png';
import Sponser2 from '../../assets/images/sponser-2.png';
import Sponser3 from '../../assets/images/sponser-3.png';
import Sponser4 from '../../assets/images/sponser-4.png';
import Sponser5 from '../../assets/images/sponser-5.png';
import Sponser6 from '../../assets/images/sponser-6.png';
import Sponser7 from '../../assets/images/sponser-7.png';
import Sponser8 from '../../assets/images/sponser-8.png';
import Sponser9 from '../../assets/images/sponser-9.png';
import sponserShape from '../../assets/images/sponser-shape.png';

function SponserHomeTwo({ className }) {
    const [data1, Setdata] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/abouts')
            .then((res) => {
                Setdata(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);

    const [spo, Setspo] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://localhost:1337/api/brands?populate=*')
            .then((res) => {
                Setspo(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    function imageurl(atttribute) {
        const baseurl = 'http://localhost:1337';
        const dataurl = atttribute.image.data[0].attributes.url;
        return baseurl + dataurl;
    }
    return (
        <>
            <section className={`appie-sponser-area pb-100 ${className}`}>
                <div className="container">
                    <div className="row">
                    {data1 ? data1.map((x) => (
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">
                                {x.attributes.spon1} <br />
                                {x.attributes.spon2}
                                </h3>
                                <p>{x.attributes.spon3}</p>
                            </div>
                        </div>
                        )) : 'hgfhgf'}
                    </div>
                    <div className="row">
                        {spo ? spo.map((x) => (
                        <div className="col-lg-3">
                            <div className="appie-sponser-box d-flex justify-content-center">
                                <div className="sponser-item">
                                    <img src={
                                            x.attributes
                                                ? imageurl(x.attributes)
                                                : 'hgghtyu'
                                        } alt="" />
                                </div>
                                {/* <div className="sponser-item">
                                    <img src={Sponser2} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser3} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser4} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser5} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser6} alt="" />
                                </div> */}
                              
                            </div>
                            {/* <div className="appie-sponser-box item-2 d-flex justify-content-center">
                                <div className="sponser-item">
                                    <img src={Sponser7} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser8} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser9} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser10} alt="" />
                                </div>
                            </div> */}
                        </div>
                          )) : 'hgfhgf'}
                    </div>
                </div>
                <div className="sponser-shape">
                    <img src={sponserShape} alt="" />
                </div>
            </section>
        </>
    );
}

export default SponserHomeTwo;
