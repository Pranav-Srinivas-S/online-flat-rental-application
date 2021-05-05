import './App.css';
import store from './redux/store/ConfigureStore';
import UserRouter from './router/user/UserRouter';
import { Provider } from 'react-redux';
import HomeRouter from './router/HomeRouter';

function App() {
  return (
    <div>
      <Provider store={store()}>
        {/* <UserRouter />  */}
        <HomeRouter />
      </Provider>
    </div>
  );
}

export default App;

