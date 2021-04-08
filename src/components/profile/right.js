import * as React from "react"
import { Card, Container, Form, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"

import OthersPage from "./right/others"
import ProfileDetails from "./right/profiledetails"
import DisplayDocs from "./right/displaydocs"
import DocUploadPage from "./right/docupload"
import ContactPage from "./right/contact"

const RightPage = ({ currentNav, user }) => {
    if(currentNav === 0) {
        return (<ContactPage user={user}/>);
    } else if(currentNav === 1) {
        return (<ProfileDetails user={user}/>);
    } else if(currentNav === 2) {
        return (<OthersPage user={user}/>);
    } else if(currentNav === 3) {
        return (<DisplayDocs/>);
    } else if(currentNav === 4) {
        return (<DocUploadPage/>);
    }
}

export default RightPage
