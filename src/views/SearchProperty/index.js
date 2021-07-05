import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Card } from 'react-bootstrap';
import Layout from 'src/components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';

const SearchProperty = () => {
  const [value, setValue] = useState('');
  const properti = useSelector((state) => state.properties);
  console.log('properties', properties);

  const handleChange = (data) => {
    setValue(data.target.value);
  };
  const properties = properti.propertie.filter((items) =>
    items.location.toLowerCase().includes(value)
  );

  return (
    <Layout>
      <section className="searchPage my-5">
        <Container>
          <Row>
            <Col md={12}>
              <Form className="mb-5">
                <Form.Control
                  type="text"
                  placeholder="Search Properties"
                  defaultValue={value}
                  onChange={handleChange}
                  className="rounded-pill"
                />
              </Form>
            </Col>
            {properties &&
              properties.map((items) => (
                <Col md={3} className="mb-3">
                  <Card className="shadow-sm">
                    <img src={items.image} alt="" />
                    <div className="p-3">
                      <h3>{items.Name}</h3>
                      <p>{items.location}</p>
                      <strong className="d-block mb-3">{items.price}</strong>
                      <Button block>See Details</Button>
                    </div>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default SearchProperty;
