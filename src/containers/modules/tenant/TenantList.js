import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTenants } from "../../../redux/actions/TenantActions";
import axios from 'axios';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { deleteTenant } from '../../../redux/actions/TenantActions';
import { useHistory } from 'react-router';

const TenantList = () => {
  const dispatch = useDispatch();
  //const tenantId = useParams();
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

  const deleteTenantById = async (tenantId) => {
    await axios.delete(`http://localhost:9191/api/ofr/delete-tenant/${tenantId}`).catch((err) => { console.log("Error", err); });
    dispatch(deleteTenant(tenantId));
    alert("Deleted Successfully");
    fetchTenants();
    history.push('/tenant');
  }

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
                      <td><Link to="/update-tenant"><Button color="inherit" variant="contained" className="btn btn-info">Update</Button></Link></td>
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

export default TenantList;
