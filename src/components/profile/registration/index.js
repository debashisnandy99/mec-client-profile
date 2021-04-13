import React, { useState, useEffect } from "react"
import { Card, ProgressBar, Form } from "react-bootstrap"
import * as RightCss from "../right.module.scss"
import {
  firstFromSubmit,
  secondFromSubmit,
  thirdFormSubmit,
  forthFormSubmit,
} from "./utils/utils"

import FillUpComp from "./fillupcomp"

const IndexPage = ({ setIsFinish, user }) => {
  const [formNumber, setFormNumber] = useState(0)
  const [isSuccess, setSuccessStatus] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")
  const [isValidFmec, validateFmec] = useState()
  const [isValidMmec, validateMmec] = useState()
  const [isDataSending, setDataSendingStatus] = useState(false)
  const [validated, setValidated] = useState(false)
  const [firstForm, setFirstForm] = useState({
    fname: user.name.split(" ")[0],
    lname: user.name.split(" ")[1],
    gender: user.gender,
    dob: !user.dob ? "" : user.dob,
    phone: user.phone,
    email: !user.email ? "" : user.email,
  })

  const [secondForm, setSecondForm] = useState({
    address: !user.address ? "" : user.address,
    district: !user.district ? "" : user.district,
    state: !user.state ? "" : user.state,
    isAddressSame: user.isAddressSame,
    paddress: !user.paddress ? "" : user.paddress,
    pdistrict: !user.pdistrict ? "" : user.pdistrict,
    pstate: !user.pstate ? "" : user.pstate,
  })
  const [thirdForm, setThirdForm] = useState({
    fname: !user.fathersName ? "" : user.fathersName,
    mname: !user.mothersName ? "" : user.mothersName,
    fstatus: !user.fathersStatus ? "0" : user.fathersStatus,
    mstatus: !user.mothersStatus ? "0" : user.mothersStatus,
    fmecID: !user.fathersMecId ? "" : user.fathersMecId,
    mmecID: !user.mothersMecId ? "" : user.mothersMecId,
    dob: firstForm.dob,
  })
  const [isOneTime, setOneTime] = useState(true)
  useEffect(() => {
    if (isOneTime) {
      validateFmec(false)
      validateMmec(false)
      setOneTime(false)
    }
  })
  if (isValidFmec) {
    console.log("Hello father")
  }
  const handleSubmit = event => {
    const form = event.currentTarget

    setDataSendingStatus(true)

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setDataSendingStatus(false)

      setValidated(true)
    } else {
      event.preventDefault()
      event.stopPropagation()
      let target = event.target
      if (formNumber == 0) {
        firstFromSubmit({
          name: target.fname.value + " " + target.lname.value,
          gender: target.gender.value,
          phone: target.phone.value,
          dob: target.dob.value,
          email: target.email.value,
        }).then(val => {
          if (val) {
            setFirstForm({
              fname: target.fname.value,
              lname: target.lname.value,
              gender: target.gender.value,
              phone: target.phone.value,
              dob: target.dob.value,
              email: target.email.value,
            })
            if (formNumber != 3) {
              setFormNumber(formNumber + 1)
            } else {
              setIsFinish(true)
            }
            setValidated(false)
          }

          setDataSendingStatus(false)
        })
      } else if (formNumber == 1) {
        let isCheck = target.isAddressSame.checked
        console.log(isCheck)
        secondFromSubmit({
          address: target.address.value,
          district: target.district.value,
          state: target.state.value,
          isAddressSame: isCheck.toString(),
          paddress: isCheck ? target.paddress.value : "",
          pstate: isCheck ? target.pstate.value : "",
          pdistrict: isCheck ? target.pdistrict.value : "",
        }).then(val => {
          if (val) {
            setSecondForm({
              address: target.address.value,
              district: target.district.value,
              state: target.state.value,
              isAddressSame: isCheck,
              paddress: isCheck ? target.paddress.value : "",
              pstate: isCheck ? target.pstate.value : "",
              pdistrict: isCheck ? target.pdistrict.value : "",
            })
            if (formNumber != 3) {
              setFormNumber(formNumber + 1)
            } else {
              setIsFinish(true)
            }
            setValidated(false)
          }

          setDataSendingStatus(false)
        })
      } else if (formNumber == 2) {
        if (target.mstatus.value != 0 && target.fstatus.value != 0) {
          thirdFormSu(target)
        } else if (isValidFmec && isValidMmec) {
          console.log(isValidFmec + "Hello")
          thirdFormSu(target)
        } else {
          setValidated(true)
          setDataSendingStatus(false)
        }
      } else if (formNumber == 3) {
        let form_data = new FormData()
        form_data.append("photo", target.images.files[0])
        form_data.append("signature", target.signature.files[0])
        forthFormSubmit(form_data).then(val => {
          if (val) {
            setIsFinish(true)
            setValidated(false)
          }

          setDataSendingStatus(false)
        })
      }
    }
  }

  const thirdFormSu = target => {
    thirdFormSubmit({
      mname: target.mname.value,
      fname: target.faname.value,
      fmecID: !target.fmecID ? "" : target.fmecID.value,
      mmecID: !target.mmecID ? "" : target.mmecID.value,
      mstatus: target.mstatus.value,
      fstatus: target.fstatus.value,
    }).then(val => {
      if (val) {
        setThirdForm({
          mname: target.mname.value,
          fname: target.faname.value,
          fmecID: !target.fmecID ? "" : target.fmecID.value,
          mmecID: !target.mmecID ? "" : target.mmecID.value,
          mstatus: target.mstatus.value,
          fstatus: target.fstatus.value,
          dob: firstForm.dob,
        })
        if (formNumber != 3) {
          setFormNumber(formNumber + 1)
        } else {
          setIsFinish(true)
        }
        setValidated(false)
      }

      setDataSendingStatus(false)
    })
  }
  return (
    <Form
      noValidate
      validated={formNumber == 2 ? false : validated}
      onSubmit={handleSubmit}
    >
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
              type="submit"
              disabled={isDataSending}
              className="btn btn-sm btn-info mr-2"
            >
              {formNumber == 3 ? `Finish` : `Submit & Next`}
            </button>
            <button type="button" className="btn btn-sm btn-light">
              Reset
            </button>
          </div>
        </div>

        {!isDataSending ? <></> : <ProgressBar animated now={100} />}

        <Card.Body>
          <FillUpComp
            thirdForm={thirdForm}
            secondForm={secondForm}
            firstForm={firstForm}
            formNumber={formNumber}
            validateFmec={val => {
              console.log("Hello FFF")
              validateFmec(val)
            }}
            validateMmec={val => validateMmec(val)}
          />
        </Card.Body>
      </Card>
    </Form>
  )
}

export default IndexPage
