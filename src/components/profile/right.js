import * as React from "react"
import { Card, Container, Form, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import ProfilePage from "./right/profile"
import DocUploadPage from "./right/docupload"
import ContactPage from "./right/contact"

const RightPage = ({ currentNav }) => <ContactPage/>
  // currentNav === 0 ? <ProfilePage /> : <DocUploadPage />

export default RightPage
