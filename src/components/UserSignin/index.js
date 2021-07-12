import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Layout from 'src/components/Layout/Layout';
import Input from 'src/components/Input/Input';
import { Userlogin } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import loginogo from '../../assets/img/loginogo.png';

import './style.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  const userFormLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    console.log(user);
    dispatch(Userlogin(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }
  return (
    <Layout>
      <section className="signin">
        <Container>
          <Row>
            <Col
              md={{ span: 6, offset: 3 }}
              className="py-5 mt-5 px-5 card-style"
            >
              <div className=" text-center">
                <img src={loginogo} alt="" />
              </div>
              <Form onSubmit={userFormLogin}>
                <Input
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  errorMessage=""
                  className="py-5"
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  errorMessage=""
                  className="py-5"
                />
                <div className="text-center ">
                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-4 button"
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
              <div md={12} className="text-center submit-text my-3">
                if you have an account?
                <h6 className="d-inline">
                  {/* signin */}
                  <Link to="/userSignup" className="text-decoration-none">
                    Signup
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

export default Signin;
