import * as React from "react"
import { Card, Container, Form, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import * as RightCss from "../right.module.scss"

const ProfilePage = () => (
  <>
    <Card>
      <div
        className={`${RightCss.customCrdFooter} card-header d-flex justify-content-between align-items-center`}
      >
        <h5>Personal Information</h5>
        <div>
          <button type="button" className="btn btn-sm btn-info mr-2">
            Submit
          </button>
          <button type="button" className="btn btn-sm btn-light">
            Cancel
          </button>
        </div>
      </div>
      <Card.Body>
        <Container>
          <div className="card-body">
            <div className="row">
              <label className="col-xl-3"></label>
              <div className="col-lg-9 col-xl-6">
                <h5 className="font-weight-bold mb-6">Customer Info</h5>
              </div>
            </div>
            <Form.Group as={Row}>
              <label className="col-xl-3 col-lg-3 col-form-label">
                Signature
              </label>
              <div className="col-lg-9 col-xl-6">
                <Form.Control
                  className="form-control-solid"
                  required
                  size="lg"
                  type="file"
                  id="sig"
                />
              </div>
            </Form.Group>
            <Form.Group as={Row}>
              <label className="col-xl-3 col-lg-3 col-form-label">
                Profile Photo
              </label>
              <div className="col-lg-9 col-xl-6">
                <Form.Control
                  className="form-control-solid"
                  required
                  size="lg"
                  type="file"
                  id="image"
                />
              </div>
            </Form.Group>
            <Form.Group as={Row}>
              <label className="col-xl-3 col-lg-3 col-form-label">
                First Name
              </label>
              <div className="col-lg-9 col-xl-6">
                <Form.Control
                  type="text"
                  id="fname"
                  className="form-control-solid"
                  placeholder="Enter First Name"
                  size="lg"
                />
              </div>
            </Form.Group>

            <Form.Group as={Row}>
              <label className="col-xl-3 col-lg-3 col-form-label">
                Last Name
              </label>
              <div className="col-lg-9 col-xl-6">
                <Form.Control
                  type="text"
                  id="lname"
                  className="form-control-solid"
                  placeholder="Enter last name"
                  size="lg"
                />
              </div>
            </Form.Group>

            <Form.Group as={Row}>
              <label className="col-xl-3 col-lg-3 col-form-label">
                Date Of Birth
              </label>
              <div className="col-lg-9 col-xl-6">
                <Form.Control
                  className="form-control-solid"
                  id="dob"
                  type="date"
                  placeholder="Enter DOB"
                  size="lg"
                />
              </div>
              <Form.Control.Feedback type="invalid">
                Please select dob.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Row}>
              <label className="col-xl-3 col-lg-3 col-form-label">
                Father Name
              </label>
              <div className="col-lg-2 col-xl-2">
                <select
                  className="form-control form-select form-control-solid form-control-lg form-cu-padding"
                  value="0"
                  aria-label="Mr."
                >
                  <option value="0">Mr.</option>
                  <option value="1">Late</option>
                </select>
              </div>
              <div className="col-lg-6 col-xl-4">
                <Form.Control
                  type="text"
                  id="faname"
                  className="form-control-solid"
                  placeholder="Enter father name"
                  size="lg"
                />
              </div>
            </Form.Group>

            <Form.Group as={Row}>
              <label className="col-xl-3 col-lg-3 col-form-label">
                Father MEC ID
              </label>
              <div className="col-lg-6 col-xl-6">
                <Form.Control
                  type="text"
                  id="fmed"
                  className="form-control-solid"
                  placeholder="Enter father mec id"
                  size="lg"
                />
              </div>
            </Form.Group>

            <Form.Group as={Row}>
              <label className="col-xl-3 col-lg-3 col-form-label">
                Mother Name
              </label>
              <div className="col-lg-2 col-xl-2">
                <select
                  className="form-control form-select form-control-solid form-control-lg form-cu-padding"
                  value="0"
                  aria-label="Mr."
                >
                  <option value="0">Mrs.</option>
                  <option value="1">Late</option>
                </select>
              </div>
              <div className="col-lg-6 col-xl-4">
                <Form.Control
                  type="text"
                  id="mname"
                  className="form-control-solid"
                  placeholder="Enter Mother name"
                  size="lg"
                />
              </div>
            </Form.Group>

            <Form.Group as={Row}>
              <label className="col-xl-3 col-lg-3 col-form-label">
                Mother MEC ID
              </label>
              <div className="col-lg-6 col-xl-6">
                <Form.Control
                  type="text"
                  id="mmed"
                  className="form-control-solid"
                  placeholder="Enter mother mec id"
                  size="lg"
                />
              </div>
            </Form.Group>

            <Form.Group as={Row}>
              <label className="col-xl-3 col-lg-3 col-form-label">
                Address
              </label>
              <div className="col-lg-6 col-xl-6">
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="address"
                  className="form-control-solid"
                  placeholder="Enter Address"
                  size="lg"
                />
              </div>
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
                    type="tel"
                    id="phone"
                    className="form-control-solid"
                    placeholder="+91 8578 956 325"
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
                    className="form-control-solid"
                    placeholder="Enter Your e-mail"
                    size="lg"
                  />
                </div>
              </div>
            </Form.Group>
          </div>
        </Container>
      </Card.Body>
    </Card>
  </>
)

export default ProfilePage
