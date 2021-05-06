import { BrowserRouter, Route, Switch } from "react-router-dom";
import FlatBookingDashBoard from "../../containers/modules/flatBooking/FlatBookingDashBoard";
import AddFlatBooking from "../../containers/modules/flatBooking/AddFlatBooking";
import UpdateFlatBooking from "../../containers/modules/flatBooking/UpdateFlatBooking";
import FlatBooking from "../../containers/modules/flatBooking/FlatBooking";

const FlatBookingRouter = () => (
    <BrowserRouter>
        <Switch>
        <Route path={`/flatBooking`} component={FlatBookingDashBoard} />
                <Route path={`/add-flatBooking`} component={AddFlatBooking} />
                <Route path={`/update-flatBooking/:bookingNo`} component={UpdateFlatBooking} />
                <Route path={`/view-flatBooking/:bookingNo`} component={FlatBooking} />
        </Switch>
        </BrowserRouter>
        
);

export default FlatBookingRouter;