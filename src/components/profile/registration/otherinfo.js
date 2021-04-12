import { faPrescriptionBottleAlt } from "@fortawesome/free-solid-svg-icons"
import React, { useState, useEffect } from "react"
import { Container, Form, Row, Button } from "react-bootstrap"

const OtherInfoComp = ({ user }) => {
  const [fstat, setFstat] = useState(user.mstatus)
  const [mstat, setMstat] = useState(user.fstatus)
  const [oneTime, setTime] = useState(true)
  const dob = user.dob.split("-")[0]
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
              id="fstatus"
              defaultValue={fstat}
              onChange={val => setFstat(val.target.value)}
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
              required
              defaultValue={user.fname}
              className="form-control-solid"
              placeholder="Enter father name"
              size="lg"
            />
          </div>
        </Form.Group>

        <Form.Group as={Row}>
          <label className="col-lg-3 col-form-label">
            Father MEC ID
          </label>
          <div className="col-lg-5">
            <Form.Control
              type="text"
              id="fmecID"
              required={fstat == 0 && dob > 1987}
              defaultValue={user.fmecID}
              className="form-control-solid"
              placeholder="Enter father mec id"
              size="lg"
            />
          </div>
          <div className="col-lg-2">
            <Button type="sm">Verify</Button>
          </div>
        </Form.Group>

        <Form.Group as={Row}>
          <label className="col-xl-3 col-lg-3 col-form-label">
            Mother Name
          </label>
          <div className="col-lg-2 col-xl-2">
            <select
              className="form-control form-select form-control-solid form-control-lg form-cu-padding"
              id="mstatus"
              defaultValue={mstat}
              onChange={val => setMstat(val.target.value)}
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
              required
              defaultValue={user.mname}
              className="form-control-solid"
              placeholder="Enter Mother name"
              size="lg"
            />
          </div>
        </Form.Group>

        <Form.Group as={Row}>
          <label className="col-xl-3 col-form-label">Mother MEC ID</label>
          <div className="col-lg-5">
            <Form.Control
              type="text"
              id="mmecID"
              required={mstat == 0 && dob > 1987}
              defaultValue={user.mmecID}
              className="form-control-solid"
              placeholder="Enter mother mec id"
              size="lg"
            />
          </div>
          <div className="col-lg-2">
            <Button>Verify</Button>
          </div>
        </Form.Group>
      </div>
    </Container>
  )
}

export default OtherInfoComp
