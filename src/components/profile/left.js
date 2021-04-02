import React, { useState } from "react"
import { Card } from "react-bootstrap"
import UserImg from "../../assets/user.svg"
import DocImg from "../../assets/docs.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faFile,
  faUser,
  faVectorSquare,
  faFileUpload,
} from "@fortawesome/free-solid-svg-icons"
import * as LeftCss from "./left.module.scss"

const LeftPage = ({ changeNavListener, currentNav }) => {
  const [isDocSelected, setDocSelected] = useState(false)
  const [activeDocSubElement, setActiveDocSubElement] = useState(true)

  const renderIcon = idx => {
    if (idx == 0) {
      return (
        <FontAwesomeIcon
          icon={faPhone}
          className={`${LeftCss.iconColor} mr-2`}
        />
      )
    } else if (idx == 1) {
      return (
        <FontAwesomeIcon
          icon={faUser}
          className={`${LeftCss.iconColor} mr-2`}
        />
      )
    } else if (idx == 2) {
      return (
        <FontAwesomeIcon
          icon={faVectorSquare}
          className={`${LeftCss.iconColor} mr-2`}
        />
      )
    } else if (idx == 3) {
      return (
        <FontAwesomeIcon
          icon={faFile}
          className={`${LeftCss.iconColor} mr-2`}
        />
      )
    }
  }

  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center">
          <div className="mr-3">
            <img
              className={LeftCss.profileAvater}
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="profile"
            ></img>
          </div>
          <div>
            <p className={`${LeftCss.profileFont} mb-0`}>Sean Stark</p>
            <p className={`${LeftCss.genderFont} mb-0 text-muted`}>MALE</p>
            <div className="mt-2">
              <span className={`${LeftCss.dot} align-middle`}></span>
              <span
                className={`${LeftCss.genderFont} pl-2 text-muted align-middle`}
              >
                Not Verified
              </span>
            </div>
          </div>
        </div>
        <div className="py-9">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className={`${LeftCss.genderFont} mr-2`}>Email:</span>
            <span className={`${LeftCss.genderFont} text-muted`}>
              admin@demo.com
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className={`${LeftCss.genderFont} mr-2`}>Phone:</span>
            <span className={`${LeftCss.genderFont} text-muted`}>
              +91 8565 152 852
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className={`${LeftCss.genderFont} mr-2`}>P.S:</span>
            <span className={`${LeftCss.genderFont} text-muted`}>Barasat</span>
          </div>
        </div>
        {[
          "Contact Information",
          "Profile Details",
          "Others Details",
          "Documents",
        ].map(
          (value, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (idx == 3) {
                  changeNavListener(activeDocSubElement ? 3 : 4)
                  setDocSelected(true)
                } else {
                  changeNavListener(idx)
                  setDocSelected(false)
                }
              }}
              className={`${LeftCss.selectionItem} ${
                currentNav === idx
                  ? LeftCss.active
                  : currentNav === 4 && idx === 3
                  ? LeftCss.active
                  : ""
              } d-flex flex-row align-items-center navpointer`}
            >
              {renderIcon(idx)}
              {console.log(currentNav)}
              <span className={`${LeftCss.genderFont} align-middle`}>
                {value}
              </span>
            </div>
          ),
          this
        )}
        {isDocSelected ? (
          <>
            {" "}
            <div
              style={{
                backgroundColor: "#eef0f8",
                marginTop: "1px",
              }}
              onClick={() => {
                changeNavListener(3)
                setActiveDocSubElement(!activeDocSubElement)
              }}
              className={`${LeftCss.subSelectionItem} d-flex flex-row align-items-center navpointer`}
            >
              <div
                className={`${LeftCss.subSelectionItem} ${
                  activeDocSubElement ? LeftCss.active : ""
                } d-flex flex-row align-items-center navpointer`}
              >
                <FontAwesomeIcon
                  icon={faFile}
                  className={`${LeftCss.iconColor} mr-2`}
                />
                <span className={`${LeftCss.genderFont} align-middle`}>
                  Document
                </span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#eef0f8",
              }}
              onClick={() => {
                changeNavListener(4)
                setActiveDocSubElement(!activeDocSubElement)
              }}
              className={`${LeftCss.subSelectionItem} d-flex flex-row align-items-center navpointer`}
            >
              <div
                className={`${LeftCss.subSelectionItem} ${
                  LeftCss.subSelectionItem
                } ${
                  !activeDocSubElement ? LeftCss.active : ""
                } d-flex flex-row align-items-center navpointer`}
              >
                <FontAwesomeIcon
                  icon={faFileUpload}
                  className={`${LeftCss.iconColor} mr-2`}
                />
                <span className={`${LeftCss.genderFont} align-middle`}>
                  Upload
                </span>
              </div>
            </div>
          </>
        ) : (
          <> </>
        )}
      </Card.Body>
    </Card>
  )
}

export default LeftPage
