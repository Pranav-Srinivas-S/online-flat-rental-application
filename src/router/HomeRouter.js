import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../containers/common/HomePage";
import TenantDashBoard from "../containers/modules/tenant/TenantDashBoard";
import AddTenant from "../containers/modules/tenant/AddTenant";
import UpdateTenant from "../containers/modules/tenant/UpdateTenant";
import Tenant from "../containers/modules/tenant/Tenant";
import AboutUs from "../containers/common/AboutUs";
import ContactUs from "../containers/common/ContactUs";
import Login from "../containers/common/Login";
import NotFound from "../containers/common/NotFound";
import UserDashBoard from "../containers/modules/users/UserDashBoard";
import AddUser from "../containers/modules/users/AddUser";
import UpdateUser from "../containers/modules/users/UpdateUser";
import User from "../containers/modules/users/User";
import UpdatePassword from "../containers/modules/users/UpdatePassword";
import FlatDashBoard from '../containers/modules/flat/FlatDashboard';
import updateFlatComoponent from '../containers/modules/flat/UpdateFlat';
import Flat from '../containers/modules/flat/Flat';
import AddFlat from '../containers/modules/flat/AddFlat';
import AdminDashBoard from '../containers/modules/admin/AdminDashboard';
import updateAdminComoponent from '../containers/modules/admin/UpdateAdmin';
import Admin from '../containers/modules/admin/Admin';
import AddAdmin from '../containers/modules/admin/AddAdmin';
import LandlordDashBoard from "../containers/modules/landlord/LandlordDashBoard";
import AddLandlord from "../containers/modules/landlord/AddLandlord";
import UpdateLandlord from "../containers/modules/landlord/UpdateLandlord";
import Landlord from "../containers/modules/landlord/Landlord";
import FlatBookingDashBoard from "../containers/modules/flatBooking/FlatBookingDashBoard";
import AddFlatBooking from "../containers/modules/flatBooking/AddFlatBooking";
import UpdateFlatBooking from "../containers/modules/flatBooking/UpdateFlatBooking";
import FlatBooking from "../containers/modules/flatBooking/FlatBooking";

/************************************************************************************
   * Component: HomeRouter
   * Description: It is used to Route all Pages.
   * Created Date:  04-05-2021 
 ************************************************************************************/

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

                <Route path={'/user'} component={UserDashBoard} />
                <Route path={'/add-user'} component={AddUser} />
                <Route path={'/update-user/:userId'} component={UpdateUser} />
                <Route path={'/view-user/:userId'} component={User} />
                <Route path={`/update-password`} component={UpdatePassword} />

                <Route path={'/flat'} component={FlatDashBoard} />
                <Route path={'/add-flat'} component={AddFlat} />
                <Route path={'/update-flat/:flatId'} component={updateFlatComoponent} />
                <Route path={'/view-flat/:flatId'} component={Flat} />

                <Route path={'/admin'} component={AdminDashBoard} />
                <Route path={'/add-admin'} component={AddAdmin} />
                <Route path={'/update-admin/:adminId'} component={updateAdminComoponent} />
                <Route path={'/view-admin/:adminId'} component={Admin} />

                <Route exact path={`/landlord`} component={LandlordDashBoard} />
                <Route exact path={`/add-landlord`} component={AddLandlord} />
                <Route exact path={`/update-landlord/:landlordId`} component={UpdateLandlord} />
                <Route exact path={`/view-landlord/:landlordId`} component={Landlord} />

                <Route path={`/flatBooking`} component={FlatBookingDashBoard} />
                <Route path={`/add-flatBooking`} component={AddFlatBooking} />
                <Route path={`/update-flatBooking/:bookingNo`} component={UpdateFlatBooking} />
                <Route path={`/view-flatBooking/:bookingNo`} component={FlatBooking} />

                <Route component={NotFound} />

            </Switch>
        </div>
    </BrowserRouter>
);

export default HomeRouter;