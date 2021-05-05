import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector, connect } from 'react-redux';
import {getAllFlats} from '../../../redux/actions/FlatActions';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useHistory} from 'react-router';
import {deleteFlat} from '../../../redux/actions/FlatActions';



const FlatList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const flats = useSelector((state) => state.allFlats.flats);

  const fetchFlats = async () => {
    const result = await axios.get('http://localhost:9191/api/ofr/view-all-flats').catch((err) => { console.log("Error ", err); });
    dispatch(getAllFlats(result.data))
  };


  useEffect(() => {
    fetchFlats();
  }, []);

  console.log("Flats :", flats);

  const  deleteFlatById = async (flatId) => {
    await axios.delete(`http://localhost:9191/api/ofr/delete-flat/${flatId}`).catch((err) => {console.log("Error" , err);});
   dispatch(deleteFlat(flatId));
   alert("Deleted Successfully");
   fetchFlats();
   history.push('/flat');
 }

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>Flat Id</StyledTableCell>
                <StyledTableCell>Flat Cost</StyledTableCell>
                <StyledTableCell>Availability</StyledTableCell>
                <StyledTableCell>View</StyledTableCell>
                <StyledTableCell>Update</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                flats.map((flat) => {
                  const { flatId, flatCost, flatAvailability } = flat;
                  return (
                    <StyledTableRow key={flatId}>
                      <td>{flatId}</td>
                      <td>{flatCost}</td>
                      <td>{flatAvailability}</td>
                      <td><Link to={`/view-flat/${flatId}`}><Button color="primary" variant="contained" className="btn btn-info">View </Button></Link></td>
                      <td><Link to={`/update-flat/${flatId}`}><Button color="primary" variant="outlined" className="btn btn-info">Update </Button></Link></td>
                      <td><Link to={`/view-flat/${flatId}`}><Button color="secondary" variant="contained" className="btn btn-secondary">Delete </Button></Link></td>
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

export default FlatList;