import './App.css';
import store from './redux/store/ConfigureStore';
import UserRouter from './router/user/UserRouter';
import { Provider } from 'react-redux';
import HomeRouter from './router/HomeRouter';
import FlatRouter from './router/FlatRouter';


function App() {
  return (
    <div>
      <Provider store={store()}>
        {/* <UserRouter />  */}
        {/* <LandlordRouter />  */}
        <HomeRouter />
        <FlatRouter />
        {/* <TenantRouter /> */}
      </Provider>
    </div>
  );
}

export default App;

