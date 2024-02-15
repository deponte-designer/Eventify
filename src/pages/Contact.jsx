import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import ContactMap from '../assets/images/contact-map.jpg';

function Contact() {
    return (
        <div className="contact-page" style={{ backgroundImage: `url(${ContactMap})` }} id="contact">
            <Container>
                <Row className="contact-container">
                    <Col lg={12}>
                        <Card className="card-shadow border-0 mb-4">
                            <Row>
                                <Col lg={8}>
                                    <div className="contact-box p-4">
                                        <h4 className="title">Contact Us</h4>
                                        <Form>
                                            <Row>
                                                <Col lg={6}>
                                                    <Form.Group className="mt-3">
                                                        <Form.Control type="text" placeholder="First and last name" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Group className="mt-3">
                                                        <Form.Control type="text" placeholder="youremail@here.com" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={12}>
                                                    <Form.Group className="mt-3">
                                                        <Form.Control type="text" placeholder="Subject" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={12}>
                                                    <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
                                                        <Form.Control as="textarea" rows={3} placeholder="Write your message here..." />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={12}>
                                                    <Button type="submit" className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"><span> SEND <i className="ti-arrow-right"></i></span></Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Col>
                                <Col lg={4} className="bg-image" style={{ backgroundImage: 'url(https://placehold.co/380x318)' }}>
                                    <div className="detail-box p-4">
                                        <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                                        <p className="text-white op-7">Carnaby Street,
                                            <br /> London, UK</p>
                                        <h5 className="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                                        <p className="text-white op-7">07712 123123</p>
                                        <div className="round-social light">

                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;