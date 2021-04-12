import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { navigate, Link } from "gatsby"
import { isLoggedIn, logout, getUser } from "../services/logauth"
import axios from "../services/api"
import AuthPage from "../components/userauth/index"
import ProfilePage from "../components/profile/index"
import { Spinner } from "react-bootstrap"

import { toggleFetchUser } from "../state/app"

const IndexPage = () => {
  const [isLoading, setLoadingStatus] = useState(true)
  const [isError, setErrorStatus] = useState(false)
  const [oneTime, setTime] = useState(true)
  const [user, setUser] = useState()
  useEffect(() => {
    if (isLoggedIn()) {
      if (oneTime) {
        getUserV()
      }
    }
    console.log("Effect")
    setLoadingStatus(false)
    setTime(false)
  })
  const getUserV = async () => {
    console.log("hello start")
    setLoadingStatus(true)
    try {
      let authUser = await axios.get("/auth/userDetails", {
        headers: {
          Authorization: `Bearer ${getUser().token}`,
        },
      })
      setUser(
        authUser.data.user
      )
      setLoadingStatus(false)
      setErrorStatus(false)
    } catch (error) {
      console.log("hello")
      if (error.response) {
        logout()
      }
      setLoadingStatus(false)
      setErrorStatus(true)
    }
  }
  

  const view = () => {
    return isLoading ? (
      <Spinner
        style={{
          top: "50%",
          left: "50%",
          position: "absolute",
        }}
        animation="grow"
      />
    ) : isError ? (
      <p
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          position: "absolute",
        }}
      >
        Something went wrong
      </p>
    ) : !isLoggedIn() ? (
      <AuthPage setLoginStatus={val => setUser(val)} />
    ) : !user ? (
      <Spinner
        style={{
          top: "50%",
          left: "50%",
          position: "absolute",
        }}
        animation="grow"
      />
    ) : (
      <ProfilePage refreshPage={() => getUserV()} user={user} />
    )
  }

 
  return view()
}

export default IndexPage
