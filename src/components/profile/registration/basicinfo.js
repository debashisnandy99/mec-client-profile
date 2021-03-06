import React, { useState } from "react"
import { Container, Form, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"

const BasicInfoComp = ({ user }) => {
  const [isLogin, setLoginStatus] = useState(false)

  
  return (
    <Container>
      <div className="card-body">
        <Form.Group as={Row}>
          <label className="col-xl-3 col-lg-3 col-form-label">First Name</label>
          <div className="col-lg-9 col-xl-6">
            <Form.Control
              required
              type="text"
              id="fname"
              defaultValue={user.fname}
              className="form-control-solid"
              placeholder="Enter First Name"
              size="lg"
            />
          </div>
        </Form.Group>

        <Form.Group as={Row}>
          <label className="col-xl-3 col-lg-3 col-form-label">Last Name</label>
          <div className="col-lg-9 col-xl-6">
            <Form.Control
              required
              type="text"
              id="lname"
              defaultValue={user.lname}
              className="form-control-solid"
              placeholder="Enter last name"
              size="lg"
            />
          </div>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <label className="col-xl-3 col-lg-3 col-form-label">Gender</label>
          <div className="col-lg-9 col-xl-6">
            <select
              className="form-control form-select form-control-solid form-control-lg form-cu-padding"
              id="gender"
              defaultValue={user.gender}
              aria-label="Male"
            >
              <option value="0">Male</option>
              <option value="1">Female</option>
              <option value="2">Others</option>
            </select>
          </div>
        </Form.Group>

        <Form.Group as={Row}>
          <label className="col-xl-3 col-lg-3 col-form-label">
            Date Of Birth
          </label>
          <div className="col-lg-9 col-xl-6">
            <Form.Control
              required
              className="form-control-solid"
              id="dob"
              defaultValue={user.dob}
              type="date"
              placeholder="Enter DOB"
              size="lg"
            />
          </div>
          <Form.Control.Feedback type="invalid">
            Please select dob.
          </Form.Control.Feedback>
        </Form.Group>
        <div className="row pt-3">
          <label className="col-xl-3"></label>
          <div className="col-lg-9 col-xl-6">
            <h5 className="font-weight-bold mt-10 mb-6">Contact Info</h5>
          </div>
        </div>
        <Form.Group as={Row}>
          <label className="col-xl-3 col-lg-3 col-form-label">
            Contact Phone
          </label>
          <div className="col-lg-6 col-xl-6">
            <div className="input-group input-group-lg input-group-solid">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
              </div>
              <Form.Control
                required
                type="tel"
                id="phone"
                defaultValue={user.phone}
                className="form-control-solid"
                pattern="[0-9]{10}"
                size="lg"
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group as={Row}>
          <label className="col-xl-3 col-lg-3 col-form-label">
            Email Address
          </label>
          <div className="col-lg-6 col-xl-6">
            <div className="input-group input-group-lg input-group-solid">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faAt} />
                </span>
              </div>
              <Form.Control
                type="email"
                id="email"
                defaultValue={user.email}
                className="form-control-solid"
                placeholder="Enter Your e-mail"
                size="lg"
              />
            </div>
          </div>
        </Form.Group>
      </div>
    </Container>
  )
}

export default BasicInfoComp
