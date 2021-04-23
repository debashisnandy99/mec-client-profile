import * as React from "react"
import { Card, Container, Form, Col, Row, Modal, Button } from "react-bootstrap"
import * as FileSaver from "file-saver"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import * as RightCss from "../right.module.scss"
import { url, ipfsUrl } from "../../../services/details"
import ipfsaxios from "../../../services/ipfsapi"
import axios from "../../../services/api"
import { getUser } from "../../../services/logauth"

const ProfileDetailsPage = ({ user }) => {
  const [modalShow, setModalShow] = React.useState({ show: false, url: "" })
  const [ipfs, setIpfs] = React.useState()
  const [imageList, setImageList] = React.useState()
  const [oneTime, setTime] = React.useState(true)

  React.useEffect(() => {
    if (oneTime) {
      if (user.mecId) {
        setTime(false)
        axios
          .get("/auth/getValidateDetails", {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${getUser().token}`,
            },
          })
          .then(res => {
            setIpfs(res.data.ipfsHash)
            console.log(res.data)
            return ipfsaxios.post("/api/v0/ls?arg=" + res.data.ipfsHash)
          })
          .then(res => {
            let imageList = {}
            console.log(res)
            res.data.Objects[0].Links.forEach(value => {
              const imageName = value.Name.toString()
              if (imageName.includes("profile")) {
                imageList["profile"] = imageName
              } else if (imageName.includes("signature")) {
                imageList["signature"] = imageName
              }
            })
            setImageList(imageList)
          })
          .catch(e => {
            console.log(e)
          })
      }
    }
  })

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card
            style={{
              minHeight: "100%",
            }}
          >
            <Card.Header>Profile Image</Card.Header>
            <Card.Body>
              <Row className="mt-2">
                <div className="offset-lg-3 col-lg-6">
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    src={
                      imageList
                        ? `${ipfsUrl()}/ipfs/${ipfs}/${imageList["profile"]}`
                        : user.photo
                        ? url() + "/" + user.photo
                        : imgUrl
                    }
                    onClick={() => {
                      if (user.photo) {
                        setModalShow({
                          show: true,
                          url: imageList
                            ? `${ipfsUrl()}/ipfs/${ipfs}/${
                                imageList["profile"]
                              }`
                            : url() + "/" + user.photo,
                        })
                      }
                    }}
                    alt="profile"
                  ></img>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card
            style={{
              minHeight: "100%",
            }}
          >
            <Card.Header>Signature</Card.Header>
            <Card.Body>
              <Row className="mt-2">
                <div className="offset-lg-3 col-lg-6">
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    src={
                      imageList
                        ? `${ipfsUrl()}/ipfs/${ipfs}/${imageList["signature"]}`
                        : user.signature
                        ? url() + "/" + user.signature
                        : imgUrl
                    }
                    onClick={() => {
                      if (user.signature) {
                        setModalShow({
                          show: true,
                          url: imageList
                            ? `${ipfsUrl()}/ipfs/${ipfs}/${
                                imageList["signature"]
                              }`
                            : url() + "/" + user.signature,
                        })
                      }
                    }}
                    alt="signature"
                  ></img>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ModalForImageShow
        modalData={modalShow}
        onHide={() => setModalShow({ show: false, url: "" })}
      />
    </Container>
  )
}

const imgUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC"

function ModalForImageShow({ modalData, onHide }) {
  const downloadFile = () => {
    FileSaver.saveAs(modalData.url, "image.jpg")
    onHide()
  }
  return (
    <Modal
      show={modalData.show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Row className="d-flex justify-content-center">
          {" "}
          <img
            style={{
              height: "100%",
              width: "80%",
              borderRadius: "8px",
            }}
            src={modalData.url}
            alt="profile"
          ></img>
        </Row>
        <Row className="d-flex justify-content-center my-3">
          <Button size="sm" variant="success" onClick={downloadFile}>
            Download
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="ml-2"
            onClick={onHide}
          >
            Close
          </Button>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default ProfileDetailsPage
