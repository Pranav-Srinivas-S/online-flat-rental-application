import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../containers/common/LoginPage";
import HomePage from "../containers/common/HomePage";
import TenantDashBoard from "../containers/modules/tenant/TenantDashBoard";
import AddTenant from "../containers/modules/tenant/AddTenant";
import UpdateTenant from "../containers/modules/tenant/UpdateTenant";
import Tenant from "../containers/modules/tenant/Tenant";
import AboutUs from "../containers/common/AboutUs";
import ContactUs from "../containers/common/ContactUs";
import Login from "../containers/common/Login";
import FlatBookingDashBoard from "../containers/modules/flatBooking/FlatBookingDashBoard";
import AddFlatBooking from "../containers/modules/flatBooking/AddFlatBooking";
import UpdateFlatBooking from "../containers/modules/flatBooking/UpdateFlatBooking";
import FlatBooking from "../containers/modules/flatBooking/FlatBooking";

const HomeRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path={`/homepage`} component={HomePage} />
                <Route path={`/aboutus`} component={AboutUs} />
                <Route path={`/contactus`} component={ContactUs} />
                <Route path={`/tenant`} component={TenantDashBoard} />
                <Route path={`/add-tenant`} component={AddTenant} />
                <Route path={`/update-tenant/:tenantId`} component={UpdateTenant} />
                <Route path={`/view-tenant/:tenantId`} component={Tenant} />
                <Route path={`/flatBooking`} component={FlatBookingDashBoard} />
                <Route path={`/add-flatBooking`} component={AddFlatBooking} />
                <Route path={`/update-flatBooking/:bookingNo`} component={UpdateFlatBooking} />
                <Route path={`/view-flatBooking/:bookingNo`} component={FlatBooking} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default HomeRouter;