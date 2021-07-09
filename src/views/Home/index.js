import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';

import Hero_Image from 'src/assets/img/home/Hero_Image.png';
import Feedback from 'src/assets/img/home/Feedback.png';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <section className="hero_sec_main">
          <Row>
            <Col md={6}>
              <div className="hero_sec_title">
                <h1>we want </h1>
                <h2>safe transportation system.</h2>
                <p>
                  Existing traffic complaint reporting systems only receive a
                  report from the witness manually or via calls.
                </p>
                <div>
                  <Button className="button"> Scan QR Code</Button>
                  <Button outline className="">
                    {' '}
                    Scan QR Code
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <img width="100%" src={Hero_Image} alt="" />
            </Col>
          </Row>
        </section>
      </Container>
      <section>
        <img width="100%" src={Feedback} alt="" />
      </section>
      <Footer />
    </>
  );
};

export default Home;
