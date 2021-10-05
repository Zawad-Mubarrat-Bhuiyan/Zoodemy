import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <i class="fas fa-quote-left"></i>Udemy fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.<i class="fas fa-quote-right"></i>
                                </Card.Text>
                                <Card.Title>Varun Patil</Card.Title>
                                <p>Senior Manager of HR Development</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default About;