import React, { useState } from "react"
import PropTypes from "prop-types"

import BasicInfo from "./basicinfo"
import OtherInfo from "./otherinfo"
import AddressInfo from "./addressinfo"
import UploadFiles from "./uploadfiles"

const FillUpComp = ({ formNumber }) => {
  switch (formNumber) {
    case 0:
      return <BasicInfo />
    case 1:
      return <AddressInfo />
    case 2:
      return <OtherInfo />
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
