import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllFlatBookings } from "../../../redux/actions/FlatBookingActions";
import axios from 'axios';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { deleteFlatBooking } from '../../../redux/actions/FlatBookingActions';
import { useHistory } from 'react-router';


const FlatBookingList = () => {
  const dispatch = useDispatch();
  //const bookingNo = useParams();
  const history = useHistory();
  const flatBookings = useSelector((state) => state.allFlatBookings.flatBookings);

  const fetchFlatBookings = async () => {
    const result = await axios.get('http://localhost:9191/api/ofr/view-all-flatBookings').catch((err) => {
      console.log("Error ", err);
    });
    dispatch(getAllFlatBookings(result.data))
  };

  useEffect(() => {
    fetchFlatBookings();
  }, []);

  console.log("FlatBookings :", flatBookings);

  const deleteFlatBookingById = async (bookingNo) => {
    await axios.delete(`http://localhost:9191/api/ofr/delete-flatBooking/${bookingNo}`).catch((err) => { console.log("Error", err); });
    dispatch(deleteFlatBooking(bookingNo));
    alert("Deleted Successfully");
    fetchFlatBookings();
    history.push('/flatBooking');
  }

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>bookingNo</StyledTableCell>
                <StyledTableCell>bookingFromDate</StyledTableCell>
                <StyledTableCell>bookingToDate</StyledTableCell>
                

                <StyledTableCell>View</StyledTableCell>
                <StyledTableCell>Update</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                flatBookings.map((flatBooking) => {
                  const { bookingNo, bookingFromDate, bookingToDate } = flatBooking;
                  return (
                    <StyledTableRow key={bookingNo}>
                      <td>{bookingNo}</td>
                      <td>{bookingFromDate}</td>
                      <td>{bookingToDate}</td>
                      <td><Link to={`/view-flatBooking/${bookingNo}`}><Button color="primary" variant="contained" className="btn btn-info">View</Button></Link></td>
                      <td><Link to={`/update-flatBooking/${bookingNo}`}><Button color="inverse" variant="contained" className="btn btn-info">Update</Button></Link></td>
                      <td><Link to={`/view-flatBooking/${bookingNo}`}><Button color="secondary" variant="contained" className="btn btn-secondary">Delete</Button></Link></td>
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

export default FlatBookingList;