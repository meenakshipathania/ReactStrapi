import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

function Navigation() {
    const [navitems, Setnavitems] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('http://165.227.11.15:1338/api/logos')
            .then((res) => {
                Setnavitems(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => request.cancel();
    }, []);
    return (
        <>
            <ul>
                <li>
                    <a href="/">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name}</a>) : 'hgfhgf'}
                        {/* <i classNameName="fal fa-angle-down" /> */}
                    </a>
                </li>
                <li>
                    <a href="/service">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name1}</a>) : 'hgfhgf'}
                    </a>
                </li>
                <li>
                    <a href="/news">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name2}</a>) : 'hgfhgf'}
                    </a>
                </li>
                <li>
                    <a href="/about-us">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name3}</a>) : 'hgfhgf'}
                    </a>
                </li>
                <li>
                    <a href="/contact">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name4}</a>) : 'hgfhgf'}
                    </a>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
