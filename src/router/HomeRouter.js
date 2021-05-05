import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../containers/common/HomePage";
import TenantDashBoard from "../containers/modules/tenant/TenantDashBoard";
import AddTenant from "../containers/modules/tenant/AddTenant";
import UpdateTenant from "../containers/modules/tenant/UpdateTenant";
import Tenant from "../containers/modules/tenant/Tenant";
import AboutUs from "../containers/common/AboutUs";
import ContactUs from "../containers/common/ContactUs";
import Login from "../containers/common/Login";
import UserDashBoard from "../containers/modules/users/UserDashBoard";
import AddUser from "../containers/modules/users/AddUser";
import UpdateUser from "../containers/modules/users/UpdateUser";
import User from "../containers/modules/users/User";

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
            </Switch>
        </div>
    </BrowserRouter>
);

export default HomeRouter;