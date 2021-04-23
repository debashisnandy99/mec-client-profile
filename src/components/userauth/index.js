import React, { useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "./layout"
import LoginPage from "./login"
import RegPage from "./reg"

import * as IndexCss from "./index.module.scss"

const AuthPage = ({ setLoginStatus }) => {
  const [isLogin, setPageStatus] = useState(true)

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={12}>
            {isLogin ? (
              <LoginPage setLoginStatus={val => setLoginStatus(val)} />
            ) : (
              <RegPage setLoginStatus={val => setPageStatus(val)}/>
            )}
          </Col>
        </Row>
        <Row className="mt-3 mb-5">
          <Col>
            {isLogin ? (
              <h6>
                Don't have MEC ID?{" "}
                <button
                  className={IndexCss.linkTag}
                  onMouseDown={() => setPageStatus(false)}
                >
                  Register
                </button>
              </h6>
            ) : (
              <h6>
                Already have MEC ID?{" "}
                <button
                  className={IndexCss.linkTag}
                  onMouseDown={() => setPageStatus(true)}
                >
                  Login
                </button>
              </h6>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AuthPage
