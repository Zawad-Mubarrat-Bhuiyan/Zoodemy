import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Services from '../Services/Services';

const Data2 = () => {
    const [data2, setData2] = useState([]);
    useEffect(() => {
        fetch('./datalist.JSON')
            .then(res => res.json())
            .then(data => setData2(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {data2.map(info => <Services info={info}></Services>)}
            </Row>
        </div>
    );
};

export default Data2;