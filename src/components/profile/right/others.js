import * as React from "react"
import { Card, Container, Form, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import * as RightCss from "../right.module.scss"

const OthersPage = ({user}) => (
  <Container>
    <Row>
      <Col md={6}>
        <Card
          style={{
            minHeight: "100%",
          }}
        >
          <Card.Header>Parent Details</Card.Header>
          <Card.Body>
            <Row className="mt-2">
              <div className="col-xl-6 col-lg-6 h6">Father Name</div>
              <div
                className={`col-lg-6 text-muted col-xl-6 ${RightCss.textSizeSmall}`}
              >
                {
                  !user.fathersName? "N/A" : user.fathersName
                }
              </div>
            </Row>
            <Row className="mt-2">
              <div className={`col-xl-6 col-lg-6 h6`}>Father MECID</div>
              <div
                className={`col-lg-6 text-muted col-xl-6 ${RightCss.textSizeSmall}`}
              >
                {
                  !user.fathersMecId? "N/A" : user.fathersMecId
                }
              </div>
            </Row>
            <Row className="mt-2">
              <div className={`col-xl-6 col-lg-6 h6`}>Mother Name</div>
              <div
                className={`col-lg-6 text-muted col-xl-6 ${RightCss.textSizeSmall}`}
              >
                {
                  !user.mothersName? "N/A" : user.mothersName
                }
              </div>
            </Row>

            <Row className="mt-2">
              <div className={`col-xl-6 col-lg-6 h6`}>Mother MECID</div>
              <div
                className={`col-lg-6 text-muted col-xl-6 ${RightCss.textSizeSmall}`}
              >
                {
                  !user.mothersMecId? "N/A" : user.mothersMecId
                }
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card
          
        >
          <Card.Header>Personal Details</Card.Header>
          <Card.Body>
            <Row className="mt-2">
              <div className="col-xl-4 col-lg-4 h6">Gender</div>
              <div
                className={`col-lg-8 text-muted col-xl-8 ${RightCss.textSizeSmall}`}
              >
                {
                  !user.gender? "N/A" : user.gender
                }
              </div>
            </Row>
            <Row className="mt-2">
              <div className={`col-xl-4 col-lg-4 h6`}>DOB</div>
              <div
                className={`col-lg-8 text-muted col-xl-8 ${RightCss.textSizeSmall}`}
              >
                {
                  !user.dob? "N/A" : user.dob
                }
              </div>
            </Row>
            
          </Card.Body>
        </Card>
      </Col>
    </Row>
   </Container>
)

export default OthersPage
