import * as React from "react"
import { Container, Navbar, Row, Col } from "react-bootstrap"
import LeftPage from "./left"
import RightPage from "./right"
import * as ProfileCss from "./index.module.scss"

const ProfileIndexPage = () => (
  <div className={`${ProfileCss.backgroundDiv} full-container`}>
    <Navbar className={`${ProfileCss.navBg} py-3`} expand="lg">
      <Navbar.Text>MEC ID: Unavailable</Navbar.Text>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Hi, <span className={ProfileCss.boldText}>Mark Otto</span>{" "}
          <span className={ProfileCss.nameBox}>M</span>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    <Container className="mt-4">
      <Row>
        <Col md={3}>
          <LeftPage />
        </Col>
        <Col md={9}>
          <RightPage />
        </Col>
      </Row>
    </Container>
    <footer>
      <Container>
        <Row className="py-4">
          <Col>
            2020 &copy; Ankur Biswas
          </Col>
        </Row>

      </Container>
    </footer>
  </div>
)

export default ProfileIndexPage
