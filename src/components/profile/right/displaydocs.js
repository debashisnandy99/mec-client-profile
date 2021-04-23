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
import ipfsaxios from "../../../services/ipfsapi"
import { url, ipfsUrl } from "../../../services/details"
import { getUser } from "../../../services/logauth"

const DisplayDocsPage = ({ user }) => {
  const [isSuccess, setSuccessStatus] = useState(true)
  const [successMsg, setSuccessMsg] = useState("")
  const [isDataSending, setDataSendingStatus] = useState(false)
  const [oneTime, setTime] = useState(true)
  const [docs, setDocs] = useState([])
  const [ipfs, setIpfs] = React.useState()
  const [imageList, setImageList] = React.useState()
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

    if (user.mecId) {
      axios
        .get("/auth/getValidateDetails", {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${getUser().token}`,
          },
        })
        .then(res => {
          setIpfs(res.data.ipfsHash)
          console.log(res.data)
          return ipfsaxios.post("/api/v0/ls?arg=" + res.data.ipfsHash)
        })
        .then(res => {
          let imageList = {}
          console.log(res)
          res.data.Objects[0].Links.forEach(value => {
            const imageName = value.Name.toString()
            if (imageName.includes("adhaar")) {
              imageList["adhaar"] = imageName
            } else if (imageName.includes("pan")) {
              imageList["pan"] = imageName
            } else if (imageName.includes("birth")) {
              imageList["birth"] = imageName
            }
          })
          setImageList(imageList)
        })
        .catch(e => {
          console.log(e)
        })
    }
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
                        <span
                          className={`${
                            val.status == "verified"
                              ? LeftCss.dotV
                              : LeftCss.dot
                          } align-middle`}
                        ></span>
                        <span
                          className={`${LeftCss.genderFont} pl-2 text-muted align-middle`}
                        >
                          {val.status}
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
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          setModalShow({
                            show: true,
                            url: imageList
                              ? `${ipfsUrl()}/ipfs/${ipfs}/${
                                  imageList[val.depId.name]
                                }`
                              : url() + "/" + val.file,
                          })
                        }
                        src={
                          imageList
                            ? `${ipfsUrl()}/ipfs/${ipfs}/${
                                imageList[val.depId.name]
                              }`
                            : url() + "/" + val.file
                        }
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
    FileSaver.saveAs(modalData.url, "image.jpg")
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
      <Modal.Body>
        <Row className="d-flex justify-content-center">
          {" "}
          <img
            style={{
              height: "100%",
              width: "80%",
              borderRadius: "8px",
            }}
            src={modalData.url}
            alt="profile"
          ></img>
        </Row>
        <Row className="d-flex justify-content-center my-3">
          <Button size="sm" variant="success" onClick={downloadFile}>
            Download
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="ml-2"
            onClick={onHide}
          >
            Close
          </Button>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default DisplayDocsPage
