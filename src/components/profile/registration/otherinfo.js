import React, { useState } from "react"
import { Container, Form, Row } from "react-bootstrap"

const OtherInfoComp = () => {
  const [isLogin, setLoginStatus] = useState(false)

  return (
    <Container>
      <div className="card-body">
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
              <option value="2">Other</option>
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
              <option value="2">Other</option>
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
      </div>
    </Container>
  )
}

export default OtherInfoComp
