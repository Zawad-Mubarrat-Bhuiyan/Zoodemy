import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Home.css'
const Home = (props) => {
    const { name, img, instructor, price, details } = props.info
    // console.log(props.info)
    return (
        <div>
            <Col >
                <Card className="cards">
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Instructor: {instructor}</Card.Text>
                        <Card.Text>
                            <span className="fw-bold">Price:</span>  ${price}</Card.Text>
                        <Card.Text>
                            Course Details: {details}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Home;