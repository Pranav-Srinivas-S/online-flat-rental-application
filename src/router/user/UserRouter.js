import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserDashBoard from "../../containers/modules/users/UserDashBoard";
import AddUser from "../../containers/modules/users/AddUser";
import UpdateUser from "../../containers/modules/users/UpdateUser";
import User from "../../containers/modules/users/User";
import UserNotFound from "../../containers/modules/users/UserNotFound";
import { getUser } from "../../redux/actions/UsersActions";

const UserRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={'/user'} component={UserDashBoard} />
            <Route exact path={'/add-user'} component={AddUser} />
            <Route exact path={'/update-user/:userId'} component={UpdateUser} />
            <Route exact path={'/view-user/:userId'} component={User}/>
            <Route component={UserNotFound} />
        </Switch>
    </BrowserRouter>
);

export default UserRouter;