import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../../containers/common/Home';
import AdminDashBoard from '../../containers/common/AdminDashBoard';
import UsersDashBoard from '../../containers/common/UsersDashBoard';
import TenantList from "../../containers/modules/tenant/TenantList";
import TenantDashBoard from "../../containers/modules/tenant/TenantDashBoard";
import TenantDetail from "../../containers/modules/tenant/TenantDetail";
import { addTenant, updateTenant } from "../../redux/actions/TenantActions";

const TenantRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path={`/tenant`} component={TenantDashBoard} />
            <Route path={`/add-tenant`} component={addTenant} />
            <Route path={`/update-tenant/:tenantId`} component={updateTenant} />
            <Route path={`/get-tenant/:tenantId`} component={TenantDetail} />
        </Switch>
    </BrowserRouter>
);

export default TenantRouter;