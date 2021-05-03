import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getAllTenants } from "../../../redux/actions/TenantActions";
//import TenantComponent from "./TenantComponent";
//import * as tenantActions from "../../../redux/actions/TenantActions";
//import { Table } from "reactstrap";
//import { Button } from "reactstrap";
//import { bindActionCreators } from "redux";
import axios from 'axios';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const TenantList = () => {
    const dispatch = useDispatch();
    const tenants = useSelector((state) => state.allTenants.tenants);
  
    const fetchTenants = async () => {
      const result = await axios.get('http://localhost:9191/api/ofr/tenant/view-all-tenants').catch((err) => { 
          console.log("Error ", err); });
      dispatch(getAllTenants(result.data))
    };
  
    useEffect(() => {
      fetchTenants();
    }, []);
  
    console.log("Tenants :", tenants);
  
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
                        <td><Link to={`/tenant/view-tenant/${tenantId}`}><Button color="primary" variant="contained" className="btn btn-info">View </Button></Link></td>
                        <td><Link to={`/tenant/update-tenant/${tenantId}`}><Button color="primary" variant="contained" className="btn btn-info">Update </Button></Link></td>
                        <td><Link to={`/tenant/delete-tenant/${tenantId}`}><Button color="secondary" variant="contained" className="btn btn-secondary">Delete </Button></Link></td>
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

// class TenantList extends React.Component {
//     constructor() {
//         super();
//         this.state={
//             tenantId : '',
//             tenantName : '',
//             tenantAge : '',
//             houseNo : '',
//             street : '',
//             city : '',
//             state : '',
//             pin : '',
//             country : ''
//         }
//     }

//     handleInputChange = (event) => {
//         this.setState({
//             [event.target.name] : event.target.value
//         });
//     }

//     componentDidMount() {
//         this.props.tenantActions.getAllTenants();
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Tenant List</h1>
//                 <Table responsive striped>
//                     <thead>
//                         <tr>
//                             <th>Tenant Id</th>
//                             <th>Tenant Name</th>
//                             <th>Tennant Age</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.props.tenants.map(tenant => 
//                             <tr>
//                                 <td>{tenant.tenantId}</td>
//                                 <td>{tenant.tenantName}</td>
//                                 <td>{tenant.tenantAge}</td>
//                             </tr>
//                             )}
//                     </tbody>
//                 </Table>
//             </div>
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         tenants : state.TenantReducer.tenants
//     }
// }

// function mapDispatchToProps (dispatch) {
//     return {
//         tenantActions : bindActionCreators(tenantActions, dispatch)
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TenantList);

// const TenantList = () => {
//     alert("Tenant List");
//     const tenants = useSelector((state) => state);

//     const fetchTenants = () => getAllTenants();  

//     useEffect(() => {
//         fetchTenants();
//     }, []);
    
//     console.log("Tenants : ", tenants);

//     return(
//         <div className="ui grid container">
//             <TenantComponent/>
//         </div>
//     )
// }

// export default TenantList;