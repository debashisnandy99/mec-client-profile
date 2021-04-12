import axios from "./api"
import { navigate, Link } from "gatsby"

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("bearerlog")
    ? JSON.parse(window.localStorage.getItem("bearerlog"))
    : {}

const setUser = user =>
  window.localStorage.setItem("bearerlog", JSON.stringify(user))

export const handleLogin = async (phone, password) => {
 
  try {
    let data = await axios.post(
      "/auth/login",
      {
        phone: phone,
        password: password,
        os: navigator.platform
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
    console.log(data.data)
    setUser({
      token: data.data.token,
      uid: data.data.userId,
    })
    return data.data.user
  } catch (error) {
    
    return {}
  }
}



export const isLoggedIn = () => {
  const user = getUser()

  return !!user.uid
}

export const logout = () => {
  setUser({})
  navigate("/", {
    replace: true,
  })
}
