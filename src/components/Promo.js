import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Promo = () => {
    return (
        <Container fluid className="promo">
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={8} lg={6}>
                    <h2 className="promo-body">JOURNEY INTO BLINKA: UNDERSTANDING THE GAME'S IMPACT</h2>
                    <div className="embed-responsive embed-responsive-16by9" id="video-container">
                        <iframe id="video" className="embed-responsive-item" src="https://www.youtube.com/embed/xE_fQGaC4vI" title="GROUP SOCCER TRAINING IDEAS | Joner Football" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Promo;
