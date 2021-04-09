import React, { useState, useEffect } from "react"
import { Card, Container, ProgressBar, Col, Row } from "react-bootstrap"
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
            <Col md={6}>
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
                        }}
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
    </Container>
  )
}

export default DisplayDocsPage
