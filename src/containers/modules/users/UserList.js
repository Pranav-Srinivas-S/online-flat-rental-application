import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../../redux/actions/UsersActions";
import axios from 'axios';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { deleteUser } from '../../../redux/actions/UsersActions';
import { useHistory } from 'react-router';

const UserList = () => {
  const dispatch = useDispatch();
  //const userId = useParams();
  const history = useHistory();
  const users = useSelector((state) => state.allUsers.users);

  const fetchUsers = async () => {
    const result = await axios.get('http://localhost:9191/api/ofr/view-all-users').catch((err) => {
      console.log("Error ", err);
    });
    dispatch(getAllUsers(result.data))
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("Users :", users);

  const deleteUserById = async (userId) => {
    await axios.delete(`http://localhost:9191/api/ofr/remove-user/${userId}`).catch((err) => { console.log("Error", err); });
    dispatch(deleteUser(userId));
    alert("Deleted Successfully");
    fetchUsers();
    history.push('/user');
  }

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>User Id</StyledTableCell>
                <StyledTableCell>User Name</StyledTableCell>
                <StyledTableCell>Password</StyledTableCell>
                <StyledTableCell>User Type</StyledTableCell>
                <StyledTableCell>View</StyledTableCell>
                <StyledTableCell>Update</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                users.map((user) => {
                  const { userId, userName, password,userType } = user;
                  return (
                    <StyledTableRow key={userId}>
                      <td>{userId}</td>
                      <td>{userName}</td>
                      <td>{password}</td>
                      <td>{userType}</td>
                      <td><Link to={`/view-user/${userId}`}><Button color="primary" variant="contained" className="btn btn-info">View</Button></Link></td>
                      <td><Link to={`/update-user/${userId}`}><Button color="inherit" variant="contained" className="btn btn-info">Update</Button></Link></td>
                      <td><Link to={`/view-user/${userId}`}><Button color="secondary" variant="contained" className="btn btn-secondary">Delete</Button></Link></td>
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

export default UserList;
