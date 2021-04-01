import * as React from "react"
import { Card } from "react-bootstrap"
import UserImg from "../../assets/user.svg"
import DocImg from "../../assets/docs.svg"
import * as LeftCss from "./left.module.scss"

const LeftPage = ({ changeNavListener, currentNav }) => (
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
      {["Contact Information", "Documents"].map(
        (value, idx) => (
          <div
            key={idx}
            onClick={() => changeNavListener(idx)}
            className={`${LeftCss.selectionItem} ${
              currentNav === idx ? LeftCss.active : ""
            } d-flex flex-row align-items-center navpointer`}
          >
            {idx === 0 ? (
              <UserImg className="mr-2 svg-hover" />
            ) : (
              <DocImg className="mr-2 svg-hover" />
            )}
            {console.log(currentNav)}
            <span className={`${LeftCss.genderFont} align-middle`}>
              {value}
            </span>
          </div>
        ),
        this
      )}
    </Card.Body>
  </Card>
)

export default LeftPage
