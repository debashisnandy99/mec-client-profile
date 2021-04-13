import React, { useState, useEffect } from "react"
import {
  Card,
  Container,
  ProgressBar,
  Col,
  Row,
  Modal,
  Button,
} from "react-bootstrap"
import * as FileSaver from "file-saver"
import * as RightCss from "../right.module.scss"
import * as LeftCss from "../left.module.scss"
import axios from "../../../services/api"
import { url } from "../../../services/details"
import { getUser } from "../../../services/logauth"

const DisplayDocsPage = ({ user }) => {
  const [isSuccess, setSuccessStatus] = useState(true)
  const [successMsg, setSuccessMsg] = useState("")
  const [isDataSending, setDataSendingStatus] = useState(false)
  const [oneTime, setTime] = useState(true)
  const [docs, setDocs] = useState([])
  const [modalShow, setModalShow] = React.useState({ show: false, url: "" })

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
        setDataSendingStatus(false)
        setSuccessStatus(true)
      })
      .catch(error => {
        setDataSendingStatus(false)
        setSuccessStatus(false)
      })
  }

  const cardName = name => {
    if (name == "adhaar") {
      return { name: "Adhaar Card", sub: "Adhaar Id" }
    } else if (name == "pan") {
      return { name: "Pan Card", sub: "Pan No" }
    } else if (name == "birth") {
      return { name: "Birth Certificate", sub: "Reg No" }
    }
  }

  return isDataSending ? (
    <div>
      <ProgressBar animated now={100} />
      <p
        style={{
          textAlign: "center",
        }}
      >
        Data Fetching
      </p>
    </div>
  ) : !isSuccess ? (
    <p
      style={{
        textAlign: "center",
      }}
    >
      Something Went Wrong
    </p>
  ) : docs.length == 0 ? (
    <p
      style={{
        textAlign: "center",
      }}
    >
      Please upload documents first
    </p>
  ) : (
    <Container>
      <Row>
        {docs.map((val, idx) => {
          return (
            <Col key={idx} md={6} className={`${idx == 2 ? "mt-3" : ""}`}>
              <Card
                style={{
                  minHeight: "100%",
                }}
              >
                <Card.Header>{cardName(val.depId.name).name}</Card.Header>
                <Card.Body>
                  <Row className="mt-2">
                    <div className="col-xl-6 col-lg-6">
                      <h6>{cardName(val.depId.name).sub}</h6>
                      <p className="text-muted">{val.docId}</p>
                      <div className="mt-2">
                        <span className={`${LeftCss.dot} align-middle`}></span>
                        <span
                          className={`${LeftCss.genderFont} pl-2 text-muted align-middle`}
                        >
                          Not Verified
                        </span>
                      </div>
                    </div>
                    <div
                      className={`col-lg-6 text-muted col-xl-6 ${RightCss.textSizeSmall}`}
                    >
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                          cursor: "pointer"
                        }}
                        onClick={() =>
                          setModalShow({
                            show: true,
                            url: url() + "/" + val.file,
                          })
                        }
                        src={url() + "/" + val.file}
                        alt="profile"
                      ></img>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
      <ModalForImageShow
        modalData={modalShow}
        onHide={() => setModalShow({ show: false, url: "" })}
      />
    </Container>
  )
}

function ModalForImageShow({ modalData, onHide }) {
  const downloadFile = () => {
    FileSaver.saveAs(modalData.url, "image.jpg");
    onHide()
  }
  return (
    <Modal
      show={modalData.show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Body >
        <Row className="d-flex justify-content-center"> <img
          style={{
            height: "100%",
            width: "80%",
            borderRadius: "8px",
          }}
          src={modalData.url}
          alt="profile"
        ></img></Row>
        <Row className="d-flex justify-content-center"><Button size="sm" variant="success" onClick={downloadFile}>Download</Button> </Row>
        
      </Modal.Body>
     
    </Modal>
  )
}

export default DisplayDocsPage
