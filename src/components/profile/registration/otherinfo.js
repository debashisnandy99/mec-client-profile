import { faPrescriptionBottleAlt } from "@fortawesome/free-solid-svg-icons"
import React, { useState, useEffect } from "react"
import axios from "../../../services/api"
import { Container, Form, Row, Button, Spinner } from "react-bootstrap"

const OtherInfoComp = ({ user, validateFMainmec, validateMMainmec }) => {
  
  const [fstat, setFstat] = useState(user.mstatus)
  const [mstat, setMstat] = useState(user.fstatus)
  const [isValidFmec, validateFmec] = useState(false)
  const [isValidMmec, validateMmec] = useState(false)
  const [fatherMecId, setFatherMecId] = useState(user.fmecID ? user.fmecID : "")
  const [motherMecId, setMotherMecId] = useState(user.mmecID ? user.mmecID : "")
  const [motherMecMsg, setMotherMecMsg] = useState("Enter valid mec ID")
  const [fatherMecMsg, setFatherMecMsg] = useState("Enter valid mec ID")
  const [mecMsg, setMecMsg] = useState("Please Verify This MED ID")
  const [mecMMsg, setMMecMsg] = useState("Please Verify This MED ID")
  const [isDataSendingM, setDataSendingMStatus] = useState(false)
  const [isDataSendingF, setDataSendingFStatus] = useState(false)
  const dob = user.dob.split("-")[0]

  const verifyMecId = (typeOfMec = "f") => {
    if (typeOfMec == "m") {
      if (motherMecId.length === 0) {
        validateMmec(true)
        setMotherMecMsg("Please enter valid mec ID")
      } else {
        setDataSendingMStatus(true)
        checkMecIdValid(motherMecId).then(val => {
          if (val.status === "0") {
            validateMmec(true)
            validateMMainmec(false)
            setMotherMecMsg("MEC Id not valid")
          } else if (val.status === "-1") {
            setMotherMecMsg("Server Error")
            validateMmec(true)
            validateMMainmec(false)
            console.log(val.status)
          } else if (val.status === "1") {
            validateMmec(false)
            validateMMainmec(true)
          }
          setDataSendingMStatus(false)
        })
      }

      setMMecMsg("")
    } else if (typeOfMec == "f") {
      if (fatherMecId.length === 0) {
        validateFmec(true)
        setFatherMecMsg("Please enter valid mec ID")
      } else {
        setDataSendingFStatus(true)
        checkMecIdValid(fatherMecId).then(val => {
          if (val.status === "0") {
            validateFmec(true)
            validateFMainmec(false)
            setFatherMecMsg("MEC Id not valid")
          } else if (val.status === "-1") {
            setFatherMecMsg("Server Error")
            validateFmec(true)
            validateFMainmec(false)
            console.log(val.status)
          } else if (val.status === "1") {
            validateFmec(false)
            validateFMainmec(true)
          }
          setDataSendingFStatus(false)
        })
      }
      setMecMsg("")
    }
  }
  return (
    <Container>
      <div className="card-body">
        <Form.Group as={Row}>
          <label className="col-xl-3 col-lg-3 col-form-label">
            Father Name
          </label>
          <div className="col-lg-2 col-xl-2">
            <select
              className="form-control form-select form-control-solid form-control-lg form-cu-padding"
              id="fstatus"
              defaultValue={user.fstatus}
              onChange={val => setFstat(val.target.value)}
              aria-label="Mr."
            >
              <option value="0">Mr.</option>
              <option value="1">Late</option>
              <option value="2">Other</option>
            </select>
          </div>
          <div className="col-lg-6 col-xl-4">
            <Form.Control
              type="text"
              id="faname"
              required
              defaultValue={user.fname}
              className="form-control-solid"
              placeholder="Enter father name"
              size="lg"
            />
          </div>
        </Form.Group>

        <Form.Group as={Row}>
          <label className="col-lg-3 col-form-label">Father MEC ID</label>
          <div className="col-lg-5">
            <Form.Control
              type="text"
              id="fmecID"
              value={fatherMecId}
              onChange={val => {
                if (val.target.value.length == 0 && fstat != 0) {
                  validateFMainmec(true)
                } else if (val.target.value.length == 1 && fstat != 0) {
                  validateFMainmec(false)
                }

                if (fstat == 0) {
                  setFatherMecMsg("Please Verify The MECID")
                  validateFmec(true)
                }
                setFatherMecId(val.target.value)
              }}
              className="form-control-solid"
              placeholder="Enter father mec id"
              size="lg"
            />
            {isValidFmec ? (
              <p className="text-danger mt-2 pb-0 mb-0">{fatherMecMsg}</p>
            ) : (
              <p
                className="mb-0 pb-0 mt-2 text-secondary"
                style={{
                  fontSize: "13px",
                }}
              >
                {mecMsg}
              </p>
            )}
          </div>
          <div className="col-lg-2">
            {isDataSendingF ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              <Button
                onClick={() => verifyMecId("f")}
                disabled={isDataSendingM}
              >
                Verify
              </Button>
            )}
          </div>
        </Form.Group>

        <Form.Group as={Row}>
          <label className="col-xl-3 col-lg-3 col-form-label">
            Mother Name
          </label>
          <div className="col-lg-2 col-xl-2">
            <select
              className="form-control form-select form-control-solid form-control-lg form-cu-padding"
              id="mstatus"
              defaultValue={user.mstatus}
              onChange={val => setMstat(val.target.value)}
              aria-label="Mr."
            >
              <option value="0">Mrs.</option>
              <option value="1">Late</option>
              <option value="2">Other</option>
            </select>
          </div>
          <div className="col-lg-6 col-xl-4">
            <Form.Control
              type="text"
              id="mname"
              required
              defaultValue={user.mname}
              className="form-control-solid"
              placeholder="Enter Mother name"
              size="lg"
            />
          </div>
        </Form.Group>

        <Form.Group as={Row}>
          <label className="col-xl-3 col-form-label">Mother MEC ID</label>
          <div className="col-lg-5">
            <Form.Control
              type="text"
              id="mmecID"
              value={motherMecId}
              onChange={val => {
                if (val.target.value.length == 0 && mstat != 0) {
                  validateMMainmec(true)
                } else if (val.target.value.length == 0 && mstat != 0) {
                  validateMMainmec(false)
                }

                if (mstat == 0) {
                  setMotherMecMsg("Please Verify The MECID")
                  validateMmec(true)
                }
                setMotherMecId(val.target.value)
              }}
              className="form-control-solid"
              placeholder="Enter mother mec id"
              size="lg"
            />
            {isValidMmec ? (
              <p className="text-danger mt-2 pb-0 mb-0">{motherMecMsg}</p>
            ) : (
              <p
                className="mb-0 mt-2 pb-0 text-secondary"
                style={{
                  fontSize: "13px",
                }}
              >
                {mecMMsg}
              </p>
            )}
          </div>
          <div className="col-lg-2">
            {isDataSendingM ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              <Button
                disabled={isDataSendingF}
                onClick={() => verifyMecId("m")}
              >
                Verify
              </Button>
            )}
          </div>
        </Form.Group>
      </div>
    </Container>
  )
}

const checkMecIdValid = async mecId => {
  try {
    await axios.post(
      "/auth/checkmec",
      {
        mec: mecId,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
    return { status: "1" }
  } catch (error) {
    if (error.response) {
      return { status: "0" }
    }
    return { status: "-1" }
  }
}

export default OtherInfoComp
