import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import HeadingTitle1 from 'src/components/HeadingTitle1';

import Hero_Image from 'src/assets/img/home/Hero_Image.png';
import Feedback from 'src/assets/img/home/Feedback.png';
import congratulations from 'src/assets/img/congratulations.png';
import agree from 'src/assets/img/agree.png';

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
                  <Link
                    to="/scan-result"
                    className="button me-2"
                    style={{ textDecoration: 'none' }}
                  >
                    {' '}
                    Scan QR Code
                  </Link>
                  <Link
                    to="#"
                    style={{ color: '#EE3F5C', textDecoration: 'none' }}
                  >
                    {' '}
                    Scan QR Code
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <img width="100%" src={Hero_Image} alt="" />
            </Col>
          </Row>
        </section>
      </Container>
      <Container>
        <HeadingTitle1
          title="We are ready to Help You."
          info="If any irregularity like over speed, extra passenger, extra money, diver
          addicted, sexual harassment, etc. occurs a report can be done by the system
          website or app and nearby police station get to know about the report and take action.
          "
        />
        <Row
          style={{
            padding: '116px 0 20px',
          }}
        >
          <Col md={6}>
            <img src={congratulations} alt="" className="img-fluid" />
          </Col>
          <Col md={{ size: 5, offset: 1 }}>
            <span>
              You should be login first:{' '}
              <Link
                to="/UserSignin"
                className="mt-4 button me-2"
                style={{ textDecoration: 'none' }}
              >
                log in
              </Link>
              <Link
                to="/UserSignin"
                className="mt-4"
                style={{ textDecoration: 'none', color: '#F93543' }}
              >
                more info
              </Link>
            </span>
            <Form>
              <FormGroup>
                <Label for="exampleSelect">Categories:</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Upload Files:</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Comments:</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <img src={agree} alt="" className="img-fluid mb-4" />
              <Button className="button">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <section>
        <img width="100%" src={Feedback} alt="" />
      </section>
      <Footer />
    </>
  );
};

export default Home;
