import './App.css';
import store from './redux/store/ConfigureStore';

import { Provider } from 'react-redux';
import HomeRouter from './router/HomeRouter';
import FlatRouter from './router/FlatRouter';


function App() {
  return (
    <div>
      <Provider store={store()}>
        {/* <FlatBookingRouter /> */}
        {/* <UserRouter />  */}
        {/* <LandlordRouter />  */}
        <HomeRouter />
        {/* <TenantRouter /> */}
      </Provider>
    </div>
  );
}

export default App;