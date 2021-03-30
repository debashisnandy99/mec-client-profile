import React, { useState } from "react"
import { Card, Container, Form, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import * as RightCss from "../right.module.scss"

import FillUpComp from "./fillupcomp"

const IndexPage = () => (
  <>
    <Card>
      <div
        className={`${RightCss.customCrdFooter} card-header d-flex justify-content-between align-items-center`}
      >
        <h5>Personal Information</h5>
        <div>
          <button type="button" className="btn btn-sm btn-info mr-2">
            Submit &amp; Next
          </button>
          <button type="button" className="btn btn-sm btn-light">
            Cancel
          </button>
        </div>
      </div>
      <Card.Body>
        <FillUpComp />
      </Card.Body>
    </Card>
  </>
)

export default IndexPage
