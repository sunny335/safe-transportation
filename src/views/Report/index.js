import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';

import HeadingTitle1 from 'src/components/HeadingTitle1';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import congratulations from 'src/assets/img/congratulations.png';
import agree from 'src/assets/img/agree.png';
import CreatePost from '../CreatePost';

const Report = () => {
  return (
    <>
      <Header />
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
            {/* <Form> */}
            {/* <FormGroup>
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
              <Button className="button">Submit</Button> */}
            {/* </Form> */}
            <CreatePost />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Report;
