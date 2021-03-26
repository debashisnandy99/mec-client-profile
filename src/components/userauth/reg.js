import React, { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"

const RegPage = () => {
  const [validated, setValidated] = useState(false)
  const [password, checkPassword] = useState()
  const [repassword, checkRePassword] = useState()

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              id="fname"
              placeholder="Enter your first name"
            />
            <Form.Control.Feedback type="invalid">
              Please enter first name.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              id="lname"
              placeholder="Enter your last name"
            />
            <Form.Control.Feedback type="invalid">
              Please enter last name.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Select Gender</Form.Label>
        <select
          className="form-control form-select"
          value="0"
          aria-label="Male"
        >
          <option value="0">Male</option>
          <option value="1">Female</option>
          <option value="2">Others</option>
        </select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number*</Form.Label>
        <Form.Control
          required
          type="tel"
          id="phone"
          pattern="[0-9]{10}"
          placeholder="Enter phone number"
        />
        <Form.Control.Feedback type="invalid">
          Please enter valid phone number.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password*</Form.Label>
        <Form.Control
          required
          type="password"
          value={password ? password : ""}
          onChange={e => checkPassword(e.target.value)}
          id="password"
          minLength="8"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          Please enter valid password.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Re-Type Password*</Form.Label>
        <Form.Control
          minLength="8"
          required
          isInvalid={password === repassword ? false : true}
          value={repassword ? repassword : ""}
          onChange={e => checkRePassword(e.target.value)}
          type="password"
          id="retypepass"
          aria-describedby="rePasswordHelpBlock"
        />
        <Form.Control.Feedback type="invalid">
          Password should be match.
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default RegPage
