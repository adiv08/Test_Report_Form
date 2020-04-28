import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DownloadImage from '../../assets/images/download.svg';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import HelperServices from "../../services"

const columns = [
    { id: 'ReportName', label: 'Test Report Number', minWidth: 170 },
    { id: 'TestEngineerName', label: 'Testing Engineer name', minWidth: 140 },
    {
        id: 'UploadDate',
        label: 'Upload Date',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'ApprovedSatatus1',
        label: 'Testing Engineer',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'ApprovedSatatus2',
        label: 'Head of Department',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'ApprovedSatatus3',
        label: 'Business Development Head',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'ReportApprovedSatatus',
        label: 'Status',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'Download',
        label: 'Download',
        minWidth: 70,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];



const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function ApproveReport() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [open, setOpen] = React.useState(false);
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
       HelperServices.getReportFileList()
            .then((data) => {
                setRows(data)
            })
        console.log('mount it!');
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const downloadReport = (ReportRow) => {
        console.log(ReportRow.ReportName)
        
        HelperServices.downloadFile(ReportRow.ReportName)
    }
    const TableCellClick = (ReportRow, columnId) => {
        if (columnId == "Download") {
            downloadReport(ReportRow)
        }
        else {
            if (columnId == 'ApprovedSatatus1') {
               // handleClickOpen()
               HelperServices.updateStatus(ReportRow.ReportName, "1234", 'ApprovedSatatus1')
            }
            else if (columnId == 'ApprovedSatatus2') {
                //handleClickOpen()
                HelperServices.updateStatus(ReportRow.ReportName, "3456", 'ApprovedSatatus2')
            }
            else if (columnId == 'ApprovedSatatus3') {
                //handleClickOpen()
                HelperServices.updateStatus(ReportRow.ReportName, "7910", 'ApprovedSatatus3')
            }
        }
    }

    return (
        <>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} onClick={() => TableCellClick(row, column.id)}>
                                                    {
                                                        column.id == "Download" ? <img style={{ height: "25px" }} src={DownloadImage} alt="Download" /> : column.format && typeof value === 'number' ? column.format(value) : value
                                                    }

                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Apporve Report</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To Approve this Report, please enter your Secret Code.
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Secret Code"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Approve
          </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
