import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useDispatch, useSelector } from "react-redux"
import { isLoggedIn, logout, getUser } from "../services/logauth"
import axios from "../services/api"
import AuthPage from "../components/userauth/index"
import ProfilePage from "../components/profile/index"
import { Spinner } from "react-bootstrap"

import { toggleFetchUser } from "../state/app"

const IndexPage = () => {
  const [loginStatus, setLoginStatus] = useState(false)
  const [isLoading, setLoadingStatus] = useState(false)
  const [isError, setErrorStatus] = useState(false)
  const [oneTime, setTime] = useState(true)
  const [user, setUser] = useState()
  useEffect(() => {
    if (isLoggedIn()) {
      if (oneTime) {
        setTime(false)
        getUserV()
      }
    }
  })
  const getUserV = async () => {
    setLoadingStatus(true)
    try {
      setUser(
        await axios.get("/auth/userDetails", {
          headers: {
            Authorization: `Bearer ${getUser().token}`,
          },
        })
      )
      setLoadingStatus(false)
      setErrorStatus(false)
    } catch (error) {
      if (!error.response) {
        logout()
      }
      setLoadingStatus(false)
      setErrorStatus(true)
    }
  }

  if (loginStatus) {
    return !isLoggedIn() ? (
      <AuthPage setLoginStatus={val => setLoginStatus(val)} />
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
      <ProfilePage refreshPage={() => getUserV()} user={user.data.user} />
    )
  }
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
    <AuthPage setLoginStatus={val => setLoginStatus(val)} />
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
    <ProfilePage refreshPage={() => getUserV()} user={user.data.user} />
  )
}

export default IndexPage
