import './App.css';
import store from './redux/store/ConfigureStore';
import TenantRouter from './router/tenant/TenantRouter';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={store()}>
        <TenantRouter />
      </Provider>
    </div>
  );
}

export default App;
