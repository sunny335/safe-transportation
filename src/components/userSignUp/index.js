import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { userSignup } from '../../actions';
import Layout from 'src/components/Layout/Layout';
import Input from 'src/components/Input/Input';

import loginogo from '../../assets/img/loginogo.png';

import css from './style.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector((state) => state.userAuth);
  const user = useSelector((state) => state.userRegistration);
  const dispatch = useDispatch();
  const userSignupform = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(userSignup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  let condition;
  if (user.message) {
    condition = <p>message...!</p>;
  }
  if (user.loading) {
    condition = <p>{user.message}...!</p>;
  }
  console.log(user.message);
  return (
    <Layout>
      <section className="signin">
        <Container>
          <Col md={12} className="text-center ">
            {user.message && (
              <Alert variant="success">
                <Alert.Heading>{user.message}</Alert.Heading>
              </Alert>
            )}
          </Col>
          <Row>
            <Col
              md={{ span: 6, offset: 3 }}
              className="py-5 mt-5 px-5 card-style"
            >
              <div className=" text-center">
                <img src={loginogo} alt="" />
              </div>
              <Form onSubmit={userSignupform}>
                <Row>
                  <Col md={6}>
                    <Input
                      label="First Name"
                      placeholder="First Name"
                      value={firstName}
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                      errorMessage=""
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      label=" Last Name"
                      placeholder=" Last Name"
                      value={lastName}
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                      errorMessage=""
                    />
                  </Col>
                </Row>
                <Input
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  errorMessage=""
                />
                {condition}
                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  errorMessage=""
                />
                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-4 button"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
              <div md={12} className="text-center submit-text">
                are you admin?
                <h6 className="d-inline">
                  <Link to="UserSignin" className="text-decoration-none">
                    SignUp here
                  </Link>
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Signup;
