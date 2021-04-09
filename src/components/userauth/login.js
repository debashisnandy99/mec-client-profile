import React, { useState } from "react"
import { Form, Button, Row, Col, Alert } from "react-bootstrap"
import {
  getUser,
  isLoggedIn,
  logout,
  handleLogin,
} from "../../services/logauth"

const LoginPage = ({ setLoginStatus }) => {
  const [validated, setValidated] = useState(false)
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

      handleLogin(target.phone.value, target.password.value).then(value => {
        if (value) {
          setSuccessMsg(
            "User Created Successfully. Please Login to your dashboard"
          )
          setSuccessStatus(true)
          setDataSendingStatus(false)
          setLoginStatus(true)
        } else {
          setDataSendingStatus(false)
          setSuccessMsg("Somethiing went wrong")
        }
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
      <Form.Group>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          required
          type="tel"
          id="phone"
          pattern="[0-9]{10}"
          placeholder="Enter phone number"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          minLength="8"
          required
          type="password"
          id="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button disabled={isDataSending} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default LoginPage
