import React, { useState } from "react"
import { Container, Navbar, Row, Col, Button } from "react-bootstrap"
import LeftPage from "./left.js"
import RightPage from "./right"
import Registration from "./registration/index"
import * as ProfileCss from "./index.module.scss"

const ProfileIndexPage = () => {
  const [navOptions, setNavOptions] = useState(0)
  const [isFinished, setIsFinish] = useState(true)
  // console.log(navOptions)
  return (
    <div className={`${ProfileCss.backgroundDiv} full-container`}>
      <Navbar className={`${ProfileCss.navBg} py-3`} expand="lg">
        <Navbar.Text>MEC ID: Unavailable</Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button
            onClick={() => {
              setIsFinish(!isFinished)
            }}
            className="mr-3"
            size="sm"
          >
            {isFinished ? "Complete Profile" : "Back To Profile"}
          </Button>
          <Navbar.Text>
            Hi, <span className={ProfileCss.boldText}>Mark Otto</span>{" "}
            <span className={ProfileCss.nameBox}>M</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Container className="mt-4">
        {!isFinished ? (
          <Registration
            setIsFinish={isFinish => {
              setIsFinish(isFinish)
            }}
          />
        ) : (
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
        )}
      </Container>
      <footer
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
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
