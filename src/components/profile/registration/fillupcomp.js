import React, { useState } from "react"
import PropTypes from "prop-types"

import BasicInfo from "./basicinfo"
import OtherInfo from "./otherinfo"
import AddressInfo from "./addressinfo"
import UploadFiles from "./uploadfiles"

const FillUpComp = ({thirdForm, secondForm, formNumber, firstForm }) => {
  switch (formNumber) {
    case 0:
      return <BasicInfo user={firstForm}/>
    case 1:
      return <AddressInfo user={secondForm} />
    case 2:
      return <OtherInfo user={thirdForm}/>
    case 3:
      return <UploadFiles />
    default:
      return <UploadFiles />
  }
}
FillUpComp.propTypes = {
  formNumber: PropTypes.node.isRequired,
}

export default FillUpComp
