import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const apiUrl = 'http://localhost:1337/api/navbars';
const NewApipiUrl = 'http://localhost:1337/api/homes';

function Navigation() {
    const [navitems, Setnavitems] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(apiUrl, { cancelToken: request.token })
                .then((res) => {
                    Setnavitems(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });
    const [home, Sethome] = useState([]);
    useEffect(() => {
        const request = axios.CancelToken.source();
        setTimeout(() => {
            axios
                .get(NewApipiUrl, { cancelToken: request.token })
                .then((res) => {
                    Sethome(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
        return () => request.cancel();
    });
    return (
        <>
            <ul>
                <li>
                    <a href="#">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name}</a>) : 'hgfhgf'}
                        <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/">
                                {home ? home.map((x) => <a>{x.attributes.head1}</a>) : 'hgfhgf'}
                            </Link>
                        </li>
                        <li>
                            <Link to="/home-two">
                                {home ? home.map((x) => <a>{x.attributes.head2}</a>) : 'hgfhgf'}
                            </Link>
                        </li>
                        <li>
                            <Link to="/home-three">
                                {home ? home.map((x) => <a>{x.attributes.head3}</a>) : 'hgfhgf'}
                            </Link>
                        </li>
                        <li>
                            <Link to="/home-four">
                                {home ? home.map((x) => <a>{x.attributes.head4}</a>) : 'hgfhgf'}
                            </Link>
                        </li>
                        <li>
                            <Link to="/home-five">
                                {home ? home.map((x) => <a>{x.attributes.head5}</a>) : 'hgfhgf'}
                            </Link>
                        </li>
                        <li>
                            <Link to="/home-six">
                                {home ? home.map((x) => <a>{x.attributes.head6}</a>) : 'hgfhgf'}
                            </Link>
                        </li>
                        <li>
                            <Link to="/home-seven">
                                {home ? home.map((x) => <a>{x.attributes.head7}</a>) : 'hgfhgf'}
                            </Link>
                        </li>
                        <li>
                            <Link to="/home-eight">
                                {home ? home.map((x) => <a>{x.attributes.head8}</a>) : 'hgfhgf'}
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/service">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name1}</a>) : 'hgfhgf'}
                    </Link>
                </li>
                <li>
                    <a href="/news">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name2}</a>) : 'hgfhgf'}
                    </a>
                </li>
                <li>
                    <a href="/contact">
                        {navitems ? navitems.map((x) => <a>{x.attributes.name3}</a>) : 'hgfhgf'}
                    </a>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
