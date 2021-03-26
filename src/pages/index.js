import React, { useState } from "react"

import AuthPage from "../components/userauth/index"
import ProfilePage from "../components/profile/index"

const IndexPage = () => {
  const [isLogin, setLoginStatus] = useState(false)

  return !isLogin ? <AuthPage setLoginStatus={(val) => setLoginStatus(val)} /> : <ProfilePage />
}

export default IndexPage
