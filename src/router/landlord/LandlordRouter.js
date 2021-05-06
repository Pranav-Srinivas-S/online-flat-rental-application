import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandlordDashBoard from "../../containers/modules/landlord/LandlordDashBoard";
import AddLandlord from "../../containers/modules/landlord/AddLandlord";
import UpdateLandlord from "../../containers/modules/landlord/UpdateLandlord";
import Landlord from "../../containers/modules/landlord/Landlord";
import LandlordNotFound from "../../containers/modules/landlord/LandlordNotFound";


const LandlordRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={`/landlord`} component={LandlordDashBoard} />
            <Route exact path={`/add-landlord`} component={AddLandlord} />
            <Route exact path={`/update-landlord/:landlordId`} component={UpdateLandlord} />
            <Route exact path={`/view-landlord/:landlordId`} component={Landlord} />
            <Route component={LandlordNotFound} />
        </Switch>
    </BrowserRouter>
);

export default LandlordRouter;