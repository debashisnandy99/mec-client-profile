import React, { useState } from "react"
import { Container, Navbar, Row, Col } from "react-bootstrap"
import LeftPage from "./left"
import RightPage from "./right"
import * as ProfileCss from "./index.module.scss"

const ProfileIndexPage = () => {
  const [navOptions, setNavOptions] = useState(0)
  console.log(navOptions)
  return (
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
            <LeftPage
              currentNav={navOptions}
              changeNavListener={idx => setNavOptions(idx)}
            />
          </Col>
          <Col md={9}>
            <RightPage currentNav={navOptions} />
          </Col>
        </Row>
      </Container>
      <footer
        style={{
          position: navOptions === 0 ? "relative" : "fixed",
        }}
      >
        <Container>
          <Row className="py-4">
            <Col>2020 &copy; Ankur Biswas</Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default ProfileIndexPage
