import './App.css';
import store from './redux/store/ConfigureStore';

import { Provider } from 'react-redux';
import HomeRouter from './router/HomeRouter';

function App() {
  return (
    <div>
      <Provider store={store()}>
        {/* <FlatBookingRouter /> */}
        {/* <UserRouter />  */}
        <HomeRouter />
      </Provider>
    </div>
  );
}

export default App;

