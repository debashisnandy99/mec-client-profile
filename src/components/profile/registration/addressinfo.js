import React, { useState } from "react"
import { Container, Form, Row } from "react-bootstrap"

const AddressInfoComp = () => {
  const [isLogin, setLoginStatus] = useState(false)

  return (
    <Container>
      <div className="card-body">
        <Form.Group as={Row}>
          <label className="col-xl-3 col-lg-3 col-form-label">Permanent Address</label>
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
        <Form.Group as={Row}>
          <div className="offset-xl-3 offset-lg-3 col-lg-3 col-xl-3">
            <Form.Control
              type="text"
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
              className="form-control-solid p-5"
              style={{
                height: "20px",
                width: "20px",
              }}
              id="exampleCheck1"
            />
          </div>
        </Form.Group>
        <Form.Group as={Row}>
          <label className="col-xl-3 col-lg-3 col-form-label">Present Address</label>
          <div className="col-lg-6 col-xl-6">
            <Form.Control
              as="textarea"
              rows={3}
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
              type="text"
              rows={3}
              id="pstate"
              className="form-control-solid"
              placeholder="Enter State"
              size="lg"
            />
          </div>
          <div className="col-lg-3 col-xl-3">
            <Form.Control
              type="text"
              rows={3}
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
