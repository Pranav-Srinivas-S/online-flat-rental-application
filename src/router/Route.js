import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../containers/common/Home';
import AdminDashBoard from '../containers/common/AdminDashBoard';
import UsersDashBoard from '../containers/common/UsersDashBoard';
import TenantList from "../containers/modules/tenant/TenantList";
import TenantDetail from "../containers/modules/tenant/TenantDetail";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path={`/admin-dashboard`} component={AdminDashBoard} />
            <Route path={`/users-dashboard`} component={UsersDashBoard} />
            <Route path={`/tenant`} component={TenantList}/>
            <Route path={`/tenant/view-tenant/:tenantId`} exact component={TenantDetail} />
        </Switch>
    </BrowserRouter>
);

export default Routes;