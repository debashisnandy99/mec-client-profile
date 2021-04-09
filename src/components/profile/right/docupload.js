import React, { useState, useEffect } from "react"
import { Card, Container, Form, Alert, Row, ProgressBar } from "react-bootstrap"
import axios from "../../../services/api"
import { getUser } from "../../../services/logauth"

const DocUploadPage = () => {
  const [validated, setValidated] = useState(false)
  const [isSuccess, setSuccessStatus] = useState(true)
  const [successMsg, setSuccessMsg] = useState("")
  const [isDataSending, setDataSendingStatus] = useState(false)
  const [docSelected, setDocSelected] = useState("0")
  const [oneTime, setTime] = useState(true)
  const deps = ["adhaar", "pan", "birth"]
  let count = 0
  const [docs, setDocs] = useState([])
  let aarayOfop
  useEffect(() => {
    if (oneTime) {
      setTime(false)
      getDocs()
    }
  })
  const getDocs = () => {
    setDataSendingStatus(true)
    axios
      .get("/auth/getDocs", {
        headers: {
          Authorization: `Bearer ${getUser().token}`,
        },
      })
      .then(val => {
        setDocs(val.data.docs)
        setSuccessMsg("Uploaded Successfully")
        setDataSendingStatus(false)
        setSuccessStatus(true)
      })
      .catch(error => {
        setSuccessMsg("")
        setDataSendingStatus(false)
        setSuccessStatus(false)
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
      let form_data = new FormData()
      setDataSendingStatus(true)
      form_data.append("docid", target.docid.value)
      form_data.append("dep", deps[docSelected])
      form_data.append("image", target.doc.files[0])
      axios
        .put("/auth/fileUpload", form_data, {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${getUser().token}`,
          },
        })
        .then(val => {
          getDocs()
          setSuccessStatus(true)
          setDataSendingStatus(false)
          event.target.reset()
        })
        .catch(err => {
          setDataSendingStatus(false)
        })
    }
  }

  const fetchOptions = () => {
    for (let val = 0; val < docs.length; val++) {
      if (docs[val].depId.name == "adhaar") {
        var indexOfEle = deps.indexOf(docs[val].depId.name)
        if (indexOfEle > -1) {
          deps.splice(indexOfEle, 1)
        }
      } else if (docs[val].depId.name == "pan") {
        var indexOfEle = deps.indexOf(docs[val].depId.name)
        if (indexOfEle > -1) {
          deps.splice(indexOfEle, 1)
        }
      } else if (docs[val].depId.name == "birth") {
        var indexOfEle = deps.indexOf(docs[val].depId.name)
        if (indexOfEle > -1) {
          deps.splice(indexOfEle, 1)
        }
      }
    }
    return deps
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {!isSuccess ? (
        <Alert variant="danger">Something Went Wrong</Alert>
      ) : successMsg.length ? (
        <></>
      ) : (
        <Alert variant="success">{successMsg}</Alert>
      )}
      <Card>
        {!isDataSending ? <></> : <ProgressBar animated now={100} />}

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
                    value={docSelected}
                    onChange={val => setDocSelected(val.target.value)}
                    id="docname"
                    aria-label="Adhaar Card"
                  >
                    {docs.length > 0 ? (
                      fetchOptions().map(val => {
                        let a
                        if (val == "adhaar") {
                          a = (
                            <option key={count} value={count}>
                              Adhaar Card
                            </option>
                          )
                          count++
                        } else if (val == "pan") {
                          a = (
                            <option key={count} value={count}>
                              Pan Card
                            </option>
                          )
                          count++
                        } else if (val == "birth") {
                          a = (
                            <option key={count} value={count}>
                              Birth Certificate
                            </option>
                          )
                          count++
                        }
                        return a
                      })
                    ) : (
                      <>
                        {" "}
                        <option value="0">Adhaar Card</option>
                        <option value="1">Pan Card</option>
                        <option value="2">Birth Certificate</option>
                      </>
                    )}
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
                    required
                    className="form-control-solid"
                    placeholder="Enter Document Id"
                    size="lg"
                  />
                </div>
              </Form.Group>
              <button type="submit" className="btn btn-sm btn-info mr-2">
                Submit
              </button>
              <button type="button" className="btn btn-sm btn-secondary">
                Reset
              </button>
            </div>
          </Container>
        </Card.Body>
      </Card>
    </Form>
  )
}

export default DocUploadPage
