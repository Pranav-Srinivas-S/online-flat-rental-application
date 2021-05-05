import './App.css';
import store from './redux/store/ConfigureStore';
import TenantRouter from './router/tenant/TenantRouter';
import { Provider } from 'react-redux';
import HomeRouter from './router/HomeRouter';

function App() {
  return (
    <div>
      <Provider store={store()}>
        {/* <TenantRouter /> */}
        <HomeRouter />
      </Provider>
    </div>
  );
}

export default App;
