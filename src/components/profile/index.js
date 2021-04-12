import React, { useState } from "react"
import { Container, Navbar, Row, Col, Button } from "react-bootstrap"
import LeftPage from "./left.js"
import RightPage from "./right"
import Registration from "./registration/index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { logout } from "../../services/logauth"
import * as ProfileCss from "./index.module.scss"

const ProfileIndexPage = ({ user, refreshPage }) => {
  const [navOptions, setNavOptions] = useState(0)
  const [isFinished, setIsFinish] = useState(true)
  const loadUser = () => {}
  // console.log(navOptions)
  return (
    <div className={`${ProfileCss.backgroundDiv} full-container`}>
      <Navbar className={`${ProfileCss.navBg} py-3`} expand="lg">
        <Navbar.Text>MEC ID: Unavailable</Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user.isVerified ? (
            <></>
          ) : (
            <Button
              onClick={() => {
                setIsFinish(!isFinished)
              }}
              className="mr-3"
              size="sm"
            >
              {isFinished ? "Complete Profile" : "Back To Profile"}
            </Button>
          )}
          <Navbar.Text>
            Hi, <span className={ProfileCss.boldText}>{user.name}</span>{" "}
            <span className={ProfileCss.nameBox}>
              {user.name.substring(0, 1)}
            </span>
            <FontAwesomeIcon onClick={() => logout()} className={ProfileCss.logout} icon={faSignOutAlt} />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Container className="mt-4">
        {!isFinished ? (
          <Registration
            user={user}
            setIsFinish={isFinish => {
              setIsFinish(isFinish)
              refreshPage()
            }}
          />
        ) : (
          <Row>
            <Col md={3}>
              <LeftPage
                user={user}
                currentNav={navOptions}
                changeNavListener={idx => setNavOptions(idx)}
              />
            </Col>
            <Col md={9}>
              <RightPage user={user} currentNav={navOptions} />
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
