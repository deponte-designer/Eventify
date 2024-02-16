import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import ContactMap from '../assets/images/contact-map.jpg';
import ContactImg from '../assets/images/contact-img2.jpg';
import { ModalContact } from '../components/ModalComponent';


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [showContactModal, setShowContactModal] = useState(false);
    const [formError, setFormError] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setShowContactModal(true);
        const isFormValid = formData.name != "" && formData.subject != "" && formData.email != "" && formData.message != "";
        setFormError(!isFormValid);
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact-page-bg" style={{ backgroundImage: `url(${ContactMap})`, borderRadius: "6px" }} id="contact">
            <Container className="contact-container">
                <Card lg={12} className="contact-card card-shadow border-0 p-3" data-bs-theme="dark">
                    <Row>
                        <Col lg={8} className="contact-box p-4">
                            <h4 className="title">Contact Us</h4>

                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mt-3">
                                            <Form.Control type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter First & Last name" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mt-3">
                                            <Form.Control type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="youremail@here.com" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group className="mt-3">
                                            <Form.Control type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder="Subject" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" name="message" required value={formData.message} onChange={handleChange} rows={3} placeholder="I would like to ask you..." />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Button type="submit" variant="outline-success" className="btn-outline-purple mt-3 mb-3 py-2 px-3"><span> Send Message <i className="ti-arrow-right"></i></span></Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        
                        <Col lg={4} className="contact-details d-flex " style={{ backgroundImage: `url(${ContactImg})`, borderRadius: "5px", paddingRight: "3px" }}rder>
                            <section className="p-4 ">
                                <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                                <p className="text-white op-7">Carnaby Street,
                                    <br /> London, UK</p>
                                <h5 className="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                                <p className="contact-details-margin-down" >01212 123123</p>
                            </section>
                        </Col>
                    </Row>
                </Card>
















            </Container>
            <ModalContact show={showContactModal} toggleContactModal={() => setShowContactModal(!showContactModal)} formError={formError} />
        </div>
    );
}

export default Contact;