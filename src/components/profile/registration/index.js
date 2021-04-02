import React, { useState } from "react"
import { Card, Container, Form, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import * as RightCss from "../right.module.scss"

import FillUpComp from "./fillupcomp"

const IndexPage = ({ setIsFinish }) => {
  const [formNumber, setFormNumber] = useState(0)

  return (
    <>
      <Card>
        <div
          className={`${RightCss.customCrdFooter} card-header d-flex justify-content-between align-items-center`}
        >
          <h5>Personal Information</h5>
          <div>
            {formNumber == 0 ? (
              <></>
            ) : (
              <button
                onClick={() => setFormNumber(formNumber - 1)}
                type="button"
                className="btn btn-sm btn-light mr-2"
              >
                Preious
              </button>
            )}

            <button
              onClick={() => {
                if (formNumber != 3) {
                  setFormNumber(formNumber + 1)
                } else {
                  setIsFinish(true)
                }
              }}
              type="button"
              className="btn btn-sm btn-info mr-2"
            >
              {formNumber == 3 ? `Finish` : `Submit & Next`}
            </button>
            <button type="button" className="btn btn-sm btn-light">
              Reset
            </button>
          </div>
        </div>
        <Card.Body>
          <FillUpComp formNumber={formNumber} />
        </Card.Body>
      </Card>
    </>
  )
}

export default IndexPage
