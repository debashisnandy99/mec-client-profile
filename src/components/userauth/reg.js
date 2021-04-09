import React, { useState } from "react"
import { Form, Button, Row, Col, Alert } from "react-bootstrap"
import axios from "../../services/api"

const RegPage = () => {
  const [validated, setValidated] = useState(false)
  const [password, checkPassword] = useState()
  const [repassword, checkRePassword] = useState()
  const [gender, setGender] = useState("Male")
  const [isSuccess, setSuccessStatus] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")
  const [isDataSending, setDataSendingStatus] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()

      setValidated(true)
    } else {
      event.preventDefault()
      event.stopPropagation()
      let target = event.target
      setDataSendingStatus(true)

      axios
        .put(
          "/auth/signup",
          {
            name: `${target.fname.value} ${target.lname.value}`,
            gender: gender,
            phone: target.phone.value,
            password: target.password.value,
          },
          {
            headers: {
              "content-type": "application/json",
            },
          }
        )
        .then(res => {
          setSuccessMsg(
            "User Created Successfully. Please Login to your dashboard"
          )
          setSuccessStatus(true)
          setDataSendingStatus(false)
        })
        .catch(err => {
          setDataSendingStatus(false)
          if (err.response != undefined)
            setSuccessMsg(err.response.data.data[0].msg)
        })
    }
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col>
          {successMsg ? (
            isSuccess ? (
              <Alert variant="success">{successMsg}</Alert>
            ) : (
              <Alert variant="danger">{successMsg}</Alert>
            )
          ) : (
            <></>
          )}
        </Col>
      </Row>
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
          value={gender}
          onChange={val => setGender(val.target.value)}
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

      <Button disabled={isDataSending} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default RegPage
