import React, { useState, useRef, useEffect } from "react"
import {
  Form,
  Button,
  Row,
  Col,
  Alert,
  Modal,
  Popover,
  Overlay,
} from "react-bootstrap"
import firebase from "../../services/firebase"
import { navigate, Link } from "gatsby"
import "firebase/auth"
import axios from "../../services/api"

if (typeof window !== "undefined") {
  firebase.auth().useDeviceLanguage()
}
const windowVar = {
  recaptchaVerifier: undefined,
  confirmationAuthResult: undefined,
}
const RegPage = ({ setLoginStatus }) => {
  const [validated, setValidated] = useState(false)
  const [validatedOtp, setValidatedOtp] = useState(false)
  const [validationOtpMessage, setValidatedOtpMessage] = useState(
    "Please enter valid otp"
  )
  const [password, checkPassword] = useState()
  const [repassword, checkRePassword] = useState()
  const [gender, setGender] = useState("Male")
  const [isSuccess, setSuccessStatus] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")
  const [isDataSending, setDataSendingStatus] = useState(false)
  const [show, setShow] = useState(false)
  const [smShow, setSmShow] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [showNumber, setShowNumber] = useState(false)
  const [isPhoneVerified, setPhoneVerified] = useState(false)
  const [target, setTarget] = useState(null)
  const ref = useRef(null)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleClick = event => {
    if (phoneNumber.length != 10) {
      setShowNumber(!showNumber)
      setTarget(event.target)
      setTimeout(() => {
        setShowNumber(false)
        setTarget(event.target)
      }, 2000)
    } else {
      verifyPhoneNumber()
    }
  }

  const verifyPhoneNumber = () => {
    windowVar.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    )
    firebase
      .auth()
      .signInWithPhoneNumber("+91" + phoneNumber, windowVar.recaptchaVerifier)
      .then(confirmationResult => {
        windowVar.confirmationAuthResult = confirmationResult
        handleShow()
      })
      .catch(error => {
        // Error; SMS not sent
        console.log(error)
        setSmShow(true)
        // ...
      })
  }

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
          setTimeout(() => {
            setLoginStatus(true)
          }, 2000)
        })
        .catch(err => {
          setDataSendingStatus(false)
          setSuccessStatus(false)
          if (err.response != undefined)
            setSuccessMsg(err.response.data.data[0].msg)
          else setSuccessMsg("Something went wrong")
        })
    }
  }

  const handelOtp = event => {
    const form = event.currentTarget
    console.log("hi")
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setValidatedOtpMessage("Please enter valid otp")
      setValidatedOtp(true)
    } else {
      event.preventDefault()
      event.stopPropagation()
      let target = event.target
      windowVar.confirmationAuthResult
        .confirm(target.otp.value)
        .then(result => {
          // User signed in successfully.

          handleClose()
          setPhoneVerified(true)
          setValidatedOtp(false)
          // ...
        })
        .catch(error => {
          // User couldn't sign in (bad verification code?)
          // ...
          setValidatedOtpMessage("OTP Not Matched")
          setPhoneVerified(false)
          setValidatedOtp(true)
        })
    }
  }

  const errorOtp = () => (
    <Modal
      size="sm"
      show={smShow}
      onHide={() => setSmShow(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">OTP Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Something wrong with otp provider. Please retry again.
      </Modal.Body>
    </Modal>
  )

  const modalOtp = () => (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Form noValidate validated={validatedOtp} onSubmit={handelOtp}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Enter Otp</Form.Label>

            <Form.Control required type="text" id="otp" placeholder="OTP" />
            <Form.Control.Feedback type="invalid">
              {validationOtpMessage}
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Verify
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )

  return (
    <>
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
          <Row>
            <Col md={9}>
              <Form.Control
                required
                type="tel"
                isValid={isPhoneVerified}
                id="phone"
                value={phoneNumber}
                onChange={val => {
                  setPhoneVerified(false)
                  setPhoneNumber(val.target.value)
                }}
                pattern="[0-9]{10}"
                placeholder="Enter phone number"
              />
              <Form.Control.Feedback type="invalid">
                Please verify this number
              </Form.Control.Feedback>
            </Col>
            <Col md={3}>
              <div className="w-100" ref={ref}>
                <Button
                  onClick={handleClick}
                  disabled={isPhoneVerified}
                  className="w-100"
                >
                  Verify
                </Button>

                <Overlay
                  show={showNumber}
                  target={target}
                  placement="bottom"
                  container={ref.current}
                  containerPadding={20}
                >
                  <Popover id="popover-contained">
                    <Popover.Title as="h3">Number Invalid</Popover.Title>
                    <Popover.Content>
                      Please enter valid phone number
                    </Popover.Content>
                  </Popover>
                </Overlay>
              </div>
            </Col>
          </Row>

          {isPhoneVerified ? <></> : <div id="recaptcha-container"></div>}
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
        {!isPhoneVerified ? (
          <p
            style={{
              fontSize: "12px",
            }}
          >
            *VERIFY THE PHONE NUMBER
          </p>
        ) : (
          <></>
        )}
        <Button
          disabled={isDataSending}
          disabled={!isPhoneVerified}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      {modalOtp()}
      {errorOtp()}
    </>
  )
}

export default RegPage
