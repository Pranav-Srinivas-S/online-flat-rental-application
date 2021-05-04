import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../containers/common/LoginPage";
import HomePage from "../containers/common/HomePage";
import TenantDashBoard from "../containers/modules/tenant/TenantDashBoard";
import AddTenant from "../containers/modules/tenant/AddTenant";
import UpdateTenant from "../containers/modules/tenant/UpdateTenant";
import Tenant from "../containers/modules/tenant/Tenant";

const HomeRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path={`/homepage`} component={HomePage} />
                <Route path={`/tenant`} component={TenantDashBoard} />
                <Route path={`add-tenant`} component={AddTenant} />
                <Route path={`/update-tenant/:tenantId`} component={UpdateTenant} />
                <Route path={`/view-tenant/:tenantId`} component={Tenant} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default HomeRouter;