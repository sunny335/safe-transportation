import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Header from 'src/components/Header/Header';
import HeadingTitle1 from 'src/components/HeadingTitle1';
import Footer from 'src/components/Footer/Footer';

import scanLeft from 'src/assets/img/scan-left.png';
import scanRight from 'src/assets/img/scan-right.png';

const ScanResult = () => {
  return (
    <>
      <Header />
      <Container>
        <HeadingTitle1
          title="QR Code Scan Result"
          info="This system is a community-driven program that encourages reporting of incidents
          involving dangerous and aggressive driving and women sexual harassment."
        />
        <Row className="text-center" style={{ padding: '80px 0 30px' }}>
          <Col md={6}>
            <img width="100%" src={scanLeft} alt="" />
          </Col>
          <Col md={{ size: 5, offset: 1 }}>
            <img width="100%" src={scanRight} alt="" />
          </Col>
        </Row>
        <Row className="pb-5">
          <Col className="d-flex justify-content-center">
            <Link
              to="/report"
              className="button"
              style={{ textDecoration: 'none' }}
            >
              {' '}
              Report Here
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ScanResult;
