import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector, connect } from 'react-redux';
import { getAllAdmins } from '../../../redux/actions/AdminActions';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';



const AdminList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const admins = useSelector((state) => state.allAdmins.admins);

  const fetchAdmins = async () => {
    const result = await axios.get(`http://localhost:9191/api/ofr/view-all-admin`).catch((err) => { console.log("Error ", err); });
    dispatch(getAllAdmins(result.data))
  };


  useEffect(() => {
    fetchAdmins();
  }, []);

  console.log("Admins :", admins);

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>Admin Id</StyledTableCell>
                <StyledTableCell>View</StyledTableCell>
                <StyledTableCell>Update</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                admins.map((admin) => {
                  const { adminId } = admin;
                  return (
                    <StyledTableRow key={adminId}>
                      <td>{adminId}</td>
                      <td><Link to={`/view-admin/${adminId}`}><Button color="primary" variant="contained" className="btn btn-info">View </Button></Link></td>
                      <td><Link to={`/update-admin/${adminId}`}><Button color="primary" variant="outlined" className="btn btn-info">Update </Button></Link></td>
                      <td><Link to={`/view-admin/${adminId}`}><Button color="secondary" variant="contained" className="btn btn-secondary">Delete </Button></Link></td>
                    </StyledTableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

    </div>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default AdminList;