import React, { useState, useRef } from "react"
import { Container, Form, Row, Col } from "react-bootstrap"

const OtherInfoComp = () => {
  const [file, setFile] = useState(null)
  const [sfile, setSfile] = useState(null)
  const photoUpload = useRef(null)
  const signUpload = useRef(null)

  const filePhotoUpload = e => {
    setFile(e.target.files[0])
  }

  const fileSignUpload = e => {
    setSfile(e.target.files[0])
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="d-flex justify-content-center">
            <img
              className="imgUp"
              src={
                file ? URL.createObjectURL(file) : `../../../userprofile.svg`
              }
              alt={file ? file.name : "userAvater"}
            ></img>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <div
              onClick={() => {
                photoUpload.current.click()
              }}
              className="file btn btn-secondary"
            >
              {file ? "Change" : "Upload"} Photo
              <Form.Control
                onChange={filePhotoUpload}
                name="Upload Photo"
                className="hide-input"
                ref={photoUpload}
                required
                type="file"
                id="images"
              />
            </div>
          </div>
        </Col>

        <Col md={6} className="border-left">
          <div className="d-flex justify-content-center">
            <img
              className="p-2 imgUp"
              src={sfile ? URL.createObjectURL(sfile) : `../../../contract.svg`}
              alt={sfile ? sfile.name : "sign"}
            ></img>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <div
              onClick={() => signUpload.current.click()}
              className="file btn btn-secondary"
            >
              {sfile ? "Change" : "Upload"} Signature
              <Form.Control
                onChange={fileSignUpload}
                ref={signUpload}
                className="hide-input"
                required
                type="file"
                id="signature"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default OtherInfoComp
