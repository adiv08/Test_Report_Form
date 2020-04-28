import axios from 'axios';
const HelperServices = {
    //   getJWTToken(username, password) {
    //     return new Promise(
    //       function (resolve, reject) {
    //         let data = {}
    //         data["username"] = username;
    //         data["password"] = password;
    //         axios.post(process.env.REACT_APP_BACKEND_URL + Constants.authenticateUser, data)
    //           .then((response) => {
    //             let token = 'Bearer '.concat(response.data.token);
    //             localStorage.setItem('token', token);
    //             resolve(response.status)
    //           })
    //           .catch((e) => {
    //             try {
    //               reject(e.response.status)
    //             } catch (error) {
    //             }

    //           });
    //       });
    //   },
    uploadFile(testEngineerName, docxFile, reportFileName) {
        return new Promise(
            function (resolve, reject) {
                var formData = new FormData();
                formData.append('test_engineer_name', testEngineerName);
                formData.append('report_docx', docxFile);
                formData.append('report_file_name', reportFileName);
                axios.post(process.env.REACT_APP_BACKEND_URL + "/test-report-generator/create-report-from-doc", formData)
                    .then((response) => {
                        resolve(response.status)
                    })
                    .catch((e) => {
                        try {
                            reject(e.response.status)
                        } catch (error) {
                        }

                    });
            });
    },
    downloadFile(FileName) {
        var data = {};
        data["report_name"] = FileName
        axios.post(process.env.REACT_APP_BACKEND_URL + "/test-report-generator/download_report", data)
            .then((response) => {
                console.log(response.data)
                const downloadLink = document.createElement("a");
                downloadLink.href = response.data;
                downloadLink.download = FileName;
                downloadLink.click();
            })
            .catch((e) => {
            });

    },
    getReportFileList() {
        return new Promise(
            function (resolve, reject) {
                axios.get(process.env.REACT_APP_BACKEND_URL + "/test-report-generator/get-report-list")
                    .then((response) => {
                        resolve(response.data)
                    })
                    .catch((e) => {
                        reject(e)
                    });
            })
    },
    updateStatus(reportName, accessCode, authorityName) {
        return new Promise(
            function (resolve, reject) {
                var formData = {};
                formData["report_name"] = reportName;
                formData['access_code'] = accessCode;
                formData['authority_name'] = authorityName;
                axios.post(process.env.REACT_APP_BACKEND_URL + "/test-report-generator/update-status", formData)
                    .then((response) => {
                        resolve(response.data)
                    })
                    .catch((e) => {
                        reject(e)
                    });
            })
    }
}
export default HelperServices