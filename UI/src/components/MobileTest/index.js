import React from "react"
import { Button } from 'react-bootstrap';
import axios from 'axios';


class MobileTest extends React.Component {
  saveData = () => {
    let data = {}
    data["#@TESTREPORTNO@#"] = document.getElementById("Test Report No").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@MANUFACTURER@#"] = document.getElementById("Manufacturer").value
    data["#@MobilePhone@#"] = document.getElementById("TEST ITEM").value
    data["#@IDENTIFICATION@#"] = document.getElementById("IDENTIFICATION").value
    data["#@SERIALNO@#"] = document.getElementById("SERIAL NUMBER").value
    data["#@RECIPTN@#"] = document.getElementById("RECEIPT NUMBER").value
    data["#@TestingEngineer@#"] = document.getElementById("Testing Engineer").value
    data["#@HeadofDepartment@#"] = document.getElementById("hod").value
    data["#@BusinessDevelopmentHead@#"] = document.getElementById("Business Development Head").value
    data["#@testingenggdate@#"] = document.getElementById("testingenggdate").value
    data["#@hoddate@#"] = document.getElementById("hoddate").value
    data["#@bdhdate@#"] = document.getElementById("bdh date").value
    data["#@REPORTREFRENCENUMBER@#"] = document.getElementById("REPORT REFRENCE NUMBER").value
    data["#@ULRN@#"] = document.getElementById("ULRN").value
    data["#@DOISSUE@#"] = document.getElementById("DOISSUE").value
    data["#@topages@#"] = document.getElementById("topages").value
    data["#@ManufacturersName@#"] = document.getElementById("Manufacturer's Name").value
    data["#@Address@#"] = document.getElementById("Address").value
    data["#@testitemDescription@#"] = document.getElementById("test item Description").value
    data["#@trade mark@#"] = document.getElementById("trade mark").value
    data["#@ModeltypeREFRENCE@#"] = document.getElementById("Model type REFRENCE").value
    data["#@Ratings@#"] = document.getElementById("Ratings").value
    data["#@Otherdocumentssubmitted@#"] = document.getElementById("Other documents submitted").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
    data["#@ISSUEDATE@#"] = document.getElementById("Issue Date").value
axios({
      method: 'post',
      url: 'http://localhost:5000/test-report-generator/create-report',
      data:{form_data:JSON.stringify(data)} 
    }).then(response=>{
      console.log(response)
    });    console.log(data)
  }
  render() {
    return (
      <div>
        <div class="navbar navbar-dark bg-dark " style={{ height: "70px" }}>
          <h1 style={{ color: "#ffffff" }}>Atharva Laboratories</h1>
          <span class="navbar-text">
            <h3>MOBILE TEST</h3>
          </span>
        </div>





        <form >
          <div class="spacing">
            <table border='0' className="table table-borderless">
              <tr>
                <th>
                  <div >
                    <label>Test Report No.:</label>
                    <input class="form-control" id="Test Report No" type="text" />
                  </div>
                </th>
                <th>
                  <div>
                    <label>Issue Date:</label>
                    <input class="form-control" id="Issue Date" type="text" />
                  </div>
                </th>

                <th>
                  <div >
                    <label>Manufacturer: </label>
                    <input class="form-control" id="Manufacturer" type="text" />
                  </div>

                </th>
              </tr>
              <tr>
                <th>
                  <div >
                    <label>TEST ITEM:</label>
                    <input class="form-control" id="TEST ITEM" type="text" />
                  </div>
                </th>
                <th>
                  <div>
                    <label>IDENTIFICATION:</label>
                    <input class="form-control" id="IDENTIFICATION" type="text" />
                  </div>
                </th>
                <th>
                  <div>
                    <label>SERIAL NUMBER:</label>
                    <input class="form-control" id="SERIAL NUMBER" type="text" />
                  </div>
                </th>
              </tr>
              <tr>
                <th>
                  <div>
                    <label></label>

                  </div>
                </th><th>
                  <div>
                    <label>RECEIPT NUMBER:</label>
                    <input class="form-control" id="RECEIPT NUMBER" type="text" />
                  </div>
                </th>
                <th>
                  <div>

                  </div>
                </th>
              </tr>
            </table>


            <div>
              <table border="1" cellspacing="0" cellpadding="0" width="690" class="table">
                <thead class="table_color" >
                  <tr >
                    <td width="173">
                      <p align="center">
                        <strong>Tested by:</strong>
                      </p>
                    </td>
                    <td width="172">
                      <p align="center">
                        <strong>Approved by / Authorized Signatory:</strong>
                        <strong></strong>
                      </p>
                    </td>
                    <td width="145">
                      <p align="center">
                        <strong>Issued by:</strong>
                      </p>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="173">
                      <p align="center">
                        <strong></strong>
                      </p>
                      <p align="center">
                        <strong></strong>
                      </p>
                      <p align="center">
                        <strong></strong>
                      </p>
                      <p align="center">
                        <strong></strong>
                      </p>
                    </td>
                    <td width="172">
                      <p align="center">
                        <strong></strong>
                      </p>
                    </td>
                    <td width="145">
                      <p align="center">
                        <strong></strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width="173">
                      <p align="center">
                        Testing Engineer
                </p>
                      <p align="center">
                        <input class="form-control" id="Testing Engineer" type="text" />
                      </p>
                    </td>
                    <td width="172">
                      <p align="center">
                        (Head of Department)
                </p>
                      <p align="center">
                        <input class="form-control" id="hod" type="text" />
                      </p>
                    </td>
                    <td width="145">
                      <p>
                        Business Development Head
                </p>
                      <p>
                        <input class="form-control" id="Business Development Head" type="text" />
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width="173" valign="top">
                      <p align="center">
                        Dated:
                </p>
                      <p align="center">
                        <input class="form-control" id="testingenggdate" type="text" />
                      </p>
                    </td>
                    <td width="172" valign="top">
                      <p align="center">
                        Dated:
                </p>
                      <p align="center">
                        <input class="form-control" id="hoddate" type="text" />
                      </p>
                    </td>
                    <td width="145" valign="top">
                      <p align="center">
                        Dated:
                </p>
                      <p align="center">
                        <input class="form-control" id="bdh date" type="text" />
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p></p>
          </div>


          <p class="navbar navbar-dark bg-dark nav justify-content-center"  >
            <h3 style={{ color: "#ffffff" }} >
              <b >
                TEST REPORT
              </b>
            </h3>


          </p>

          <p></p>
          <div class="spacing">


            <table className="table table-borderless">
              <tr >
                <th>
                  <div>
                    <label>REPORT REFRENCE NUMBER:</label>
                    <input class="form-control" id="REPORT REFRENCE NUMBER" type="text" />
                  </div>
                </th>
                <th>
                  <div>
                    <label>ULR NO. :</label>
                    <input class="form-control" id="ULRN" type="text" />
                  </div>
                </th>
                <th>
                  <div>
                    <label>DATE OF ISSUE :</label>
                    <input class="form-control" id="DOISSUE" type="text" />
                  </div>
                </th>
              </tr>
              <tr>
                <th>
                  <div>
                    <label>TOTAL NUMBER OF Pages:</label>
                    <input class="form-control" id="topages" type="text" />
                  </div>
                </th>
                <th>
                  <div>
                    <label>Manufacturer's Name:</label>
                    <input class="form-control" id="Manufacturer's Name" type="text" />
                  </div>
                </th>
                <th>

                  <div>
                    <label>Address:</label>
                    <input class="form-control" id="Address" type="text" />
                  </div>

                </th>
              </tr>
              <tr>
                <th>

                  <div>
                    <label>test item Description:</label>
                    <input class="form-control" id="test item Description" type="text" />
                  </div>
                </th>
                <th>
                  <div>
                    <label>Trade mark:</label>
                    <input id="trade mark" type="text" />
                  </div>
                </th>
                <th>
                  <div>
                    <label>Model type Refrence:</label>
                    <input class="form-control" id="Model type REFRENCE" type="text" />
                  </div>

                </th>
              </tr>

              <tr>


                <th>

                  <div>
                    <label>Ratings</label>
                    <input class="form-control" id="Ratings" type="text" />
                  </div>
                </th>
                <th>

                  <div>
                    <label>Other documents submitted</label>
                    <input id="Other documents submitted" type="text" />
                  </div>
                </th>
                <th>
                  <div>
                  </div>
                </th>
              </tr>

            </table>


            <div>
              <table border="1" cellspacing="0" cellpadding="0" width="690" class="table">

                <thead class="table_color" >
                  <tr>
                    <td width="173">
                      <p align="center">
                        <strong>Tested by:</strong>
                      </p>
                    </td>
                    <td width="172">
                      <p align="center">
                        <strong>Approved by / Authorized Signatory:</strong>
                        <strong></strong>
                      </p>
                    </td>
                    <td width="145">
                      <p align="center">
                        <strong>Issued by:</strong>
                      </p>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="173">
                      <p align="center">
                        <strong></strong>
                      </p>
                      <p align="center">
                        <strong></strong>
                      </p>
                      <p align="center">
                        <strong></strong>
                      </p>
                      <p align="center">
                        <strong></strong>
                      </p>
                    </td>
                    <td width="172">
                      <p align="center">
                        <strong></strong>
                      </p>
                    </td>
                    <td width="145">
                      <p align="center">
                        <strong></strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width="173">
                      <p align="center">
                        Testing Engineer
                </p>
                      <p align="center">
                        <input class="form-control" id="Testing Engineer2" type="text" />
                      </p>
                    </td>
                    <td width="172">
                      <p align="center">
                        (Head of Department)
                </p>
                      <p align="center">
                        <input class="form-control" id="hod2" type="text" />
                      </p>
                    </td>
                    <td width="145">
                      <p>
                        Business Development Head
                </p>
                      <p>
                        <input class="form-control" id="Business Development Head2" type="text" />
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width="173" valign="top">
                      <p align="center">
                        Dated:
                </p>
                      <p align="center">
                        <input class="form-control" id="testingenggdate2" type="text" />
                      </p>
                    </td>
                    <td width="172" valign="top">
                      <p align="center">
                        Dated:
                </p>
                      <p align="center">
                        <input class="form-control" id="hoddate2" type="text" />
                      </p>
                    </td>
                    <td width="145" valign="top">
                      <p align="center">
                        Dated:
                </p>
                      <p align="center">
                        <input class="form-control" id="bdh date2" type="text" />
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


            <div>
              <table border="1" cellspacing="0" cellpadding="0" width="726" class="table">
                <thead class="table_color" >
                  <tr>
                    <th width="90" valign="top">
                      <p>
                        Test Code
                </p>
                    </th>
                    <th width="126" valign="top">
                      <p>
                        Description
                </p>
                    </th>
                    <th width="192" valign="top">
                      <p>
                        Measurement/ testing
                </p>
                    </th>
                    <th width="66" valign="top">
                      <p align="center">
                        Total No. of tests
                </p>
                    </th>
                    <th width="102" valign="top">
                      <p>
                        Total no. of applicable tests/ Requirements
                </p>
                    </th>
                    <th width="102" valign="top">
                      <p>
                        No. of tests/ Requirements passed
                </p>
                    </th>
                    <th width="48" valign="top">
                      <p align="center">
                        Page No.
                </p>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2100
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        General Requirements
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Components (Cl.1.5)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        18
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.15 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.15 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.15 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2101
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        General Requirements
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Power interface (Cl.1.6)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        05
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.1.6 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.1.6 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.1.6 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2102
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Marking Requirements
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Marking &amp; instructions(Cl.1.7)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        39
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.1.7 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.1.7 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.1.7 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2103
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Electrical safety
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Protection from electric shock and energy hazards (Cl.2.1)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        14
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.1 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.1 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.2.1 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2104
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Electrical safety
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        SELV Circuits (Cl.2.2)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        04
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.2 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.2 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.2.2 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2105
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Electrical safety
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        TNV Circuits (Cl.2.3)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        11
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.3 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.3 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.2.3 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2106
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Electrical safety
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Limited current circuits (Cl.2.4)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        04
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.4 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.4 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.2.4 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2107
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Electrical safety
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Limited Power sources (Cl.2.5)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        07
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.5 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.5 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.2.5 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2108
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Electrical safety
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Provisions for earthing and bonding (Cl.2.6)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        19
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.6 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.6 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.2.6 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2109
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Electrical safety
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Overcurrent and earth fault protection in primary circuits
                        (Cl.2.7)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        07
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.7 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.7 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.2.7 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2110
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Electrical safety
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Safety Interlocks (Cl.2.8)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        13
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.8 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.8 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.2.8 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2111
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Electrical safety
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Electrical Insulation (Cl.2.9)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        05
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.9 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.9 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.2.9 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2112
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Electrical safety
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Clearances, Creepage distances and distances through
                        insulation (Cl.2.10)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        63
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.10 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.2.10 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.2.10 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2113
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Wiring
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Wiring, connections and supply (Cl.3)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        11
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.3.1 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.3.1 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.3.1 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2114
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Wiring
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Connection to a main supply (Cl.3.2)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        14
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.3.2 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.3.2 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.3.2 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2115
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Wiring
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Wiring terminals for connection of external conductors
                        (Cl.3.3)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        09
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.3.3 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.3.3 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.3.3 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2116
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Wiring
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Disconnection for the main supply (Cl.3.4)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        12
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.3.4 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.3.4 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.3.4 page no." type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td width="90" valign="top">
                      <p>
                        EL 2117
                </p>
                    </td>
                    <td width="126" valign="top">
                      <p>
                        Wiring
                </p>
                    </td>
                    <td width="192" valign="top">
                      <p>
                        Interconnection of equipment (Cl.3.5)
                </p>
                    </td>
                    <td width="66" valign="top">
                      <p align="center">
                        05
                </p>
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.3.5 requriment" type="text" />
                    </td>
                    <td width="102" valign="top">
                      <input class="form-control" id="cl.3.5 requriment passed" type="text" />
                    </td>
                    <td width="48" valign="top">
                      <input class="form-control" id="cl.3.5 page no." type="text" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>





          <div className="submit-btn-div">
          <div style={{float:"right"}}>
            <Button onClick={this.saveData}>SUBMIT</Button>
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default MobileTest;