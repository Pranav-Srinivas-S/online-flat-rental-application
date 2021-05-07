import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllLandlords } from "../../../redux/actions/LandlordActions";
import axios from 'axios';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {  deleteLandlord } from '../../../redux/actions/LandlordActions';
import { useHistory } from 'react-router';

/************************************************************************************
   * Component: LandlordList
   * Description: It is used to display all landlord details
   * Created By: NITHISHA KA 
   * Created Date:  01-05-2021 
 ************************************************************************************/

const LandlordList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const landlords = useSelector((state) => state.allLandlords.landlords);

  const fetchLandlords = async () => {
    const result = await axios.get('http://localhost:9191/api/ofr/view-all-landlords').catch((err) => {
      console.log("Error ", err);
    });
    dispatch(getAllLandlords(result.data))
  };

  useEffect(() => {
    fetchLandlords();
  }, []);

  console.log("Landlords :", landlords);

  const deleteLandlordById = async (landlordId) => {
    await axios.delete(`http://localhost:9191/api/ofr/delete-landlord/${landlordId}`).catch((err) => { console.log("Error", err); });
    dispatch(deleteLandlord(landlordId));
    alert("Deleted Successfully");
    fetchLandlords();
    history.push('/landlord');
  }
  /************************************************************************************
  * Return: All Landlord Details
  * Description: It is used to display All Landlord Details
  * Created By: Nithisha K A
  * Created Date:  01-05-2021 
************************************************************************************/

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>Landlord Id</StyledTableCell>
                <StyledTableCell>Landlord Name</StyledTableCell>
                <StyledTableCell>Landlord Age</StyledTableCell>
                <StyledTableCell>View</StyledTableCell>
                <StyledTableCell>Update</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                landlords.map((landlord) => {
                  const { landlordId, landlordName, landlordAge } = landlord;
                  return (
                    <StyledTableRow key={landlordId}>
                      <td>{landlordId}</td>
                      <td>{landlordName}</td>
                      <td>{landlordAge}</td>
                      <td><Link to={`/view-landlord/${landlordId}`}><Button color="primary" variant="contained" className="btn btn-info">View</Button></Link></td>
                      <td><Link to={`/update-landlord/${landlordId}`}><Button color="inherit" variant="contained" className="btn btn-info">Update</Button></Link></td>
                      <td><Link to={`/view-landlord/${landlordId}`}><Button color="secondary" variant="contained" className="btn btn-secondary">Delete</Button></Link></td>
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
/************************************************************************************
   * property: style 
   * Description: It is used for LandlordList Table Cell Styling
   * Created By: NITHISHA K A
   * Created Date:  01-05-2021 
 ************************************************************************************/

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

/************************************************************************************
   * property: style 
   * Description: It is used for LandlordList Table Row Styling
   * Created By: NITHISHA K A
   * Created Date:  01-05-2021 
 ************************************************************************************/


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default LandlordList;
