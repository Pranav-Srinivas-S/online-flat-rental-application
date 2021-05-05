import { BrowserRouter, Route, Switch } from "react-router-dom";
import TenantDashBoard from "../../containers/modules/tenant/TenantDashBoard";
import AddTenant from "../../containers/modules/tenant/AddTenant";
import UpdateTenant from "../../containers/modules/tenant/UpdateTenant";
import Tenant from "../../containers/modules/tenant/Tenant";
import TenantNotFound from "../../containers/modules/tenant/TenantNotFound";

const TenantRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={`/tenant`} component={TenantDashBoard} />
            <Route exact path={`/add-tenant`} component={AddTenant} />
            <Route exact path={`/update-tenant/:tenantId`} component={UpdateTenant} />
            <Route exact path={`/view-tenant/:tenantId`} component={Tenant} />
            <Route component={TenantNotFound} />
        </Switch>
    </BrowserRouter>
);

export default TenantRouter;