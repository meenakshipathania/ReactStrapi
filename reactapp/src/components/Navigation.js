import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navigation() {
    const [navitems, Setnavitems] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        axios
            .get('https://ocodeapps.com:1338/api/logos')
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
                    <Link to="/">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name}</a>) : 'hgfhgf'}
                    </Link>
                </li>
                <li>
                    <Link to="/services">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name1}</a>) : 'hgfhgf'}
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name2}</a>) : 'hgfhgf'}
                    </Link>
                </li>
                {/* <li>
                    <Link to="/product">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name3}</a>) : 'hgfhgf'}
                    </Link>
                </li> */}
                <li>
                    <Link to="/about-us">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name4}</a>) : 'hgfhgf'}
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name5}</a>) : 'hgfhgf'}
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
