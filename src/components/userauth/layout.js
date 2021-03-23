import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types"
import * as login from "./login.module.scss"
import utils from "./utils/utils"
import CardImg from "../../assets/card.svg"

const Layout = ({ children }) => (
  <Container fluid className="pl-0">
    <Row className="full-container">
      <Col className="pr-0" md={4}>
        <div className={login.mainDiv}>
          <div className={login.overlay}>
            <img alt="login" src={utils.imgUrl} width="100" />
          </div>
        </div>
      </Col>
      <Col
        md={{ span: 6, offset: 1 }}
        className="d-flex align-items-center justify-content-center"
      >
        <Container className="px-5">
          <Row>
            <CardImg className={`${login.imgCard} mx-auto`} />
          </Row>
          <Row>
            <Col className="text-center mb-3">
              <h2>MEC PROFILE</h2>
            </Col>
          </Row>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
