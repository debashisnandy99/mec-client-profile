import * as React from "react"
import { Card, Container, Form, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import * as RightCss from "../right.module.scss"
import * as LeftCss from "../left.module.scss"

const DisplayDocsPage = () => (
  <Container>
    <Row>
      <Col md={6}>
        <Card
          style={{
            minHeight: "100%",
          }}
        >
          <Card.Header>Adhaar</Card.Header>
          <Card.Body>
            <Row className="mt-2">
              <div className="col-xl-6 col-lg-6">
                <h6>Adhaar Id</h6>
                <p className="text-muted">1587 2546 2548</p>
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
                  src="https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?cs=srgb&dl=pexels-pixabay-210742.jpg&fm=jpg"
                  alt="profile"
                ></img>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Header>PAN</Card.Header>
          <Card.Body>
            <Row className="mt-2">
              <div className="col-xl-6 col-lg-6">
                <h6>PAN No.</h6>
                <p className="text-muted">BGYNM4589M</p>
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
                  src="https://images.pexels.com/photos/4466116/pexels-photo-4466116.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4466116.jpg&fm=jpg"
                  alt="profile"
                ></img>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col md={6}>
        <Card
          style={{
            minHeight: "100%",
          }}
        >
          <Card.Header>Birth Certificate</Card.Header>
          <Card.Body>
            <Row className="mt-2">
              <div className="col-xl-6 col-lg-6">
                <h6>Reg No.</h6>
                <p className="text-muted">45878256</p>
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
                  src="https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?cs=srgb&dl=pexels-ekrulila-2292837.jpg&fm=jpg"
                  alt="profile"
                ></img>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
)

export default DisplayDocsPage
