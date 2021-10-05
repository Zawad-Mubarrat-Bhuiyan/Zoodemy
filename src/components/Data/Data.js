import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Home from '../Home/Home';
import './Data.css'
const Data = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./datalist.JSON')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className="flexible">
                <div className="half-size top-info">
                    <h1><span className="orange-color">Zoodemy</span></h1>
                    <p>Zoodemy is the first choice of many students for online learning</p> <br/>
                </div>
                <div className="half-size">
                    <img src="https://www.uopeople.edu/wp-content/uploads/2020/01/Best-Educational-YouTube-Channels-for-College-Students-300x224.jpg" alt="" />
                </div>
            </div>
            <div>
                <Row xs={1} md={4} className="g-4">
                    {data.slice(0, 4).map(info => <Home info={info}></Home>)}
                </Row>
            </div>

        </div>
    );
};

export default Data;