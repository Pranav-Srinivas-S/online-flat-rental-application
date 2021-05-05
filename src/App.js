import './App.css';
import store from './redux/store/ConfigureStore';
import TenantRouter from './router/tenant/TenantRouter';
import FlatRouter from './router/FlatRouter';
import { Provider } from 'react-redux';
import HomeRouter from './router/HomeRouter';

function App() {
  return (
    <div>
      <Provider store={store()}>
        <TenantRouter />
        <FlatRouter />
        {/* <TenantRouter /> */}
        <HomeRouter />
      </Provider>
    </div>
  );
}

export default App;
