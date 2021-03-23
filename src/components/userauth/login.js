import * as React from "react"
import { Form, Button } from "react-bootstrap"

const LoginPage = () => (
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="tel" placeholder="Enter phone number" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
)

export default LoginPage
