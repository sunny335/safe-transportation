import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Layout from 'src/components/Layout/Layout';
import Input from 'src/components/Input/Input';
import { login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import css from './style.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    console.log(user);
    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }
  return (
    <Layout>
      <section className="admin">
        <Container>
          <Row>
            <Col
              md={{ span: 6, offset: 3 }}
              className=" shadow-lg py-5 mt-5 px-5"
            >
              <Form onSubmit={userLogin}>
                <Input
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  errorMessage=""
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  errorMessage=""
                />
                <Button variant="primary" type="submit" className="mt-4">
                  Submit
                </Button>
              </Form>
              <div md={12} className="text-center">
                are you user?
                <h6 className="d-inline">
                  <Link to="userSignin" className="text-decoration-none">
                    login
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
