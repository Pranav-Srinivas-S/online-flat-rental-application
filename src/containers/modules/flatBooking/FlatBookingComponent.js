import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FlatBookingComponent = () => {
    const flatBookings = useSelector((state) => state.allFlatBookings.flatBookings);

    const renderList = flatBookings.map((flatBooking) => {
        const {bookingNo, bookingFromDate, bookingToDate} = flatBooking;
        return(
            <div className="four wide coloumn" key={bookingNo}>
                <Link to={`/flatBooking/view-flatBooking/${bookingNo}`}>
                    <div className="ui link cards">
                        <div classname="card">
                            <div className="content">
                               <div className="header">{bookingFromDate}</div> 
                               <div className="meta">{bookingToDate}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return <>{renderList}</>;
};

export default FlatBookingComponent;