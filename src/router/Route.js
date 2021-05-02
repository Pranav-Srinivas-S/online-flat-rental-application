import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../containers/common/Home';
import AdminDashBoard from '../containers/common/AdminDashBoard';
import UsersDashBoard from '../containers/common/UsersDashBoard';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path={`/admin-dashboard`} component={AdminDashBoard} />
            <Route path={`/users-dashboard`} component={UsersDashBoard} />
        </Switch>
    </BrowserRouter>
);

export default Routes;