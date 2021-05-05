import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FlatDashBoard from '../containers/modules/flat/FlatDashboard';
import updateFlatComoponent from '../containers/modules/flat/UpdateFlat';
import Flat from '../containers/modules/flat/Flat';
import AddFlat from '../containers/modules/flat/AddFlat';
import FlatList from '../containers/modules/flat/FlatList';


const FlatRouter = () => (
    <BrowserRouter>
    <div>
        <Switch>
            <Route path={'/flat'} component={FlatDashBoard}/>
            <Route path={'/add-flat'} component={AddFlat}/>
            <Route path={'/update-flat/:flatId'} component={updateFlatComoponent}/>
            <Route path={'/view-flat/:flatId'} component={Flat}/>
            {/* <Route path={'/getAllFlats'} component={FlatList} /> */}
        </Switch>
    </div>
    </BrowserRouter>

);
export default FlatRouter;