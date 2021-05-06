import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Example = (props) => {
  return (
    <Form className="contact">
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Your email " />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Text</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default Example;
