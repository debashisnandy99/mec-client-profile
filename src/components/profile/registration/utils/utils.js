import axios from "../../../../services/api"
import { getUser } from "../../../../services/logauth"

export const firstFromSubmit = async formData => {
  try {
    await axios.put(
      "/auth/firstForm",
      {
        name: formData.name,
        gender: formData.gender,
        phone: formData.phone,
        email: formData.email,
        dob: formData.dob,
      },
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${getUser().token}`,
        },
      }
    )
    return true
  } catch (error) {
    return false
  }
}

export const secondFromSubmit = async formData => {
  let userAddress
  if (formData.isAddressSame) {
    userAddress = {
      address: formData.address,
      state: formData.state,
      district: formData.district,
      isAddressSame: formData.isAddressSame,
    }
  } else {
    userAddress = {
      address: formData.address,
      state: formData.state,
      district: formData.district,
      isAddressSame: formData.isAddressSame,
      paddress: formData.paddress,
      pstate: formData.pstate,
      pdistrict: formData.pdistrict,
    }
  }
  try {
    await axios.put("/auth/secondForm", userAddress, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getUser().token}`,
      },
    })
    return true
  } catch (error) {
    return false
  }
}

export const thirdFormSubmit = async formData => {
  try {
    axios.put(
      "/auth/thirdForm",
      {
        mname: formData.mname,
        fname: formData.fname,
        fmecID: formData.fmecID,
        mmecID: formData.mmecID,
        fstatus: formData.fstatus,
        mstatus: formData.mstatus,
      },
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${getUser().token}`,
        },
      }
    )
    return true
  } catch (error) {
    return false
  }
}

export const forthFormSubmit = async formData => {
  try {
    await axios.put("/auth/forthForm", formData, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${getUser().token}`,
      },
    })
    return true
  } catch (error) {
    return false
  }
}

export const validateMecId = mecId => {
  axios
    .put(
      "/auth/checkmec",
      {
        mec: mecId,
      },
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${getUser().token}`,
        },
      }
    )
    .then(res => {
      return true
    })
    .catch(err => {
      return false
    })
}
