import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import singlePost from '../../assets/images/single-post/1.jpg';
import author from '../../assets/images/single-post/author.png';
import cmnt1 from '../../assets/images/single-post/c1.png';
import cmnt2 from '../../assets/images/single-post/c2.png';
import cmnt3 from '../../assets/images/single-post/c3.png';

function AppService1() {
    const [text2, Settext2] = useState([]);
  useEffect(() => {
     const request = axios.CancelToken.source();
     axios.get('http://165.227.11.15:1338/api/services/2?populate[nested][populate]=*')
           .then((res) => {
              Settext2(res.data.data);
           })
           .catch((errordata) => {
              console.log(errordata);
           });
     return () => request.cancel();
  }, []);

  function imageurl(data) {
    const baseurl = 'http://165.227.11.15:1338';
    const dataurl = data.data[0].attributes.url;
    return baseurl + dataurl;
 }
    return (
        <>
            <div className="single-post-area">
            <h4 className="article-title">{ text2['attributes'] ? text2['attributes']['nested'].map((x) => <span>{x.head}</span>) : 'Home'}</h4>
                <p>{ text2['attributes'] ? text2['attributes']['nested'].map((x) => <span>{x.para1}</span>) : 'Home'}</p>
                <div className="post-thumb11">
                { text2['attributes']  ? text2['attributes']['nested'].map((x) => (
                 <img src={x.image ? imageurl(x.image) : 'hgghtyu'} className="img" alt="img not found" />
                  ))
               : 'hgfhgf'}
                </div>
                <p>
                { text2['attributes'] ? text2['attributes']['nested'].map((x) => <span>{x.para2}</span>) : 'Home'}
                </p>
                <p>
                { text2['attributes'] ? text2['attributes']['nested'].map((x) => <span>{x.para3}</span>) : 'Home'}
                </p>
                
                <p>
                { text2['attributes'] ? text2['attributes']['nested'].map((x) => <span>{x.para4}</span>) : 'Home'}
                </p>
               
                <p>
                { text2['attributes'] ? text2['attributes']['nested'].map((x) => <span>{x.para5}</span>) : 'Home'}
                </p>                
            </div>
        </>
    );
}

export default AppService1;
