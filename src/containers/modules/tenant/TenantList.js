import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTenants } from "../../../redux/actions/TenantActions";
import axios from 'axios';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

/************************************************************************************
   * Component: TenantList
   * Description: It is used to display all tenant details
   * Created By: PRANAV SRINIVAS S
   * Created Date:  01-05-2021 
 ************************************************************************************/

const TenantList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const tenants = useSelector((state) => state.allTenants.tenants);

  const fetchTenants = async () => {
    const result = await axios.get('http://localhost:9191/api/ofr/view-all-tenants').catch((err) => {
      console.log("Error ", err);
    });
    dispatch(getAllTenants(result.data))
  };

  useEffect(() => {
    fetchTenants();
  }, []);

  console.log("Tenants :", tenants);

  /************************************************************************************
  * Return: All Tenant Details
  * Description: It is used to display All Tenant Details
  * Created By: PRANAV SRINIVAS S
  * Created Date:  01-05-2021 
************************************************************************************/

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>Tenant Id</StyledTableCell>
                <StyledTableCell>Tenant Name</StyledTableCell>
                <StyledTableCell>Tenant Age</StyledTableCell>
                <StyledTableCell>View</StyledTableCell>
                <StyledTableCell>Update</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                tenants.map((tenant) => {
                  const { tenantId, tenantName, tenantAge } = tenant;
                  return (
                    <StyledTableRow key={tenantId}>
                      <td>{tenantId}</td>
                      <td>{tenantName}</td>
                      <td>{tenantAge}</td>
                      <td><Link to={`/view-tenant/${tenantId}`}><Button color="primary" variant="contained" className="btn btn-info">View</Button></Link></td>
                      <td><Link to={`/update-tenant/${tenantId}`}><Button color="inherit" variant="contained" className="btn btn-info">Update</Button></Link></td>
                      <td><Link to={`/view-tenant/${tenantId}`}><Button color="secondary" variant="contained" className="btn btn-secondary">Delete</Button></Link></td>
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
   * Description: It is used for TenantList Table Cell Styling
   * Created By: PRANAV SRINIVAS S
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
   * Description: It is used for TenantList Table Row Styling
   * Created By: PRANAV SRINIVAS S
   * Created Date:  01-05-2021 
 ************************************************************************************/

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default TenantList;
