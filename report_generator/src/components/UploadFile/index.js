import React from "react"
import Dropzone from 'react-dropzone'
import './style.css';
import HelperServices from "../../services"
import { Dropdown, Row, Form, Col, Button } from 'react-bootstrap'


class UploadFile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            testEngineerNameList: ["Select a name", "Zahid Raza", "Ankit Kumar", "Kaushal", "Mohit", "Jatin Dalal"],
            selectedEngineerName: "Select a name",
            file: null,
            fileName: ""
        }
    }
    onFileUpload = (files) => {
        if (files.length !== 0) {
            let file = files[0]
            let fileName = file.name
            this.setState({
                file,
                fileName
            })
        }
    }

    submitReport = () => {
        let { selectedEngineerName, file } = this.state
        console.log(file)
        if (selectedEngineerName == "Select a name") {
            alert("select a engineer name")
        }
        else {
            if (file) {
                HelperServices.uploadFile(this.state.selectedEngineerName, file, this.state.fileName)
            }
            else {
                alert("select a Report File")
            }
        }

    }

    onNameChnage = (name) => {
        this.setState({
            selectedEngineerName: name
        })
    }

    render() {
        return (
            <div>
                <div className="enginer-name-div text-align-left">
                    <span className="display-block pr-2">Select Tese Engineer Name</span>
                    <Dropdown className="display-block pl-4">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {this.state.selectedEngineerName}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                this.state.testEngineerNameList.map(name =>
                                    <Dropdown.Item onClick={() => this.onNameChnage(name)}>{name}</Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Dropzone onDrop={this.onFileUpload} accept={[".docx"]} >
                    {({ getRootProps, getInputProps }) => (
                        <div className="container-fluid p-3">
                            <section className="card-border">
                                <div {...getRootProps()} className="drop-div" >
                                    <div className="move-to-tenter" >
                                        <div className="container-fluid">
                                            <div className="row pt-3" >
                                                <div className="col-12 ">
                                                    <input {...getInputProps()} />
                                                    <img style={{ height: "150px" }} src={require('../../assets/images/cloud-upload.svg')} alt="cloud-icon" />
                                                </div>
                                            </div>
                                            <div className="row pt-2" >
                                                <div className="col-12">
                                                    <span className="new-template source-sans-pro" style={{ fontWeight: "500", fontSize: "x-large" }}>Drag File here or</span>

                                                </div>
                                            </div>
                                            <div className="row pt-2" >
                                                <div className="col-12">
                                                    <button type="button" className="btn source-sans-pro button-text-class browse-image-btn" onChange={this.onFileUpload}>Browse for file</button>

                                                </div>
                                            </div>
                                            <div className="row pt-4" >
                                                <div className="col-12">
                                                    <span className="source-sans-pro" style={{ fontSize: "13px", marginTop: "10px" }}>Drop your file here</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                </Dropzone>
                <Form>
                    <Form.Group controlId="reportFileName">
                        <Row>
                            <Form.Label className="text-align-left" column sm={2}>Report File Name</Form.Label>
                            <Col sm={4}>
                                <Form.Control placeholder="File Name" value={this.state.fileName} />
                            </Col>
                        </Row>
                        <Row className="pt-4" style={{ display: "block" }}>
                            <div style={{ float: "right" }}>
                                <Button onClick={this.submitReport}>Submit Report</Button>
                            </div>
                        </Row>

                    </Form.Group>
                </Form>

            </div>
        )
    }
}

export default UploadFile;