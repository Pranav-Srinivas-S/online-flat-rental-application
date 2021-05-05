import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getFlatBooking } from "../../../redux/actions/FlatBookingActions";

const FlatBookingDetail = () => {
    const flatBooking = useSelector((state) => state.flatBooking);

    const {bookingNo, bookingFromDate, bookingToDate, FlatBookingDetails} = flatBooking;

    const {tId} = useParams();

    //const dispatch = useDispatch();

    console.log(tId);

    const fetchFlatBookingDetail = () => getFlatBooking(tId);

    useEffect(() => {
        if(tId && tId != "") 
            fetchFlatBookingDetail();
    }, [tId]);

    return (
        <div className="ui grid container">
          {Object.keys(flatBooking).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <div className="ui placeholder segment">
              <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">AND</div>
                <div className="middle aligned row">
                  <div className="column lp">
                    <img className="ui fluid image" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.moneycrashers.com%2Ftips-flatBooking-landlords-find-apartment%2F&psig=AOvVaw3XAVGNx2oYpJG2jY0DM2mC&ust=1620038368910000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCh57HnqvACFQAAAAAdAAAAABAD" alt="FlatBooking Image"/>
                  </div>
                  <div className="column rp">
                    <h1>{bookingNo}</h1>
                    <h1>{bookingFromDate}</h1>
                    <h2>ToDate: {bookingToDate}</h2>
                    <p>{flatBookingDetails}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    );
};

export default FlatBookingDetail;