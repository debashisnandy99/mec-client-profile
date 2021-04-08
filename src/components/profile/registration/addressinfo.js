import React, { useEffect, useState } from "react"
import { Container, Form, Row } from "react-bootstrap"

const AddressInfoComp = ({ user }) => {
  const [checked, setChecked] = useState()
  const [oneTime, setTime] = useState(true)
  useEffect(() => {
    if (oneTime) {
      setChecked(user.isAddressSame)
      setTime(false)
    }
  })
  return (
    <Container>
      <div className="card-body">
        <Form.Group as={Row}>
          <label className="col-xl-3 col-lg-3 col-form-label">
            Permanent Address
          </label>
          <div className="col-lg-6 col-xl-6">
            <Form.Control
              as="textarea"
              required
              defaultValue={user.address}
              rows={3}
              id="address"
              className="form-control-solid"
              placeholder="Enter Address"
              size="lg"
            />
          </div>
        </Form.Group>
        <Form.Group as={Row}>
          <div className="offset-xl-3 offset-lg-3 col-lg-3 col-xl-3">
            <Form.Control
              required
              type="text"
              defaultValue={user.state}
              rows={3}
              id="state"
              className="form-control-solid"
              placeholder="Enter State"
              size="lg"
            />
          </div>
          <div className="col-lg-3 col-xl-3">
            <Form.Control
              type="text"
              rows={3}
              defaultValue={user.district}
              required
              id="district"
              className="form-control-solid"
              placeholder="Enter District"
              size="lg"
            />
          </div>
        </Form.Group>
        <Form.Group as={Row}>
          <label className="col-xl-3 col-lg-3 col-form-label">
            Present Address Is The Same As Above
          </label>
          <div className="col-lg-2 col-xl-2 mt-auto mb-auto">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="form-control-solid p-5"
              style={{
                height: "20px",
                width: "20px",
              }}
              id="isAddressSame"
            />
          </div>
        </Form.Group>
        <Form.Group as={Row}>
          <label className="col-xl-3 col-lg-3 col-form-label">
            Present Address
          </label>
          <div className="col-lg-6 col-xl-6">
            <Form.Control
              required={!checked}
              disabled={checked}
              as="textarea"
              rows={3}
              defaultValue={user.paddress}
              id="paddress"
              className="form-control-solid"
              placeholder="Enter Address"
              size="lg"
            />
          </div>
        </Form.Group>
        <Form.Group as={Row}>
          <div className="offset-xl-3 offset-lg-3 col-lg-3 col-xl-3">
            <Form.Control
              required={!checked}
              type="text"
              disabled={checked}
              rows={3}
              defaultValue={user.pstate}
              id="pstate"
              className="form-control-solid"
              placeholder="Enter State"
              size="lg"
            />
          </div>
          <div className="col-lg-3 col-xl-3">
            <Form.Control
              required={!checked}
              disabled={checked}
              type="text"
              rows={3}
              defaultValue={user.pdistrict}
              id="pdistrict"
              className="form-control-solid"
              placeholder="Enter District"
              size="lg"
            />
          </div>
        </Form.Group>
      </div>
    </Container>
  )
}

export default AddressInfoComp
