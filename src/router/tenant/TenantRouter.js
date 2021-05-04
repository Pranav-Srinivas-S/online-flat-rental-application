import { BrowserRouter, Route, Switch } from "react-router-dom";
import TenantDashBoard from "../../containers/modules/tenant/TenantDashBoard";
import TenantDetail from "../../containers/modules/tenant/TenantDetail";
import AddTenant from "../../containers/modules/tenant/AddTenant";
import UpdateTenant from "../../containers/modules/tenant/UpdateTenant";
import Tenant from "../../containers/modules/tenant/Tenant";


const TenantRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path={`/tenant`} component={TenantDashBoard} />
            <Route path={`/add-tenant`} component={AddTenant} />
            <Route path={`/update-tenant`} component={UpdateTenant} />
            <Route path={`/view-tenant/:tenantId`} component={Tenant} />
        </Switch>
    </BrowserRouter>
);

export default TenantRouter;