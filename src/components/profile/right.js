import * as React from "react"
import { Card, Container, Form, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import ProfilePage from "./right/profile"
import OthersPage from "./right/others"
import ProfileDetails from "./right/profiledetails"
import DisplayDocs from "./right/displaydocs"
import DocUploadPage from "./right/docupload"
import ContactPage from "./right/contact"

const RightPage = ({ currentNav }) => <DisplayDocs />
// currentNav === 0 ? <ProfilePage /> : <DocUploadPage />

export default RightPage
