import * as React from "react"
import { Card, Container, Form, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import * as RightCss from "../right.module.scss"

const DocUploadPage = () => (
  <>
    <Card>
      <Card.Body>
        <Container>
          <div className="card-body">
            <div className="row mb-3">
              <label className="col-xl-3"></label>
              <div className="col-lg-9 col-xl-6">
                <h5 className="font-weight-bold mb-6">Upload Docs</h5>
              </div>
            </div>

            <Form.Group as={Row}>
              <label className="col-xl-3 col-lg-3 col-form-label">
                Select Document
              </label>
              <div className="col-lg-9 col-xl-6">
                <select
                  className="form-control form-select form-control-solid form-control-lg"
                  value="0"
                  aria-label="Adhaar Card"
                >
                  <option value="0">Adhaar Card</option>
                  <option value="1">Pan Card</option>
                  <option value="2">Birth Certificate</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group as={Row}>
              <label className="col-xl-3 col-lg-3 col-form-label">
                Upload Doc Copy
              </label>
              <div className="col-lg-9 col-xl-6">
                <Form.Control
                  className="form-control-solid"
                  required
                  size="lg"
                  type="file"
                  id="doc"
                />
              </div>
            </Form.Group>
            <Form.Group as={Row}>
              <label className="col-xl-3 col-lg-3 col-form-label">
                Document ID
              </label>
              <div className="col-lg-9 col-xl-6">
                <Form.Control
                  type="text"
                  id="docid"
                  className="form-control-solid"
                  placeholder="Enter Document Id"
                  size="lg"
                />
              </div>
            </Form.Group>
            <button type="button" className="btn btn-sm btn-info mr-2">
              Submit
            </button>
            <button type="button" className="btn btn-sm btn-secondary">
              Reset
            </button>
          </div>
        </Container>
      </Card.Body>
    </Card>
  </>
)

export default DocUploadPage
