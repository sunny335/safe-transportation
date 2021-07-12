import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from 'src/components/Layout/Layout';
// import Posts from 'src/components/Posts/Posts';
import Form from 'src/components/Form/Form';

const CreatePost = () => {
  const [currentId, setCurrentId] = useState(1);
  return (
    <Layout>
      {/* <Posts setCurrentId={setCurrentId} /> */}
      <Container>
        <Row>
          <Col>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Col>
        </Row>
      </Container>
      {/* <section className="searchPage my-5">
        <Container>
          <Row>
            <Col md={12}>
              <h1>Create Your Post</h1>
              <Form>
                <Form.Row className="d-flex flex-wrap">
                  <Form.Group
                    as={Col}
                    md={6}
                    controlId="formGridEmail"
                    className="px-3 mb-3"
                  >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="Name of your properties"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md={6}
                    className="px-3 mb-3"
                    controlId="formGridAddress1"
                  >
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>
                  <Form.Group
                    controlId="formGridAddress2"
                    as={Col}
                    md={6}
                    className="px-3 mb-3"
                  >
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md={6}
                    className="px-3 mb-3"
                    controlId="formGridCity"
                  >
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>

                <Form.Row className="d-flex flex-wrap">
                  <Form.Group
                    as={Col}
                    md={6}
                    className="px-3 mb-3"
                    controlId="formGridState"
                  >
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md={6}
                    className="px-3 mb-3"
                    controlId="formGridZip"
                  >
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>
                <Form.Group
                  controlId="exampleForm.ControlTextarea1"
                  className="px-3 mb-3"
                >
                  <Form.Label>Describe Here</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="px-3 mb-3">
                  <Form.File
                    id="exampleFormControlFile1"
                    label="Upload Photos"
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox" className="px-3 mb-3">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="px-3 mb-3 ms-3"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section> */}
    </Layout>
  );
};

export default CreatePost;
