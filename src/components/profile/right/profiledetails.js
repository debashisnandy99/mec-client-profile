import * as React from "react"
import { Card, Container, Form, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import * as RightCss from "../right.module.scss"

const ProfileDetailsPage = () => (
  <Container>
    <Row>
      <Col md={6}>
        <Card
          style={{
            minHeight: "100%",
          }}
        >
          <Card.Header>Profile Image</Card.Header>
          <Card.Body>
            <Row className="mt-2">
              <div className="offset-lg-3 col-lg-6">
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="profile"
                ></img>
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
          <Card.Header>Signature</Card.Header>
          <Card.Body>
            <Row className="mt-2">
              <div className="offset-lg-3 col-lg-6">
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  src="https://images.pexels.com/photos/221172/pexels-photo-221172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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

export default ProfileDetailsPage
