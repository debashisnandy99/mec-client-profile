import * as React from "react"
import { Card, Container, Form, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import * as RightCss from "../right.module.scss"

const ContactPage = () => (
  <Container>
    <Row>
      <Col md={6}>
        <Card
          style={{
            minHeight: "100%",
          }}
        >
          <Card.Header>Permanent Address</Card.Header>
          <Card.Body>
            <Row className="mt-2">
              <div className="col-xl-4 col-lg-4 h6">Address</div>
              <div
                className={`col-lg-8 text-muted col-xl-8 ${RightCss.textSizeSmall}`}
              >
                5T Mathur Babu Lane, (Near Loknath Baba)
              </div>
            </Row>
            <Row className="mt-2">
              <div className={`col-xl-4 col-lg-4 h6`}>State</div>
              <div
                className={`col-lg-8 text-muted col-xl-8 ${RightCss.textSizeSmall}`}
              >
                West Bengal
              </div>
            </Row>
            <Row className="mt-2">
              <div className={`col-xl-4 col-lg-4 h6`}>District</div>
              <div
                className={`col-lg-8 text-muted col-xl-8 ${RightCss.textSizeSmall}`}
              >
                Kolkata
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card
          style={{
            minHeight: "100%",
          }}
        >
          <Card.Header>Present Address</Card.Header>
          <Card.Body>
            <Row className="mt-2">
              <div className="col-xl-4 col-lg-4 h6">Address</div>
              <div
                className={`col-lg-8 text-muted col-xl-8 ${RightCss.textSizeSmall}`}
              >
                5T Mathur Babu Lane, (Near Loknath Baba)
              </div>
            </Row>
            <Row className="mt-2">
              <div className={`col-xl-4 col-lg-4 h6`}>State</div>
              <div
                className={`col-lg-8 text-muted col-xl-8 ${RightCss.textSizeSmall}`}
              >
                West Bengal
              </div>
            </Row>
            <Row className="mt-2">
              <div className={`col-xl-4 col-lg-4 h6`}>District</div>
              <div
                className={`col-lg-8 text-muted col-xl-8 ${RightCss.textSizeSmall}`}
              >
                Kolkata
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="mt-2">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Container>
              <Row>
                <Col>
                  <div className="my-2">
                    <span className={`${RightCss.phoneIconImg} mr-2`}>
                      <FontAwesomeIcon
                        icon={faPhone}
                        className={RightCss.phoneIcon}
                      />
                    </span>
                    <span className={`${RightCss.fontContact} text-muted`}>
                      +91 8583858959
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Container>
              <Row>
                <Col>
                  <div className="my-2">
                    <span className={`${RightCss.mailIconImg} mr-2`}>
                      <FontAwesomeIcon
                        icon={faAt}
                        className={RightCss.mailIcon}
                      />
                    </span>
                    <span className={`${RightCss.fontContact} text-muted`}>
                      papai983g@gmail.com
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
)

export default ContactPage
